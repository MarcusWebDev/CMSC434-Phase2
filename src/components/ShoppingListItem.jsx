import React from "react";
import "./ShoppingListItem.css";

function ShoppingListItem({id, name, quantity, unit, checked, isDisabled, categoryName, updateItem, removeItem}) {
    let newItemName = name;
    let newItemQuantity = quantity;
    let newItemUnit = unit;
    let newItemChecked = checked;
    return (
        <div className="shoppingListItemContainer">
            <input type="text" className="nameInput" defaultValue={name} disabled={isDisabled} onChange={(event) => {newItemName = event.target.value; updateItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked)}}/>
            <div className="quantitySelection">
                <input type="number" className="quantityInput" defaultValue={quantity} disabled={isDisabled} onChange={(event) => {newItemQuantity = event.target.value; updateItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked)}}/>
                <select name="metricsSelect" className="metricsSelect" defaultValue={unit} disabled={isDisabled} onChange={(event) => {newItemUnit = event.target.value; updateItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked)}}>
                    <option value="lbs">lbs</option>
                    <option value="gallons">gallons</option>
                    <option value="cartons">cartons</option>
                    <option value="bowls">bowls</option>
                    <option value="servings">servings</option>
                </select>
            </div>
            {isDisabled ? <input type="checkbox" className="checkbox" defaultChecked={newItemChecked} onChange={(event) => {newItemChecked = event.target.checked; updateItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked)}}/> : <img src={require("../icons/deleteSymbol.png")} className="shoppingListDelete" onClick={() => removeItem(id, categoryName)}/>}
        </div>
    );
}

export default ShoppingListItem;