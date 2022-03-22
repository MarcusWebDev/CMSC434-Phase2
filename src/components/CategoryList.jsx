import React from "react";
import ShoppingListItem from "./ShoppingListItem.jsx";
import "./CategoryList.css";

/*function mapItems(isPreset, items) {
    if (isPreset) {
        return (
            <div>

            </div>
        );
    } else {
        return (
            <div>
                {items.map(shoppingListItem => <ShoppingListItem 
                                                key={shoppingListItem.id}  
                                                id={shoppingListItem.id} 
                                                name={shoppingListItem.name} 
                                                quantity={shoppingListItem.quantity} 
                                                unit={shoppingListItem.unit} 
                                                checked={shoppingListItem.checked} 
                                                isDisabled={isEditDisabled} 
                                                categoryName={name} 
                                                updateItem={updateItem} 
                                                removeItem={removeItem} />)}
            </div>
        );
    }
}*/

function CategoryList({isPreset, presetId, name, items, isEditDisabled, updateItem, removeItem}) {
    if(!items.length) {
        return null;
    } 

    return (
        <div className={`categoryContainer ${isPreset ? "width300px" : null}`}>
            <h3 className="categoryHeader">{name}</h3>
            {items.map(shoppingListItem => <ShoppingListItem 
                                                key={shoppingListItem.id}  
                                                id={shoppingListItem.id} 
                                                isPreset={isPreset}
                                                presetId={presetId}
                                                name={shoppingListItem.name} 
                                                quantity={shoppingListItem.quantity} 
                                                unit={shoppingListItem.unit} 
                                                checked={shoppingListItem.checked} 
                                                isDisabled={isEditDisabled} 
                                                categoryName={name} 
                                                updateItem={updateItem} 
                                                removeItem={removeItem} />)}
            
        </div>
    );
}

export default CategoryList; 