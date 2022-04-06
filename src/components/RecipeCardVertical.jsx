import { Link } from "react-router-dom";
import React from "react";
import "./RecipeCardVertical.css";
import { toContainElement } from "@testing-library/jest-dom/dist/matchers";

function RecipeCardVertical({picture, itemName, itemDescription, pathToLinkTo}) {
    return (
        <Link to={pathToLinkTo} className="link">
            <div className="recipeCardVerticalWrapper">
                <div className="recipeCardVerticalContainer" style={{background: "url(" + picture + ")", backgroundSize: "232px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <div className="recipeCardVerticalTextContainer">
                        <h3 className="recipeCardVerticalItemName">{itemName}</h3>
                        <p className="recipeCardVerticalItemDescription">{itemDescription}</p>

                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCardVertical;