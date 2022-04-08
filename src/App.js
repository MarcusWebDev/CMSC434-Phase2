import HomePage from './components/HomePage.jsx';
import ShoppingList from "./components/ShoppingList.jsx";
import ShoppingListPreset from "./components/ShoppingListPreset.jsx";
import AddItemShoppingList from "./components/AddItemShoppingList.jsx";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import InventoryRefrigerator from './components/InventoryRefrigerator.jsx';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import AddItemInventory from './components/AddItemInventory.jsx';
import AddItemInventoryLHF from './components/AddItemInventoryLHF.jsx';
import { useState } from 'react';
import ItemInfoInventory from './components/ItemInfoInventory.jsx';
import AllStorageUnits from './components/AllStorageUnits.jsx';
import AddStorageUnit from './components/AddStorageUnit.jsx';
import WorkInProgress from './components/WorkInProgress.jsx';
import LakeHouseFreezer from './components/LakeHouseFreezer.jsx';
import LakeHouseRefrigerator from './components/LakeHouseRefrigerator.jsx';
import AddItemInventoryLHR from './components/AddItemInventoryLHR.jsx';
import LakeHousePantry from './components/LakeHousePantry.jsx';
import AddItemInventoryLHP from './components/AddItemInventoryLHP.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingListItemDataByCategory: {value: this.initializeShoppingList()},
      nextShoppingListItemId: 0,
      itemsToCategories: {value: this.initializeItemsToCategories()},

      presetArray: [],
      nextPresetId: 0,
      dummyInv:this.dummyInventoryData(),
      nextInventoryId: 7,
      dummyHome:this.dummyHomePage(),
      dummyInv2:this.dummyInventoryDataLHF(),
      dummyInv3:this.dummyInventoryDataLHR(),
      dummyInv4:this.dummyInventoryDataLHP()
    };
    this.deleteItemInventory = this.deleteItemInventory.bind(this);
    this.reduceItemInventory = this.reduceItemInventory.bind(this);
    this.createItemInventory = this.createItemInventory.bind(this);
    this.updateItemInventory = this.updateItemInventory.bind(this);
    this.reduceItemInventoryLHF = this.reduceItemInventoryLHF.bind(this);
    this.deleteItemInventoryLHF = this.deleteItemInventoryLHF.bind(this);
    this.createItemInventoryLHF = this.createItemInventoryLHF.bind(this);
    this.reduceItemInventoryLHR = this.reduceItemInventoryLHR.bind(this);
    this.deleteItemInventoryLHR = this.deleteItemInventoryLHR.bind(this);
    this.createItemInventoryLHR = this.createItemInventoryLHR.bind(this);
    this.reduceItemInventoryLHP = this.reduceItemInventoryLHP.bind(this);
    this.deleteItemInventoryLHP = this.deleteItemInventoryLHP.bind(this);
    this.createItemInventoryLHP = this.createItemInventoryLHP.bind(this);
    this.editHomePage = this.editHomePage.bind(this);
    this.deleteHomePage = this.deleteHomePage.bind(this);
    this.importItemsFromShoppingList = this.importItemsFromShoppingList.bind(this);
    this.importItemsFromShoppingListLHF = this.importItemsFromShoppingListLHF.bind(this);
    this.importItemsFromShoppingListLHR = this.importItemsFromShoppingListLHR.bind(this);
    this.importItemsFromShoppingListLHP = this.importItemsFromShoppingListLHP.bind(this);
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
    this.createStorageUnit = this.createStorageUnit.bind(this);
  }


  

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage
        dummyHome={this.state.dummyHome} 
        dummyInv={this.state.dummyInv}/>} />
        <Route path="/profileSettings" element={<HomePage />} />
        <Route path="/shoppingList" 
          element={<ShoppingList 
            itemDataByCategory={this.state.shoppingListItemDataByCategory.value}
            removeItem={this.removeShoppingListItem}
            updateItem={this.updateShoppingListItem}
            clearShoppingList={this.clearShoppingList}
          />} 
        />
        <Route path="/allStorageUnits" element={<AllStorageUnits
        dummyHome={this.state.dummyHome} 
        editHomePage={this.editHomePage}
        deleteHomePage={this.deleteHomePage}/>} />
        <Route path="/addStorageUnits" element={<AddStorageUnit 
        dummyHome={this.state.dummyHome}
        id={this.state.nextInventoryId}
        createStorageUnit={this.createStorageUnit}/>} />
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
        <Route path="/inventory/OfficeRefrigerator" element={<InventoryRefrigerator
        dummyInv={this.state.dummyInv}
        onReduce={this.reduceItemInventory} 
        onDelete={this.deleteItemInventory}
        updateItem={this.updateItemInventory}/>} />
        <Route path="/inventory/addOfficeRefrigerator" element={<AddItemInventory importFromShoppingList={this.importItemsFromShoppingList}/>} />
        <Route path="/inventory/addOfficeRefrigeratorItem" element={<ItemInfoInventory 
        dummyInv={this.state.dummyInv}
        id={this.state.nextInventoryId}
        newItem={this.createItemInventory} />} />
        <Route path="/inventory/LakeHouseFreezer" element={<LakeHouseFreezer dummyInv2={this.state.dummyInv2} onReduce={this.reduceItemInventoryLHF} onDelete={this.deleteItemInventoryLHF}/>} />
        <Route path="/inventory/addLakeHouseFreezer" element={<AddItemInventoryLHF importFromShoppingList={this.importItemsFromShoppingListLHF}/>} />
        <Route path="/inventory/addLakeHouseFreezerItem" element={<ItemInfoInventory 
        dummyInv={this.state.dummyInv2}
        id={this.state.nextInventoryId}
        newItem={this.createItemInventoryLHF} />} />
        <Route path="/inventory/LakeHouseRefrigerator" element={<LakeHouseRefrigerator dummyInv={this.state.dummyInv3} onReduce={this.reduceItemInventoryLHR} onDelete={this.deleteItemInventoryLHR}/>} />
        <Route path="/inventory/addLakeHouseRefrigerator" element={<AddItemInventoryLHR importFromShoppingList={this.importItemsFromShoppingListLHR}/>} />
        <Route path="/inventory/addLakeHouseRefrigeratorItem" element={<ItemInfoInventory 
        dummyInv={this.state.dummyInv3}
        id={this.state.nextInventoryId}
        newItem={this.createItemInventoryLHR} />} />
        <Route path="/inventory/LakeHousePantry" element={<LakeHousePantry dummyInv={this.state.dummyInv4} onReduce={this.reduceItemInventoryLHP} onDelete={this.deleteItemInventoryLHP}/>} />
        <Route path="/inventory/addLakeHousePantry" element={<AddItemInventoryLHP importFromShoppingList={this.importItemsFromShoppingListLHP}/>} />
        <Route path="/inventory/addLakeHousePantryItem" element={<ItemInfoInventory 
        dummyInv={this.state.dummyInv4}
        id={this.state.nextInventoryId}
        newItem={this.createItemInventoryLHP} />} />
        <Route path="/workinprogress" element={<WorkInProgress />} />
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

  deleteItemInventory = (id) => {
    let temp = [...this.state.dummyInv];
    temp.splice(temp.findIndex((obj) => obj.id == id),1);
    let temp2 = [...this.state.dummyHome];
    temp2[0].numberitems = temp2[0].numberitems-1
    this.setState({
      dummyInv: temp,
      dummyHome:temp2
    });
  }

  deleteItemInventoryLHF = (id) => {
    let temp = [...this.state.dummyInv2];
    temp.splice(temp.findIndex((obj) => obj.id == id),1);
    let temp2 = [...this.state.dummyHome];
    temp2[1].numberitems = temp2[1].numberitems-1
    this.setState({
      dummyInv2: temp,
      dummyHome:temp2
    });
  }

  deleteItemInventoryLHR = (id) => {
    let temp = [...this.state.dummyInv3];
    temp.splice(temp.findIndex((obj) => obj.id == id),1);
    let temp2 = [...this.state.dummyHome];
    temp2[2].numberitems = temp2[2].numberitems-1
    this.setState({
      dummyInv3: temp,
      dummyHome:temp2
    });
  }

  deleteItemInventoryLHP = (id) => {
    let temp = [...this.state.dummyInv4];
    temp.splice(temp.findIndex((obj) => obj.id == id),1);
    let temp2 = [...this.state.dummyHome];
    temp2[3].numberitems = temp2[3].numberitems-1
    this.setState({
      dummyInv4: temp,
      dummyHome:temp2
    });
  }

  reduceItemInventory = (id) => {
    let temp = [...this.state.dummyInv];
    let index = temp.findIndex((obj) => obj.id == id)
    
    if(temp[index].quantity-1===0)
    return this.deleteItemInventory(id)
    temp[index].quantity=temp[index].quantity-1; 
    // console.log(temp[index].quantity)
    // temp.findIndex((obj) => obj.id == id ? obj.quantity=obj.quantity-1 : null);
    this.setState({
      dummyInv: temp

    });
    console.log(this.state.dummyInv);
    
  }

  reduceItemInventoryLHF = (id) => {
    let temp = [...this.state.dummyInv2];
    let index = temp.findIndex((obj) => obj.id == id)
    
    if(temp[index].quantity-1===0)
    return this.deleteItemInventoryLHF(id)
    temp[index].quantity=temp[index].quantity-1; 
    // console.log(temp[index].quantity)
    // temp.findIndex((obj) => obj.id == id ? obj.quantity=obj.quantity-1 : null);
    this.setState({
      dummyInv2: temp

    });
    console.log(this.state.dummyInv2);
    
  }

  reduceItemInventoryLHR = (id) => {
    let temp = [...this.state.dummyInv3];
    let index = temp.findIndex((obj) => obj.id == id)
    
    if(temp[index].quantity-1===0)
    return this.deleteItemInventoryLHR(id)
    temp[index].quantity=temp[index].quantity-1; 
    // console.log(temp[index].quantity)
    // temp.findIndex((obj) => obj.id == id ? obj.quantity=obj.quantity-1 : null);
    this.setState({
      dummyInv3: temp

    });
    console.log(this.state.dummyInv3);
    
  }

  reduceItemInventoryLHP = (id) => {
    let temp = [...this.state.dummyInv4];
    let index = temp.findIndex((obj) => obj.id == id)
    
    if(temp[index].quantity-1===0)
    return this.deleteItemInventoryLHP(id)
    temp[index].quantity=temp[index].quantity-1; 
    // console.log(temp[index].quantity)
    // temp.findIndex((obj) => obj.id == id ? obj.quantity=obj.quantity-1 : null);
    this.setState({
      dummyInv4: temp

    });
    console.log(this.state.dummyInv4);
    
  }

  createItemInventoryLHF = (id,name,quantity,unit,expiration) => {
    let temp = [...this.state.dummyInv2];
    let currentExpirationDate=new Date(expiration);
    let categoryName = "Other"
    var d = new Date();
    d.setDate(d.getDate() +3);
    let tempname=name.toLowerCase();
    name=tempname[0].toUpperCase()+tempname.substring(1);
    if(d>=currentExpirationDate)
    {
      categoryName="Expiring"
    }
    else {
      categoryName= this.state.itemsToCategories.value.get(name.toLowerCase().replace(/ /g, ""));
      if (categoryName == undefined) {
        categoryName= "Other";
      }
    }
    let item = {
    'id': id, 
    'name': name,
    'quantity': quantity,
    'unit': unit,
    'isDisabled': true,
    'checked': false,
    'expiration': new Date(expiration),
    'categoryName': categoryName
    }
    temp.push(item)
    let temp2 = [...this.state.dummyHome]
    temp2[1].numberitems = temp2[1].numberitems+1
    this.setState({
      dummyInv2:temp,
      nextInventoryId: ++this.state.nextInventoryId,
      dummyHome: temp2
    })
    console.log("Item Create",id);
  }

  createItemInventoryLHR = (id,name,quantity,unit,expiration) => {
    let temp = [...this.state.dummyInv3];
    let currentExpirationDate=new Date(expiration);
    let categoryName = "Other"
    var d = new Date();
    d.setDate(d.getDate() +3);
    let tempname=name.toLowerCase();
    name=tempname[0].toUpperCase()+tempname.substring(1);
    if(d>=currentExpirationDate)
    {
      categoryName="Expiring"
    }
    else {
      categoryName= this.state.itemsToCategories.value.get(name.toLowerCase().replace(/ /g, ""));
      if (categoryName == undefined) {
        categoryName= "Other";
      }
    }
    let item = {
    'id': id, 
    'name': name,
    'quantity': quantity,
    'unit': unit,
    'isDisabled': true,
    'checked': false,
    'expiration': new Date(expiration),
    'categoryName': categoryName
    }
    temp.push(item)
    let temp2 = [...this.state.dummyHome]
    temp2[2].numberitems = temp2[2].numberitems+1
    this.setState({
      dummyInv3:temp,
      nextInventoryId: ++this.state.nextInventoryId,
      dummyHome: temp2
    })
    console.log("Item Create",id);
  }

  createItemInventoryLHP = (id,name,quantity,unit,expiration) => {
    let temp = [...this.state.dummyInv4];
    let currentExpirationDate=new Date(expiration);
    let categoryName = "Other"
    var d = new Date();
    d.setDate(d.getDate() +3);
    let tempname=name.toLowerCase();
    name=tempname[0].toUpperCase()+tempname.substring(1);
    if(d>=currentExpirationDate)
    {
      categoryName="Expiring"
    }
    else {
      categoryName= this.state.itemsToCategories.value.get(name.toLowerCase().replace(/ /g, ""));
      if (categoryName == undefined) {
        categoryName= "Other";
      }
    }
    let item = {
    'id': id, 
    'name': name,
    'quantity': quantity,
    'unit': unit,
    'isDisabled': true,
    'checked': false,
    'expiration': new Date(expiration),
    'categoryName': categoryName
    }
    temp.push(item)
    let temp2 = [...this.state.dummyHome]
    temp2[3].numberitems = temp2[3].numberitems+1
    this.setState({
      dummyInv4:temp,
      nextInventoryId: ++this.state.nextInventoryId,
      dummyHome: temp2
    })
    console.log("Item Create",id);
  }

  updateItemInventory = (id,name) => {
    console.log("PLEASE")
    let temp = [...this.state.dummyInv];
    let index=temp.findIndex((obj) => obj.id === id);
    let tempitem = {
      'id':id,
      'name': name,
      'quantity': 7,
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Other'
    }
    temp.splice(index,1,1);
    this.setState({
      dummyInv:temp
    })
  }

  createItemInventory = (id,name,quantity,unit,expiration) => {
    let temp = [...this.state.dummyInv];
    let currentExpirationDate=new Date(expiration);
    let categoryName = "Other"
    var d = new Date();
    d.setDate(d.getDate() +3);
    let tempname=name.toLowerCase();
    name=tempname[0].toUpperCase()+tempname.substring(1);
    if(d>=currentExpirationDate)
    {
      categoryName="Expiring"
    }
    else {
      categoryName= this.state.itemsToCategories.value.get(name.toLowerCase().replace(/ /g, ""));
      if (categoryName == undefined) {
        categoryName= "Other";
      }
    }
    let item = {
    'id': id, 
    'name': name,
    'quantity': quantity,
    'unit': unit,
    'isDisabled': true,
    'checked': false,
    'expiration': new Date(expiration),
    'categoryName': categoryName
    }
    temp.push(item)
    let temp2 = [...this.state.dummyHome]
    temp2[0].numberitems = temp2[0].numberitems+1
    this.setState({
      dummyInv:temp,
      nextInventoryId: ++this.state.nextInventoryId,
      dummyHome: temp2
    })
    console.log("Item Create",id);
  }

  createStorageUnit(id,name) {
    let temp=[...this.state.dummyHome]
    let storage={
      'id': id,
      'name': name,
        'numberitems': 0,
        'linkTo':'#/workinprogress',
        'isEditable':false,
        'FavoriteFill':false
    }
    temp.push(storage);
    this.setState({
      dummyHome: temp,
      nextInventoryId: ++this.state.nextInventoryId
    })
  }

  editHomePage() {
    let temp=[...this.state.dummyHome]
    if(temp[0].isEditable==false) {
      for(const element of temp)
        {
            element.isEditable=true
            console.log(element)
        }
    }
    else {
      for(const element of temp)
        {
            element.isEditable=false
            console.log(element)
        }
    }
    this.setState({
      dummyHome:temp
    })

  }

  deleteHomePage = (id) => {
    let temp=[...this.state.dummyHome]
    console.log(temp.filter((page) => page.id !== id))
    this.setState({
      dummyHome:temp.filter((page) => page.id !== id)
    })
  }

  importItemsFromShoppingList() {
    let mapValues = this.state.shoppingListItemDataByCategory.value.values();
    let today = new Date();
    let tempArray = [...this.state.dummyInv];
    let temp2 = [...this.state.dummyHome]
    for (let currentArray of mapValues) {
      for (let currentItem of currentArray) {
        if (currentItem.checked) {
          let categoryName= this.state.itemsToCategories.value.get(currentItem.name.toLowerCase().replace(/ /g, ""));
          if (categoryName == undefined) {
            categoryName= "Other";
          }
          tempArray.push({
            'id': currentItem.id, 
            'name': currentItem.name,
            'quantity': currentItem.quantity,
            'unit': currentItem.unit,
            'isDisabled': true,
            'checked': false,
            'expiration': new Date(today.setDate(today.getDate() + 7)),
            'categoryName': categoryName
          });
          temp2[0].numberitems = temp2[0].numberitems+1
        }
      }
    }
    this.setState({
      dummyInv: tempArray,
      dummyHome: temp2
    })
  }

  importItemsFromShoppingListLHF() {
    let mapValues = this.state.shoppingListItemDataByCategory.value.values();
    let today = new Date();
    let tempArray = [...this.state.dummyInv2];
    let temp2 = [...this.state.dummyHome]
    for (let currentArray of mapValues) {
      for (let currentItem of currentArray) {
        if (currentItem.checked) {
          let categoryName= this.state.itemsToCategories.value.get(currentItem.name.toLowerCase().replace(/ /g, ""));
          if (categoryName == undefined) {
            categoryName= "Other";
          }
          tempArray.push({
            'id': currentItem.id, 
            'name': currentItem.name,
            'quantity': currentItem.quantity,
            'unit': currentItem.unit,
            'isDisabled': true,
            'checked': false,
            'expiration': new Date(today.setDate(today.getDate() + 7)),
            'categoryName': categoryName
          });
          temp2[1].numberitems = temp2[1].numberitems+1
        }
      }
    }
    this.setState({
      dummyInv2: tempArray,
      dummyHome: temp2
    })
  }

  importItemsFromShoppingListLHR() {
    let mapValues = this.state.shoppingListItemDataByCategory.value.values();
    let today = new Date();
    let tempArray = [...this.state.dummyInv3];
    let temp2 = [...this.state.dummyHome]
    for (let currentArray of mapValues) {
      for (let currentItem of currentArray) {
        if (currentItem.checked) {
          let categoryName= this.state.itemsToCategories.value.get(currentItem.name.toLowerCase().replace(/ /g, ""));
          if (categoryName == undefined) {
            categoryName= "Other";
          }
          tempArray.push({
            'id': currentItem.id, 
            'name': currentItem.name,
            'quantity': currentItem.quantity,
            'unit': currentItem.unit,
            'isDisabled': true,
            'checked': false,
            'expiration': new Date(today.setDate(today.getDate() + 7)),
            'categoryName': categoryName
          });
          temp2[2].numberitems = temp2[2].numberitems+1
        }
      }
    }
    this.setState({
      dummyInv3: tempArray,
      dummyHome: temp2
    })
  }

  importItemsFromShoppingListLHP() {
    let mapValues = this.state.shoppingListItemDataByCategory.value.values();
    let today = new Date();
    let tempArray = [...this.state.dummyInv4];
    let temp2 = [...this.state.dummyHome]
    for (let currentArray of mapValues) {
      for (let currentItem of currentArray) {
        if (currentItem.checked) {
          let categoryName= this.state.itemsToCategories.value.get(currentItem.name.toLowerCase().replace(/ /g, ""));
          if (categoryName == undefined) {
            categoryName= "Other";
          }
          tempArray.push({
            'id': currentItem.id, 
            'name': currentItem.name,
            'quantity': currentItem.quantity,
            'unit': currentItem.unit,
            'isDisabled': true,
            'checked': false,
            'expiration': new Date(today.setDate(today.getDate() + 7)),
            'categoryName': categoryName
          });
          temp2[3].numberitems = temp2[3].numberitems+1
        }
      }
    }
    this.setState({
      dummyInv4: tempArray,
      dummyHome: temp2
    })
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
      presetArray: this.state.presetArray.concat({id: this.state.nextPresetId, name: "New Template", presetMap: this.initializeShoppingList()}),
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

  updatePresetListItem(presetId, itemId, categoryName, newItemName, newItemQuantity, newItemUnit, newPresetChecked) {
    let temp = [...this.state.presetArray];
    temp.find((obj) => {
      if (obj.id == presetId) {
        if (this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) != categoryName && !(this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) == undefined && categoryName == "Other")) {
          this.removePresetListItem(presetId, itemId, categoryName);
          this.createPresetListItem(presetId, this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")), {id: itemId, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: false, presetChecked: newPresetChecked});
        } else {
          let tempArray = obj.presetMap.get(categoryName);
          tempArray.find((o, i) => {
            if (o.id == itemId) {
              tempArray[i] = {id: itemId, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: false, presetChecked: newPresetChecked};
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
    for (let currentArray of presetMap.values()) {
      for (let currentItem of currentArray) {
        if (currentItem.presetChecked) {
          currentItem.presetChecked = false;
          currentItem.id = this.state.nextShoppingListItemId;
          this.setState({
            nextShoppingListItemId: ++this.state.nextShoppingListItemId
          })
          this.createShoppingListItem(this.state.itemsToCategories.value.get(currentItem.name), currentItem);
        }
      }
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
    .set("toothpaste", "Personal Care")
    .set("toiletpaper", "Personal Care")
    .set("lotion", "Personal Care")
    .set("thyme", "Herbs & Spices")
    .set("cayennepowder", "Herbs & Spices")
    .set("cayenne", "Herbs & Spices")
    .set("onionpowder", "Herbs & Spices")
    .set("mangoes", "Fruit")
    .set("detergent", "Personal Care")
    .set("soap", "Personal Care")
    .set("shampoo", "Personal Care")
    .set("conditioner", "Personal Care")
    .set("razors", "Personal Care")
    .set("sourcream", "Dairy")
    .set("coffee", "Beverages")
    .set("juice", "Beverages")
    .set("frozenpizza", "Frozen")
    .set("icecream", "Frozen")
    .set("firstaid", "Personal Care")
    .set("tampons", "Personal Care")
    .set("pantyliners", "Personal Care")
    .set("vitamins", "Personal Care")
    .set("coughsyrup", "Personal Care")
    .set("tvdinners", "Frozen")
    .set("frozenvegetables", "Frozen")
    .set("frozenfruit", "Frozen")
    .set("waffles", "Frozen")
    .set("toasterstrudel", "Frozen")
    .set("toasterstrudels", "Frozen")  
  }

  initializeShoppingList() {
    return new Map().set("Bakery & Breads", [])
    .set("Beverages", [])
    .set("Breakfast", [])
    .set("Dairy", [])
    .set("Frozen", [])
    .set("Fruit", [])
    .set("Herbs & Spices", [])
    .set("Meats & Seafood", [])
    .set("Pantry", [])
    .set("Personal Care", [])
    .set("Prepared Food", [])
    .set("Snacks", [])
    .set("Vegetables", [])
    .set("Other", [])
  }

  dummyInventoryData() {
    let expiring = [
      {
      'id': '1', 
      'name': 'Bananas',
      'quantity': 7,
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Expiring'
   }, 
   {
      'id':'2',
      'name': 'Watermelon',
      'quantity': '1',
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Expiring'
   },
   {
      'id':'3',
      'name': 'Oatmilk',
      'quantity': '1',
      'unit': 'cartons',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Expiring'
   }, 
   {
     'id':'4',
       'name': 'Egg',
       'quantity': '15',
       'unit': 'qty',
       'isDisabled': true,
       'checked': false,
       'categoryName': 'Dairy'
   },
   {
    'id': 5, 
    'name': 'Apples',
    'quantity': '13',
    'unit': 'cartons',
    'isDisabled': true,
    'checked': false,
    'categoryName': 'Fruit'
   }
   ]
   return expiring
   }

   dummyInventoryDataLHF() {
    let expiring = [
      {
      'id': '1', 
      'name': 'Pizza',
      'quantity': 4,
      'unit': 'servings',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Frozen'
   }, 
   {
      'id':'2',
      'name': 'Beef',
      'quantity': '2',
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Meats & Seafood'
   },
   {
      'id':'3',
      'name': 'Icecream',
      'quantity': '4',
      'unit': 'cartons',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Frozen'
   }, 
   ]
   return expiring
   }

   dummyInventoryDataLHR() {
    let expiring = [
      {
      'id': '1', 
      'name': 'Beer',
      'quantity': 2,
      'unit': 'cartons',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Beverages'
   }, 
   {
      'id':'2',
      'name': 'Onions',
      'quantity': '3',
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Vegetables'
   },
   {
      'id':'3',
      'name': 'Pineapples',
      'quantity': '6',
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Fruit'
   }, 
   {
    'id':'4',
    'name': 'Cupcakes',
    'quantity': '2',
    'unit': 'cartons',
    'isDisabled': true,
    'checked': false,
    'categoryName': 'Snacks'
 },
 {
  'id':'5',
  'name': 'Muffins',
  'quantity': '3',
  'unit': 'cartons',
  'isDisabled': true,
  'checked': false,
  'categoryName': 'Snacks'
},
{
  'id':'6',
  'name': 'Lemons',
  'quantity': '4',
  'unit': 'lbs',
  'isDisabled': true,
  'checked': false,
  'categoryName': 'Fruit'
},
   ]
   return expiring
   }

   dummyInventoryDataLHP() {
    let expiring = [
      {
      'id': '1', 
      'name': 'Detergent',
      'quantity': 2,
      'unit': 'cartons',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Personal Care'
   }, 
   {
      'id':'2',
      'name': 'Thyme',
      'quantity': '2',
      'unit': 'servings',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Herbs & Spices'
   },
   {
      'id':'3',
      'name': 'Vitamin',
      'quantity': '3',
      'unit': 'cartons',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Personal Care'
   }, 
   {
    'id':'4',
    'name': 'Cayenne',
    'quantity': '4',
    'unit': 'servings',
    'isDisabled': true,
    'checked': false,
    'categoryName': 'Herbs & Spices'
 }, 
   ]
   return expiring
   }

   dummyHomePage() {
    let data = [
      {
        'id': 1,
        'name': 'Office Refrigerator',
        'numberitems': 5,
        'linkTo':'#/inventory/OfficeRefrigerator',
        'isEditable':false,
        'FavoriteFill':true
      },
      {
        'id': 2,
        'name': 'LakeHouse Freezer',
        'numberitems': 3,
        'linkTo':'#/inventory/LakeHouseFreezer',
        'isEditable':false,
        'FavoriteFill':false
      },
      {
        'id': 3,
        'name': 'LakeHouse Refrigerator',
        'numberitems': 6,
        'linkTo':'#/inventory/LakeHouseRefrigerator',
        'isEditable':false,
        'FavoriteFill':false
      },
      {
        'id': 4,
        'name': 'LakeHouse Pantry',
        'numberitems': 4,
        'linkTo':'#/inventory/LakeHousePantry',
        'isEditable':false,
        'FavoriteFill':false
      }
    ]
    return data
  }

}





export default App;
