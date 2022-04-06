import React from "react";
import NavBar from "./NavBar.jsx";
import RecipeCardVertical from "./RecipeCardVertical.jsx";
import "./Recipes.css";

function Recipes({}) {
    return (
        <div className="recipesWrapper">
            <div className="recipesContainer">
                <div className="recipesHeaderContainer">
                    <div className="recipesHeaderButtons">
                        <button className="buttonBackgroundless blueText">Add</button>
                        <button className="buttonBackgroundless blueText">Search</button>
                    </div>
                    <h1>Recipes</h1>
                </div>
                <h2 className="recipesRecommendedHeader">Recommended for You</h2>
                <div className="recipesRecommendedCardContainer">
                    <RecipeCardVertical picture={require("../icons/berryYogurtSmoothie.jpg")} itemName="Berry Yogurt Smoothie" itemDescription="Vegan, refined sugar-free" pathToLinkTo="/recipes/berryYogurtSmoothiePreview"/>
                    <RecipeCardVertical picture={require("../icons/strawberryMuffins.jpg")} itemName="Strawberry Muffins" itemDescription="Vegan, gluten-free" pathToLinkTo="/recipes/strawberryMuffinsPreview"/>
                </div>
                <div className="recipesFavoritesHeaderContianer"> 
                    <h2 className="recipesFavoritesHeader">Favorites</h2>
                    <button className="buttonBackgroundless blueText">See All</button>
                </div>
                <div className="recipesFavoritesCardContainer">
                    <RecipeCardVertical picture={require("../icons/lettuceWraps.jpg")} itemName="Thai Lettuce Wraps" itemDescription="Vegan" pathToLinkTo="/recipes/thaiLettuceWrapsPreview"/>
                    <RecipeCardVertical picture={require("../icons/bananaBread.jpg")} itemName="Banana Bread" itemDescription="Vegan" pathToLinkTo="/recipes/bananaBreadPreview"/>
                </div>
            </div>
            <NavBar selectedTab="Recipes" />
        </div>
    );
} 

export default Recipes;