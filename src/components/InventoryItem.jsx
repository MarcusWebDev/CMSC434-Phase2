import React, { useState } from "react";
import "./InventoryItem.css";
import Symbol from '../icons/removeCircle.svg'


const InventoryItem = ({item, onDelete,onReduce,updateItem}) => {
    const [itemname, setItemName] = useState(item.name);
    const [itemquantity, setItemQuantity] = useState(item.quantity);
    const [itemunit, setItemUnit] = useState(item.unit);

    const showaKeyboard = () => {
        let btn = document.getElementsByClassName('alphabeticKeyboard')
        btn[0].style.display='block'
    }

    const hideaKeyboard = () => {
        let btn = document.getElementsByClassName('alphabeticKeyboard')
        btn[0].style.display='none'
    }
    
    const shownKeyboard = () => {
        let btn = document.getElementsByClassName('numericKeyboard')
        btn[0].style.display='block'
    }

    const hidenKeyboard = () => {
        let btn = document.getElementsByClassName('numericKeyboard')
        btn[0].style.display='none'
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
            <input type="text" className="nameInput2 shoppingListItemInput2" value={itemname} onChange={(event) => setItemName(event.target.value)} disabled onFocus={showaKeyboard} onBlur={hideaKeyboard} />
            <div className="quantitySelection">
                <input type="number" className="quantityInput2 shoppingListItemInput2"  value={item.quantity} onFocus={shownKeyboard} onBlur={hidenKeyboard}  disabled/>
                <select name="metricsSelect" className="metricsSelect2 shoppingListItemInput2" value={itemunit} onChange={(event) => setItemUnit(event.target.value)} disabled >
                    <option value="lbs">lbs</option>
                    <option value="gallons">gallons</option>
                    <option value="cartons">cartons</option>
                    <option value="bowls">bowls</option>
                    <option value="servings">servings</option>
                </select>
            </div>
            <img src={Symbol} className="shoppingListDelete2" onClick={() => edit(item.id)}/>
            <img className={'alphabeticKeyboard'} hidden src={require("../icons/alphabeticKeyboard.png")} />
            <img className={'numericKeyboard'} hidden src={require("../icons/numericKeyboard.png")} />
        </div>
    );
}

export default InventoryItem