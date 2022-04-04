import React, { useState } from "react";
import "./InventoryItem.css";
import Symbol from '../icons/removeCircle.svg'


const InventoryItem = ({item, onDelete,onReduce,updateItem}) => {
    const [itemname, setItemName] = useState(item.name);
    const [itemquantity, setItemQuantity] = useState(item.quantity);
    const [itemunit, setItemUnit] = useState(item.unit);

    function handleChange(event) {
        console.log(event.target.value);
      }

    const edit = (id) => {
        var btn=document.getElementsByClassName('linkEdit');
        // btn.text="Done"
        var inputs = document.getElementsByClassName('nameInput2 shoppingListItemInput2');

        var tip = document.getElementsByClassName('tip');
        if(inputs[0].disabled===true)
        {

            // for (var i = 0; i < inputs.length; i++) {
            //     inputs[i].disabled = false;
            // }
            // inputs = document.getElementsByClassName('quantityInput shoppingListItemInput');
            // for (var i = 0; i < inputs.length; i++) {
            //     inputs[i].disabled = false;
            // }
            // inputs = document.getElementsByClassName('metricsSelect shoppingListItemInput');
            // for (var i = 0; i < inputs.length; i++) {
            //     inputs[i].disabled = false;
            // }
            onReduce(id)
        }
        else {
            tip[0].style.display = "None";
            btn[0].innerHTML='Done'
            var inputs = document.getElementsByClassName('nameInput2 shoppingListItemInput2');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        inputs = document.getElementsByClassName('quantityInput2 shoppingListItemInput2');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        inputs = document.getElementsByClassName('metricsSelect2 shoppingListItemInput2');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        
        onDelete(id)
        tip[0].style.display = "flex";
        btn[0].innerHTML='Edit'
        }
        
       
    }
    return (
        <div className="shoppingListItemContainer4">
            <input type="text" className="nameInput2 shoppingListItemInput2" value={itemname} onChange={(event) => setItemName(event.target.value)} disabled />
            <div className="quantitySelection">
                <input type="number" className="quantityInput2 shoppingListItemInput2"  value={item.quantity}  disabled/>
                <select name="metricsSelect" className="metricsSelect2 shoppingListItemInput2" value={itemunit} onChange={(event) => setItemUnit(event.target.value)} disabled >
                    <option value="lbs">lbs</option>
                    <option value="gallons">gallons</option>
                    <option value="cartons">cartons</option>
                    <option value="bowls">bowls</option>
                    <option value="servings">servings</option>
                </select>
            </div>
            <img src={Symbol} className="shoppingListDelete2" onClick={() => edit(item.id)}/>
        </div>
    );
}

export default InventoryItem