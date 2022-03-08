import React from 'react';
import "./HomePage.css";
import Button from "./Button.jsx";

function HomePage() {
    return (
        <div className="homePageWrapper">
            <div className="homePageContainer">
                <div className="headerBar">
                    <h1 className="header">Hello, Elizabeth!</h1>
                    <img className="profilePicture" src={require("../icons/profile.png")}/>
                </div>
                <div className="notifications">
                    <p className="notificationsHeader"><b>Notifications</b></p>
                    <p className="notificationsAlert"><u><b>Bananas</b></u> is expiring in 2 days!</p>
                    <p className="notificationsAlert"><u><b>Watermelon</b></u> is expiring in 3 days!</p>
                    <p className="notificationsAlert"><u><b>Oat Milk</b></u> is expiring in 1 day!</p>
                </div>
                <div className="shoppingListAndRecipesContainer">
                    <Button color="#A7C6FF" icon={require("../icons/shoppingCart.png")} text="Shopping List"/>
                    <Button color="#FED9A8" icon={require("../icons/recipes.png")} text="Recipes"/>
                </div>
                <div className="refrigeratorSelectionContainer">
                    <h2 className="refrigeratorHeader">Your Refrigerator</h2>
                    <label>Placeholder Refrigerator Text </label>
                    <select name="refrigerator">
                        <option>Fridge 1</option>
                        <option>Fridge 2</option>
                    </select>
                </div>
                <div className="refrigeratorFreezerContainer">
                    <Button color="#FFFFFF" icon={require("../icons/basket.png")} text="Refrigerator"/>
                    <Button color="#FFFFFF" icon={require("../icons/snowflake.png")} text="Freezer"/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;