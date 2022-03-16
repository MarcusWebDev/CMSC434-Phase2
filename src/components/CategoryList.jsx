import React from "react";
import ShoppingListItem from "./ShoppingListItem.jsx";
import "./CategoryList.css";

function CategoryList({name, items, isEditDisabled}) {
    if(!items.length) {
        return null;
    } 
    
    return (
        <div className="categoryContainer">
            <h3 className="categoryHeader">{name}</h3>
            {
            items.map(shoppingListItem => <ShoppingListItem name={shoppingListItem.name} quantity={shoppingListItem.quantity} isDisabled={isEditDisabled} />)
            /* <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>*/}
            
        </div>
    );
}

export default CategoryList; 