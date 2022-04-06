import React from "react";
import { Link } from "react-router-dom";
import "./RecipeInstructions.css";

function RecipeInstructions({itemName, ingredientsArray, instructions, pathToLinkTo}) {
    return (
        <div className="recipeInstructionsWrapper">
            <div className="recipeInstructionsContainer">
                <div className="recipeInstructionsHeaderContainer">
                    <div className="recipeInstructionsButtons">
                        <Link to={pathToLinkTo} className="link ">
                            <div className={`backButtonContainer `} >
                                <img src={require("../icons/backArrowBlue.png")} className="backButtonArrow"/>
                                <p className="blueText">Back</p>
                            </div>
                        </Link>
                        <button className="buttonBackgroundless blueText">Finish Cooking</button>                   
                    </div>
                    <h1>{itemName}</h1>
                </div>
                <h3 className="recipeInstructionsIngredientsHeader">INGREDIENTS</h3>
                <ul>
                    {ingredientsArray.map((ingredient) => <li className="recipeInstructionsIngredient">{ingredient}</li>)}
                </ul>
                <h3>INSTRUCTIONS</h3>
                <p className="recipeInstructionsInstructions">{instructions}</p>
            </div>
        </div>
    );
}

export default RecipeInstructions;