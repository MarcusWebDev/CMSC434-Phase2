import React from "react";
import ShoppingListItem from "./ShoppingListItem.jsx";
import "./CategoryList.css";

function CategoryList({name, items, isEditDisabled, updateItem, removeItem}) {
    if(!items.length) {
        return null;
    } 

    return (
        <div className="categoryContainer">
            <h3 className="categoryHeader">{name}</h3>
            {
            items.map(shoppingListItem => <ShoppingListItem key={shoppingListItem.id} id={shoppingListItem.id} name={shoppingListItem.name} quantity={shoppingListItem.quantity} unit={shoppingListItem.unit} checked={shoppingListItem.checked} isDisabled={isEditDisabled} categoryName={name} updateItem={updateItem} removeItem={removeItem} />)
            /* <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>*/}
            
        </div>
    );
}

export default CategoryList; 