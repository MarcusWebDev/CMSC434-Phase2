import React from 'react';
import "./HomePage.css";
import Button from "./Button.jsx";

function HomePage() {
    return (
        <div className="homePageWrapper">
            <div className="homePageContainer">
                <div className="headerBar">
                    <h1 className="header">Hello, Elizabeth!</h1>
                    <img src="../icons/test.png"/>
                </div>
                <div className="notifications">
                    <p className="notificationsHeader"><b>Notifications</b></p>
                    <p className="notificationsAlert"><u><b>Bananas</b></u> is expiring in 2 days!</p>
                    <p className="notificationsAlert"><u><b>Watermelon</b></u> is expiring in 3 days!</p>
                    <p className="notificationsAlert"><u><b>Oat Milk</b></u> is expiring in 1 day!</p>
                </div>
                <div className="shoppingListAndRecipesContainer">
                    <Button color="#A7C6FF" icon="../icons/shopping_cart_24px_rounded.svg" text="Shopping List"/>
                    <Button color="#FED9A8" icon="../icons/library_books_24px_rounded.svg" text="Recipes"/>
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
                    <Button color="#FFFFFF" icon="../icons/shopping_cart_24px_rounded.svg" text="Refrigerator"/>
                    <Button color="#FFFFFF" icon="../icons/library_books_24px_rounded.svg" text="Freezer"/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;