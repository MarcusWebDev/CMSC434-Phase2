import React, { useState } from "react";
import "./ShoppingListItem.css";

function renderCheckbox(isPreset, presetId, id, categoryName, newItemChecked, presetChecked, newItemName, newItemQuantity, newItemUnit, updateItem) {
    if (isPreset) {
        return (
            <input type="checkbox" className="checkbox" checked={presetChecked} onChange={(event) => {updateItem(presetId, id, categoryName, newItemName, newItemQuantity, newItemUnit, event.target.checked)}}/>
        );
    } else {
        return (
            <input type="checkbox" className="checkbox" checked={newItemChecked} onChange={(event) => {updateItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, event.target.checked)}}/>
        );
    }
}

function renderRemoveIcon(isPreset, presetId, id, categoryName, removeItem) {
    if (isPreset) {
        return (
            <img src={require("../icons/deleteSymbol.png")} className="shoppingListDelete" onClick={() => removeItem(presetId, id, categoryName)}/>
        );
    } else {
        return (
            <img src={require("../icons/deleteSymbol.png")} className="shoppingListDelete" onClick={() => removeItem(id, categoryName)}/>
        );
    }
}

function ShoppingListItem({isPreset, presetId, id, name, quantity, unit, checked, presetChecked, isDisabled, categoryName, updateItem, removeItem}) {
    const [newItemName, setNewItemName] = useState(name);
    const [newItemQuantity, setNewItemQuantity] = useState(quantity);
    const [newItemUnit, setNewItemUnit] = useState(unit);
    let newItemChecked = checked;
    let newPresetChecked = presetChecked;
    

    React.useEffect(() => {
        if(isDisabled) {
            if (isPreset) {
                updateItem(presetId, id, categoryName, newItemName, newItemQuantity, newItemUnit, newPresetChecked);
            } else {
                updateItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked);
            }
        }
    }, [isDisabled]);

    return (
        <div className={`shoppingListItemContainer ${newItemChecked ? "backgroundGray zeroLeftMargin" : null }`}>
            <input type="text" className={`nameInput shoppingListItemInput ${newItemChecked && isDisabled ? "backgroundGray twentyLeftMargin" : null }`} defaultValue={name} disabled={isDisabled} onChange={(event) => {setNewItemName(event.target.value);}}/>
            <div className="quantitySelection">
                <input type="number" className={`quantityInput shoppingListItemInput ${newItemChecked && isDisabled ? "backgroundGray" : null }`} defaultValue={quantity} disabled={isDisabled} onChange={(event) => {setNewItemQuantity(event.target.value)}}/>
                <select name="metricsSelect" className={`metricsSelect shoppingListItemInput ${newItemChecked && isDisabled ? "backgroundGray" : null }`} defaultValue={unit} disabled={isDisabled} onChange={(event) => {setNewItemUnit(event.target.value)}}>
                    <option value="lbs">lbs</option>
                    <option value="gallons">gallons</option>
                    <option value="cartons">cartons</option>
                    <option value="bowls">bowls</option>
                    <option value="servings">servings</option>
                </select>
            </div>
            {isDisabled ? renderCheckbox(isPreset, presetId, id, categoryName, checked, presetChecked, newItemName, newItemQuantity, newItemUnit, updateItem) : renderRemoveIcon(isPreset, presetId, id, categoryName, removeItem)}
        </div>
    );
}

export default ShoppingListItem;