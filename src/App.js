import HomePage from './components/HomePage.jsx';
import ShoppingList from "./components/ShoppingList.jsx";
import ShoppingListPreset from "./components/ShoppingListPreset.jsx";
import AddItemShoppingList from "./components/AddItemShoppingList.jsx";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingListItemDataByCategory: {value: this.initializeShoppingList()},
      nextShoppingListItemId: 0,
      itemsToCategories: {value: this.initializeItemsToCategories()},

      presetArray: [],
      nextPresetId: 0,
    };
    this.createShoppingListItem = this.createShoppingListItem.bind(this);
    this.removeShoppingListItem = this.removeShoppingListItem.bind(this);
    this.updateShoppingListItem = this.updateShoppingListItem.bind(this);
    this.clearShoppingList = this.clearShoppingList.bind(this);

    this.createNewPreset = this.createNewPreset.bind(this);
    this.createPresetListItem = this.createPresetListItem.bind(this);
    this.updatePresetListItem = this.updatePresetListItem.bind(this);
    this.removePresetListItem = this.removePresetListItem.bind(this);
    this.updatePresetName = this.updatePresetName.bind(this);
    this.importItemstoShoppingList = this.importItemstoShoppingList.bind(this);
    this.deletePreset = this.deletePreset.bind(this);
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profileSettings" element={<HomePage />} />
        <Route path="/shoppingList" 
          element={<ShoppingList 
            itemDataByCategory={this.state.shoppingListItemDataByCategory.value}
            removeItem={this.removeShoppingListItem}
            updateItem={this.updateShoppingListItem}
            clearShoppingList={this.clearShoppingList}
          />} 
        />
        <Route path="/shoppingList/add" 
          element={<AddItemShoppingList 
            createItem={this.createShoppingListItem}
            createNewPreset={this.createNewPreset}
            createPresetItem={this.createPresetListItem}
            updateItem={this.updatePresetListItem}
            removeItem={this.removePresetListItem}
            updatePresetName={this.updatePresetName}
            importItemstoShoppingList={this.importItemstoShoppingList}
            deletePreset={this.deletePreset}
            itemsToCategories={this.state.itemsToCategories.value}
            nextItemId={this.state.nextShoppingListItemId} 
            presetArray={this.state.presetArray}
          />} 
        />
        <Route path="/recipes" element={<ShoppingListPreset />} />
        <Route path="/refrigerator" element={<HomePage />} />
        <Route path="/freezer" element={<HomePage />} />
      </Routes>
    );
  }

  createShoppingListItem(key, newValue) {
    if (key == undefined) {
      this.setState({
        shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set("Other", this.state.shoppingListItemDataByCategory.value.get("Other").concat(newValue))},
        nextShoppingListItemId: ++this.state.nextShoppingListItemId
      });
    } else {
      this.setState({
        shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set(key, this.state.shoppingListItemDataByCategory.value.get(key).concat(newValue))},
        nextShoppingListItemId: ++this.state.nextShoppingListItemId
      })
    }
  }

  removeShoppingListItem(id, categoryName) {
    let tempArray = this.state.shoppingListItemDataByCategory.value.get(categoryName);
    tempArray.splice(tempArray.findIndex((obj) => obj.id == id), 1);
    this.setState({
      shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set(categoryName, tempArray)}
    });
  }

  updateShoppingListItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked) {
    if (this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) != categoryName && !(this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) == undefined && categoryName == "Other")) {
      this.removeShoppingListItem(id, categoryName);
      this.createShoppingListItem(this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")), {id: id, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: newItemChecked})
    } else {
      let tempArray = this.state.shoppingListItemDataByCategory.value.get(categoryName);
      tempArray.find((obj, i) => {
        if (obj.id == id) {
          tempArray[i] = {id: id, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: newItemChecked};
          return true;
        }
      });
      this.setState({
        shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set(categoryName, tempArray)}
      });
    }
  }

  clearShoppingList() {
    this.setState({
      shoppingListItemDataByCategory: {value: this.initializeShoppingList()},
    });
  }

  createNewPreset() {
    this.setState({
      presetArray: this.state.presetArray.concat({id: this.state.nextPresetId, name: "New List", presetMap: this.initializeShoppingList()}),
      nextPresetId: ++this.state.nextPresetId
    });
  }

  createPresetListItem(presetId, key, newValue) {
    let temp = [...this.state.presetArray];
    if (key == undefined) {
      temp.find((obj) => {
        if (obj.id == presetId) {
          obj.presetMap.set("Other", obj.presetMap.get("Other").concat(newValue))
          return true;
        }
      })
    } else {
      temp.find((obj) => {
        if (obj.id == presetId) {
          obj.presetMap.set(key, obj.presetMap.get(key).concat(newValue))
          return true;
        }
      });
    }

    this.setState({
      presetArray: temp,
      nextShoppingListItemId: ++this.state.nextShoppingListItemId
    });
  }

  updatePresetListItem(presetId, itemId, categoryName, newItemName, newItemQuantity, newItemUnit) {
    let temp = [...this.state.presetArray];
    temp.find((obj) => {
      if (obj.id == presetId) {
        if (this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) != categoryName && !(this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) == undefined && categoryName == "Other")) {
          this.removePresetListItem(presetId, itemId, categoryName);
          this.createPresetListItem(presetId, this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")), {id: itemId, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: false});
        } else {
          let tempArray = obj.presetMap.get(categoryName);
          tempArray.find((o, i) => {
            if (o.id == itemId) {
              tempArray[i] = {id: itemId, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: false};
              return true;
            }
          });

          obj.presetMap.set(categoryName, tempArray);
        }
        return true;
      }
    });
    this.setState({
      presetArray: temp
    });
  }

  removePresetListItem(presetId, itemId, categoryName) {
    let temp = [...this.state.presetArray];
    temp.find((obj) => {
      if (obj.id == presetId) {
        let tempArray = obj.presetMap.get(categoryName);
        tempArray.splice(tempArray.findIndex((o) =>  o.id == itemId ), 1);
        obj.presetMap.set(categoryName, tempArray);

        return true;
      }
    });

    this.setState({
      presetArray: temp
    });
  }

  updatePresetName(presetId, newName) {
    let temp = [...this.state.presetArray];
    temp.find((obj) => {
      if (obj.id == presetId) {
        obj.name = newName;
        return true;
      }
    });
    this.setState({
      presetArray: temp
    });
  }

  deletePreset(presetId) {
    let temp = [...this.state.presetArray];
    temp.splice(temp.findIndex((obj) => obj.id == presetId), 1);

    this.setState({
      presetArray: temp
    });
  }

  importItemstoShoppingList(presetMap) {
    for (let currentItem of presetMap.values()) {
      this.createShoppingListItem(this.state.itemsToCategories.value.get(currentItem.name), currentItem);
    }
  }

  initializeItemsToCategories() {
    return new Map().set("soda", "Beverages")
    .set("coke", "Beverages")
    .set("sprite", "Beverages")
    .set("milk", "Dairy")
    .set("eggs", "Meats & Seafood")
    .set("bread", "Bakery & Breads")
    .set("cereal", "Breakfast")
    .set("chips", "Snacks")
    .set("cheese", "Dairy")
    .set("beer", "Beverages")
    .set("water", "Beverages")
    .set("cookies", "Snacks")
    .set("bacon", "Meats & Seafood")
    .set("cupcakes", "Snacks")
    .set("muffins", "Snacks")
    .set("bananas", "Fruit")
    .set("apples", "Fruit")
    .set("pineapples", "Fruit")
    .set("lemons", "Fruit")
    .set("peaches", "Fruit")
    .set("hamburgermeat", "Meats & Seafood")
    .set("potatoes", "Vegetables")
    .set("corn", "Vegetables")
    .set("onions", "Vegetables")
    .set("tomatoes", "Vegetables")
    .set("chicken", "Meats & Seafood")
    .set("beef", "Meats & Seafood")
    .set("steak", "Meats & Seafood")
    .set("fish", "Meats & Seafood")
  }

  initializeShoppingList() {
    return new Map().set("Meats & Seafood", [])
    .set("Breakfast", [])
    .set("Fruit", [])
    .set("Vegetables", [])
    .set("Prepared Food", [])
    .set("Snacks", [])
    .set("Pantry", [])
    .set("HerbsAndSpices", [])
    .set("Beverages", [])
    .set("Dairy", [])
    .set("Frozen", [])
    .set("Bakery & Breads", [])
    .set("Personal Care", [])
    .set("Other", [])
  }
}

export default App;
