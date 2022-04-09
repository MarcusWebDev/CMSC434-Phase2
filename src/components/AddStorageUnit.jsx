import React from 'react'
import { useState } from 'react';
import './AddStorageUnit.css'


const AddStorageUnit = ({createStorageUnit,id}) => {
    const [storagename, setStorageName] = useState('');

    const showKeyboard = () => {
        let btn = document.getElementsByClassName('alphabeticKeyboard')
        btn[0].style.display='block'
    }

    const hideKeyboard = () => {
        let btn = document.getElementsByClassName('alphabeticKeyboard')
        btn[0].style.display='none'
    }

    const showNotification = () => {
        let btn = document.getElementsByClassName("newItemNotificationContainer5")
        btn[0].style.display="flex"
        setTimeout(function() { btn[0].style.display="none" }, 2000);
    }
    return (
        <div className="newItemWrapper5">
            <div className="newItemContainer">
                <div className="newItemHeader">
                    <h2>New Storage Unit</h2>
                    <a href="#/allStorageUnits" > <img src={require("../icons/closeButton.png")} className="newItemCloseButton" /> </a>
                </div>
                <label className="newItemLabel">Item Name</label>
                <input type="text" className="newItemInput" value={storagename} onChange={(event) => setStorageName(event.target.value)} placeholder="Name" onFocus={showKeyboard} onBlur={hideKeyboard}/>
                <button className="newItemButton newItemButtonActive" onClick={() =>{createStorageUnit(id,storagename); showNotification();}} >Create Storage Unit</button>
                </div>
                <div className = "newItemNotificationContainer5" >
                <img src={require("../icons/notificationIconWhite.png")} className="newItemNotificationIcon2"/>
                <p>"{storagename}" was created!</p>
                </div>
                <img className={'alphabeticKeyboard'} hidden src={require("../icons/alphabeticKeyboard.png")} />
        </div>
    );
}

export default AddStorageUnit