import React from "react";

function AddItemShoppingList() {
    return (
        <div className="AddItemShoppingListContainer">
            <div className="headerBar">

            </div>
            <label>Item Name</label>
            <input type="text" />
            <div className="quantityAndUnitContainer">
                <label>Quantity</label>
                <input type="number" />
                <label>Unit</label>
                <select name="metricsSelect" className="metricsSelect" disabled={isDisabled}>
                    <option value="lbs">lbs</option>
                    <option value="gallons">gallons</option>
                    <option value="cartons">cartons</option>
                    <option value="bowls">bowls</option>
                    <option value="servings">servings</option>
                </select>
            </div>
            <label>Category</label>
            <select name="categorySelect" className="categorySelect">
                <option></option>    
            </select>

        </div>
    );
}

export default AddItemShoppingList;