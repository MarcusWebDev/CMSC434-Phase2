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
    }
  }

  updateShoppingListItemComponentsByCategory(newValue) {
    this.setState({
      shoppingListItemComponentsByCategory: newValue
    })
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profileSettings" element={<HomePage />} />
        <Route path="/shoppingList" 
          element={<ShoppingList itemComponentsByCategory={this.state.shoppingListItemComponentsByCategory.value}/>} 
          updateItemComponentsByCategory={this.updateShoppingListItemComponentsByCategory}/>
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
    return new Map().set("meatAndSeafood", [])
    .set("breakfast", [])
    .set("fruit", [])
    .set("vegetables", [])
    .set("preparedFood", [])
    .set("snacks", [])
    .set("pantry", [])
    .set("herbsAndSpices", [])
    .set("beverages", [])
    .set("dairy", [])
    .set("frozen", [])
    .set("bakeryAndBreads", [])
    .set("personalCare", [])
    .set("other", [])
  }
}

export default App;
