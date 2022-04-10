import React, { useState } from 'react'
import "./RecipesSearch.css"
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import RightArrow from "../icons/rightArrow.png"

const RecipesSearch = () => {
    const [aKeyboardActive, setAKeyboardActive] = useState(false);

  return (
    <div className="recipesSearchPageWrapper">
        <div className="recipesSearchPageContainer">

            <div className="recipesSearchHeaderBar">

                <div className="recipesSearchBarHolder">
                    <input type="text" className="recipesSearchBar" placeholder="Search" onFocus={() => setAKeyboardActive(true)} onBlur={() => setAKeyboardActive(false)}>
                    </input>
                </div>

                <Link to="../Recipes" className="cancelOption">
                    Cancel
                </Link>
            </div>

            <div className="recentlySearchedContainer">
                <div className="recentlySearchedTitle">
                    Recently Searched
                </div>
                <Link to="../workinprogress" className="recentlySearchedClear">
                    Clear
                </Link>
            </div>
            <hr className="searchTabLine"/>

            <Link to = "../recipes/BerryYogurtSmoothie/" className="recentlySearchedItemLink">
            <div className="recentlySearchedItemContainer">
                <div className="toDeleteItemContainer">
                    <div className="toDeleteItemTitle">
                        Berry Yogurt Smoothie
                    </div>
                    <div className="toDeleteItemCuisine">
                        Vegan, refined sugar-free
                    </div>
                </div>
                <div className="toDeleteItemArrowContainer">
                    <img src = {RightArrow} className = "toDeleteItemArrow"/>
                </div>
            </div>
            </Link>
            <hr className="recentlySearchedItemsLine"/>

            <Link to = "../recipes/StrawberryMuffins/" className="recentlySearchedItemLink">
            <div className="recentlySearchedItemContainer">
                <div className="toDeleteItemContainer">
                    <div className="toDeleteItemTitle">
                        Strawberry Muffins
                    </div>
                    <div className="toDeleteItemCuisine">
                        Vegan, gluten-free
                    </div>
                </div>
                <div className="toDeleteItemArrowContainer">
                    <img src = {RightArrow} className = "toDeleteItemArrow"/>
                </div>
            </div>
            </Link>
            <hr className="recentlySearchedItemsLine"/>

            <Link to = "../recipes/BananaBread/" className="recentlySearchedItemLink">
            <div className="recentlySearchedItemContainer">
                <div className="toDeleteItemContainer">
                    <div className="toDeleteItemTitle">
                        Banana Bread
                    </div>
                    <div className="toDeleteItemCuisine">
                        Vegan
                    </div>
                </div>
                <div className="toDeleteItemArrowContainer">
                    <img src = {RightArrow} className = "toDeleteItemArrow"/>
                </div>
            </div>
            </Link>
            <hr className="recentlySearchedItemsLine"/>
        </div>
        <img className={`alphabeticKeyboard ${aKeyboardActive ? "" : "hidden "}`} src={require("../icons/alphabeticKeyboard.png")} />
        <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default RecipesSearch