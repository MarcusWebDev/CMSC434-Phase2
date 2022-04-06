import React from "react";
import "./RecipePreviewDetail.css";

function RecipePreviewDetail({detailName, detailValue}) {
    return (
        <div className="recipePreviewDetailContainer">
            <div className="recipePreviewDetailName">
                <p className="recipePreviewDetailText">{detailName}</p>
            </div>
            <div className="recipePreviewDetailValue">
                <p className="recipePreviewDetailText">{detailValue}</p>
            </div>
        </div>
    );
}

export default RecipePreviewDetail;