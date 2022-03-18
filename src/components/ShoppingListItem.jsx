import React, { useState } from "react";
import "./ShoppingListItem.css";

function ShoppingListItem({id, name, quantity, unit, checked, isDisabled, categoryName, updateItem, removeItem}) {
    const [newItemName, setNewItemName] = useState(name);
    const [newItemQuantity, setNewItemQuantity] = useState(quantity);
    const [newItemUnit, setNewItemUnit] = useState(unit);
    let newItemChecked = checked;

    React.useEffect(() => {
        if(isDisabled) {
            updateItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked);
        }
    }, [isDisabled]);

    return (
        <div className="shoppingListItemContainer">
            <input type="text" className="nameInput shoppingListItemInput" defaultValue={name} disabled={isDisabled} onChange={(event) => {setNewItemName(event.target.value);}}/>
            <div className="quantitySelection">
                <input type="number" className="quantityInput shoppingListItemInput" defaultValue={quantity} disabled={isDisabled} onChange={(event) => {setNewItemQuantity(event.target.value)}}/>
                <select name="metricsSelect" className="metricsSelect shoppingListItemInput" defaultValue={unit} disabled={isDisabled} onChange={(event) => {setNewItemUnit(event.target.value)}}>
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