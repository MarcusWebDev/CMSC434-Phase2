import HomePage from './components/HomePage.jsx';
import ShoppingList from "./components/ShoppingList.jsx";
import { Routes, Route } from "react-router-dom";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingListItemComponentsByCategory: {value: this.initializeListItemComponentsByCategory()},
      nextShoppingListItemId: 0,
      itemsToCategories: {value: this.initializeItemsToCategories()}
    };
    this.createShoppingListItem = this.createShoppingListItem.bind(this);
    this.removeShoppingListItem = this.removeShoppingListItem.bind(this);
    this.updateShoppingListItem = this.updateShoppingListItem.bind(this);
  }

  createShoppingListItem(key, newValue) {
    if (key == undefined) {
      this.setState({
        shoppingListItemComponentsByCategory: {value: this.state.shoppingListItemComponentsByCategory.value.set("Other", this.state.shoppingListItemComponentsByCategory.value.get("Other").concat(newValue))},
        nextShoppingListItemId: ++this.state.nextShoppingListItemId
      });
    } else {
      this.setState({
        shoppingListItemComponentsByCategory: {value: this.state.shoppingListItemComponentsByCategory.value.set(key, this.state.shoppingListItemComponentsByCategory.value.get(key).concat(newValue))},
        nextShoppingListItemId: ++this.state.nextShoppingListItemId
      })
    }
  }

  removeShoppingListItem(id, categoryName) {
    let tempArray = this.state.shoppingListItemComponentsByCategory.value.get(categoryName);
    tempArray.splice(tempArray.findIndex((obj) => obj.id == id), 1);
    this.setState({
      shoppingListItemComponentsByCategory: {value: this.state.shoppingListItemComponentsByCategory.value.set(categoryName, tempArray)}
    });
  }

  updateShoppingListItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked) {
    if (this.state.itemsToCategories.value.get(newItemName) != categoryName && !(this.state.itemsToCategories.value.get(newItemName) == undefined && categoryName == "Other")) {
      this.removeShoppingListItem(id, categoryName);
      this.createShoppingListItem(this.state.itemsToCategories.value.get(newItemName), {id: id, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: newItemChecked})
    } else {
      let tempArray = this.state.shoppingListItemComponentsByCategory.value.get(categoryName);
      tempArray.find((obj, i) => {
        if (obj.id == id) {
          tempArray[i] = {id: id, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: newItemChecked};
          return true;
        }
      });
      this.setState({
        shoppingListItemComponentsByCategory: {value: this.state.shoppingListItemComponentsByCategory.value.set(categoryName, tempArray)}
      });
    }
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profileSettings" element={<HomePage />} />
        <Route path="/shoppingList" 
          element={<ShoppingList 
          itemComponentsByCategory={this.state.shoppingListItemComponentsByCategory.value}
          createShoppingListItem={this.createShoppingListItem}
          removeItem={this.removeShoppingListItem}
          updateItem={this.updateShoppingListItem}
          itemsToCategories={this.state.itemsToCategories.value}
          nextItemId={this.state.nextShoppingListItemId} />} 
          />
        <Route path="/recipes" element={<HomePage />} />
        <Route path="/refrigerator" element={<HomePage />} />
        <Route path="/freezer" element={<HomePage />} />
      </Routes>
    );
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

  initializeListItemComponentsByCategory() {
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
