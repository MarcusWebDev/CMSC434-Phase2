import HomePage from './components/HomePage.jsx';
import ShoppingList from "./components/ShoppingList.jsx";
import { Routes, Route } from "react-router-dom";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingListItemComponentsByCategory: {value: this.initializeListItemComponentsByCategory()},
      itemsToCategories: {value: this.initializeItemsToCategories()}
    };
    this.updateShoppingListItemComponentsByCategory = this.updateShoppingListItemComponentsByCategory.bind(this);
  }

  updateShoppingListItemComponentsByCategory(key, newValue) {

    this.setState({
      shoppingListItemComponentsByCategory: {value: this.state.shoppingListItemComponentsByCategory.value.set(key, this.state.shoppingListItemComponentsByCategory.value.get(key).concat(newValue))}
    })
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profileSettings" element={<HomePage />} />
        <Route path="/shoppingList" 
          element={<ShoppingList 
          itemComponentsByCategory={this.state.shoppingListItemComponentsByCategory.value}
          updateItemComponentsByCategory={this.updateShoppingListItemComponentsByCategory}/>} 
          />
        <Route path="/recipes" element={<HomePage />} />
        <Route path="/refrigerator" element={<HomePage />} />
        <Route path="/freezer" element={<HomePage />} />
      </Routes>
    );
  }

  initializeItemsToCategories() {
    return new Map().set("soda", "beverages")
    .set("coke", "beverages")
    .set("sprite", "beverages")
    .set("milk", "dairy")
    .set("eggs", "meatAndSeafood")
    .set("bread", "bakeryAndBreads")
    .set("cereal", "breakfast")
    .set("chips", "snacks")
    .set("cheese", "dairy")
    .set("beer", "beverages")
    .set("water", "beverages")
    .set("cookies", "snacks")
    .set("bacon", "meatAndSeafood")
    .set("cupcakes", "snacks")
    .set("muffins", "snacks")
    .set("bananas", "fruit")
    .set("apples", "fruit")
    .set("pineapples", "fruit")
    .set("lemons", "fruit")
    .set("peaches", "fruit")
    .set("hamburgermeat", "meatAndSeafood")
    .set("potatoes", "vegetables")
    .set("corn", "vegetables")
    .set("onions", "vegetables")
    .set("tomatoes", "vegetables")
    .set("chicken", "meatAndSeafood")
    .set("beef", "meatAndSeafood")
    .set("steak", "meatAndSeafood")
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
