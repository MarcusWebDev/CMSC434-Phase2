import React from 'react'
import { useState } from 'react'
import "./AddNewRecipe.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import cameraIcon from "../icons/cameraPic.png"
import NavBar from './NavBar';

const AddNewRecipe = () => {

    const [aKeyboardActive, setAKeyboardActive] = useState(false);

  return (
    <div className="addNewRecipePageWrapper">
        <div className="addNewRecipePageContainer">
            <div className="addNewRecipeWhtSpace">

            </div>
            <div className="addNewRecipeNavHeaderContainer">
                <Link to="../Recipes" className="addNewRecepieBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="../Recipes/" className="addNewRecepieBackLink">
                    <div className= "addNewRecipeBackArrow">
                        Back
                    </div>
                </Link>
                <Link to = "/" className="saveNewRecipeLink">
                    <div className="saveNewRecipeText">
                        Save
                    </div>
                </Link>
            </div>

            <div className="imageIconWrapper">
                <Link to ="../workinprogress" className="noTxtDec">
                <div className="newImageHolder">
                    <div className="newImageIconHolder">
                        <img src = {cameraIcon}/>
                    </div>
                    <div className="chooseToTakePic">
                        Choose or Take a picture
                    </div>
                </div>
                </Link>
            </div>

            <input type="text" className="newRecipieNameBar" placeholder="Recipe Name" onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
            </input>

            <textarea type="text" className="newRecipieDescription" placeholder="Enter a short description of your recipe here." onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
            </textarea>

            <hr className="newRecepiesLine"/>

            <div className="newRecipieGenInfoContainer">
                <div className="newRecipieGenInfoText">
                    Prep Time
                </div>
                <input className="newRecipieGenInfoVal" placeholder="1 min" onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
                </input>
            </div>

            <div className="newRecipieGenInfoContainer">
                <div className="newRecipieGenInfoText">
                    Yield
                </div>
                <input className="newRecipieGenInfoVal" placeholder="1 Person" onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
                </input>
            </div>

            <div className="newRecipieGenInfoContainer">
                <div className="newRecipieGenInfoText">
                    Method
                </div>
                <input className="newRecipieGenInfoVal" placeholder="Bake" onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
                </input>
            </div>

            <div className="newRecipieGenInfoContainer">
                <div className="newRecipieGenInfoText">
                    Cuisine
                </div>
                <input className="newRecipieGenInfoVal" placeholder="Vegan" onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
                </input>
            </div>
            <hr className="newRecepiesLine"/>

            <div className="newRecipeSubTitleHolder">
                <h3 className="newRecipeSubTitleText">INGREDIENTS</h3>
            </div>
            <textarea className="newRecipeBigTextBox" placeholder="Enter the required ingredients." onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
            </textarea>

            <div className="newRecipeSubTitleHolder">
                <h3 className="newRecipeSubTitleText">INSTRUCTIONS</h3>
            </div>
            <textarea className="newRecipeBigTextBox" placeholder="Enter the instructions." onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
            </textarea>

            <div className="newRecipiesBottomPagePadding">

            </div>
        </div>
        <NavBar selectedTab={"Recipes"} />
        <img className={`alphabeticKeyboard ${aKeyboardActive ? "" : "hidden "}`} src={require("../icons/alphabeticKeyboard.png")} />
    </div>
  )
}

export default AddNewRecipe