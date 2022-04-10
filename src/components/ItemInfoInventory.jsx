import React from 'react'
import "./ItemInfoInventory.css";
import { useState } from 'react';
import SelectUserPortrait from "./SelectUserPortrait.jsx";

const ItemInfoInventory = ({id, newItem,pathreturn}) => {
    const [itemname, setItemName] = useState('');
    const [itemquantity, setItemQuantity] = useState('');
    const [itemunit, setItemUnit] = useState('');
    const [itemExpiration, setItemExpiration] = useState('');
    // console.log(newItem)


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

    const showNotification = () => {
        let btn = document.getElementsByClassName("newItemNotificationContainer2")
        btn[0].style.display="flex"
        setTimeout(function() { btn[0].style.display="none" }, 2000);
        
    }

        return (
            <div className="newItemWrapper2">
                <div className="newItemContainer">
                    <div className="newItemHeader">
                        <h2>New Item</h2>
                        <a href={pathreturn} > <img src={require("../icons/closeButton.png")} className="newItemCloseButton" /> </a>
                    </div>
                    <label className="newItemLabel">Item Name</label>
                    <input type="text" className="newItemInput" value={itemname} onChange={(event) => setItemName(event.target.value)} placeholder="Name" onFocus={showaKeyboard} onBlur={hideaKeyboard}/>
                    <div className="quantityUnitContainer">
                        <div className="quantityContainer">
                            <label className="newItemLabel">Quantity</label>
                            <input type="number" className="newItemInput" min="1" value={itemquantity} onChange={(event) => setItemQuantity(event.target.value)} placeholder="1" onFocus={shownKeyboard} onBlur={hidenKeyboard}/>            
                        </div>
                        <div className="unitContainer">
                            <label className="newItemLabel">Unit</label>
                            <select className="newItemInput" value={itemunit} onChange={(event) => setItemUnit(event.target.value)}>
                                <option value="lbs">lbs</option>
                                <option value="gallons">gallons</option>
                                <option value="cartons">cartons</option>
                                <option value="bowls">bowls</option>
                                <option value="servings">servings</option>
                            </select>
                        </div>
                        
                        
                    </div>
                    <div className="expirationDateContainer">
                            <label className="newItemLabel">Expiration Date</label>
                            <input type="text" className="newItemInput" value={itemExpiration} onChange={(event) => setItemExpiration(event.target.value)} placeholder="MM/DD/YYYY" onFocus={showaKeyboard} onBlur={hideaKeyboard}/>            
                        </div>
                        <div className="shoppingListSelectUser3">
                        <h3 className='userHead'>Select Users</h3>
                        <div className="shoppingListUsersContainer">
                            <SelectUserPortrait defaultState={true} name="Elizabeth" picture={require("../icons/elizabeth.jpg")} />
                            <SelectUserPortrait name="James" picture={require("../icons/james.jpg")} />
                            <SelectUserPortrait name="William" picture={require("../icons/william.jpg")} />
                            <SelectUserPortrait name="Patricia" picture={require("../icons/patricia.jpg")} />
                        </div>
                    </div>
                    <button className="newItemButton newItemButtonActive" onClick={()=> {newItem(id,itemname,itemquantity,itemunit,itemExpiration); showNotification();}}>Add Item(s)</button>
                </div>
                <div className = "newItemNotificationContainer2" >
                <img src={require("../icons/notificationIconWhite.png")} className="newItemNotificationIcon2"/>
                <p>"{itemname}" was added!</p>
                </div>
                <img className={'alphabeticKeyboard'} hidden src={require("../icons/alphabeticKeyboard.png")} />
                <img className={'numericKeyboard'} hidden src={require("../icons/numericKeyboard.png")} />
            </div>
        );
    }


export default ItemInfoInventory