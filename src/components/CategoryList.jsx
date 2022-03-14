import React from "react";
import ShoppingListItem from "./ShoppingListItem.jsx";
import "./CategoryList.css";

function CategoryList({name, items, isEditDisabled}) {
    return (
        <div className="categoryContainer">
            <h3 className="categoryHeader">{name}</h3>
            {
            items
            /* <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>
            <ShoppingListItem name="Fish" quantity="1" isDisabled={isEditDisabled}/>*/}
            
        </div>
    );
}

export default CategoryList; 