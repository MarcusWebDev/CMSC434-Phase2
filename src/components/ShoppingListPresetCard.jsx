import React from "react";
import "./ShoppingListPresetCard.css";

function ShoppingListPresetCard({openPreset, presetIndex, presetName, presetMap}) {


    let categoryListArray = [];
    for (let currentCategory of presetMap.keys()) {
        if (presetMap.get(currentCategory).length != 0) {
            categoryListArray.push(<div className="presetCategoryListItem">
                <p className="presetCategoryListItemName">{currentCategory}</p>
                <p className="presetCategoryListItemCount">{`${presetMap.get(currentCategory).length} items`}</p>
            </div>)
        }
    }

    return (
        <div className="shoppingListPresetCardWrapper" onClick={() => openPreset(presetIndex)}> 
            <div className="shoppingListPresetCardContainer">
                <div className="presetCard">
                    <div className="presetCategoryItemCount">
                        {categoryListArray}
                    </div>
                    <div className="presetNameContainer">
                        <h3 className="presetTitle">{presetName}</h3>
                        <img src={require("../icons/forwardArrowWhite.png")} className="presetArrow" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingListPresetCard;