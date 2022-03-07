import React from 'react';
import "./HomePage.css";
import Button from "./Button.jsx";

function HomePage() {
    return (
        <div className="homePageWrapper">
            <div className="headerBar">

            </div>
            <div className="notifications">

            </div>
            <div className="shoppingListAndRecipesContainer">
                <Button color="#A7C6FF" icon="../icons/test.png" text="Shopping List"/>
                <Button color="#FED9A8" icon="../icons/library_books_24px_rounded.svg" text="Recipes"/>
            </div>
        </div>
    );
}

export default HomePage;