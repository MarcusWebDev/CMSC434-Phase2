import React from "react";
import { Link } from "react-router-dom";
import "./ItemsAddedNotification.css";

function ItemsAddedNotification({addedToName, onClose, pathToGoTo}) {
    return (
        <div className="ItemsAddedWrapper">
            <div className="ItemsAddedContainer">
                <h2 className="itemsAddedHeader">Items Added</h2>
                <p>Selected items were added to your {addedToName}.</p>
                <Link to={pathToGoTo} className="link" >
                    <button className="itemsAddedButton" onClick={() => onClose()} >Go to {addedToName}</button>
                </Link>
            </div>
        </div>
    );
}

export default ItemsAddedNotification;