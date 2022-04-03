import React from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css";
import Button from "./Button.jsx";

function HomePage() {
    return (
        <div className="homePageWrapper">
            <div className="homePageContainer">
                <div className="headerBar">
                    <h1 className="header">Hello, Elizabeth!</h1>
                    <Link to="/profileSettings" className="link">
                        <img className="profilePicture" src={require("../icons/profile.png")}/>
                    </Link>
                </div>
                <div className="notifications">
                    <p className="notificationsHeader"><b>Notifications</b></p>
                    <p className="notificationsAlert"><u><b>Bananas</b></u> is expiring in 2 days!</p>
                    <p className="notificationsAlert"><u><b>Watermelon</b></u> is expiring in 3 days!</p>
                    <p className="notificationsAlert"><u><b>Oat Milk</b></u> is expiring in 1 day!</p>
                </div>
                <div className="shoppingListAndRecipesContainer">
                    <Link to="/shoppingList" className="link">
                        <Button color="#A7C6FF" icon={require("../icons/shoppingCart.png")} text="Shopping List"/>
                    </Link>
                    <Link to="/recipes" className="link">
                        <Button color="#FED9A8" icon={require("../icons/recipes.png")} text="Recipes"/>
                    </Link>
                </div>
                <div className="refrigeratorSelectionContainer">
                    <h2 className="refrigeratorHeader">Your Refrigerator</h2>
                    <select name="refrigerator" className="refrigeratorSelect">
                        <option>Lake House Kitchen #2</option>
                        <option>Game Room Fridge</option>
                    </select>
                </div>
                <div className="refrigeratorFreezerContainer">
                    <Link to="/inventory/OfficeRefrigerator" className="link">
                        <Button color="#FFFFFF" icon={require("../icons/basket.png")} text="Refrigerator"/>
                    </Link>
                    <Link to="/freezer" className="link">
                        <Button color="#FFFFFF" icon={require("../icons/snowflake.png")} text="Freezer"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;