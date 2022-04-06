import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import RecipePreviewDetail from "./RecipePreviewDetail.jsx";
import "./RecipePreview.css";

function RecipePreview({picture, itemName, itemDescription, prepTime, servingSize, method, cuisine, pathToLinkTo}) {
    return (
        <div className="recipePreviewWrapper">
            <div className="recipePreviewContainer">
                <Link to="/recipes" className="link recipePreviewBackButton">
                    <div className={`backButtonContainer `} >
                        <img src={require("../icons/backArrowBlue.png")} className="backButtonArrow"/>
                        <p className="blueText">Back</p>
                    </div>
                </Link>
                
                <div className="recipePreviewImageContainer" style={{background: "url(" + picture + ")", backgroundSize: "240px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
                <h2>{itemName}</h2>
                <div className="recipePreviewButtonsContainer">
                    <button className="recipesPreviewButton">
                        <img src={require("../icons/heartIcon.png")} />
                        Favorite
                    </button>
                    <Link to={pathToLinkTo} className="link">
                        <button className="recipesPreviewButton">
                            <img src={require("../icons/cakeIcon.png")} />
                            Cook
                        </button>
                    </Link>

                </div>
                <p className="recipePreviewItemDescription">{itemDescription}</p>
                <div className="recipePreviewDetailsContianer">
                    <RecipePreviewDetail detailName="Prep Time" detailValue={prepTime} />
                    <RecipePreviewDetail detailName="Serving Size" detailValue={servingSize} />
                    <RecipePreviewDetail detailName="Method" detailValue={method} />
                    <RecipePreviewDetail detailName="Cuisine" detailValue={cuisine} />
                </div>
            </div>
            <NavBar selectedTab={"Recipes"} />
        </div>
    );
}

export default RecipePreview;