import React, { useEffect, useState } from "react";
import "./NewItemNotification.css";

function NewItemNotification({name}) {
    return (
        <div className="newItemNotificationWrapper">
            <div className = "newItemNotificationContainer">
                <img src={require("../icons/notificationIconWhite.png")} className="newItemNotificationIcon"/>
                <p>"{name}" was added!</p>
            </div>
        </div>
    );
}

export default NewItemNotification;