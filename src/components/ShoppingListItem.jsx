import React from "react";
import "./ShoppingListItem.css";

function ShoppingListItem({name, quantity, unit, checked, isDisabled}) {
    console.log(checked);
    return (
        <div className="shoppingListItemContainer">
            <input type="text" className="nameInput" defaultValue={name} disabled={isDisabled} />
            <div className="quantitySelection">
                <input type="number" className="quantityInput" defaultValue={quantity} disabled={isDisabled}/>
                <select name="metricsSelect" className="metricsSelect" defaultValue={unit} disabled={isDisabled}>
                    <option value="lbs">lbs</option>
                    <option value="gallons">gallons</option>
                    <option value="cartons">cartons</option>
                    <option value="bowls">bowls</option>
                    <option value="servings">servings</option>
                </select>
            </div>
            <input type="checkbox" className="checkbox" defaultChecked={checked}/>
        </div>
    );
}

export default ShoppingListItem;