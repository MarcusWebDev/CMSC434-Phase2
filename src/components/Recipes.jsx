import React from 'react'
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import "./Recipes.css"
import SmoothiePic from "../icons/BerryYogurtSmoothiePic.jpg"
import MuffinsPic from "../icons/strawberryMuffins.jpg"
import WrapsPic from "../icons/LettuceWraps.png"
import BananaBreadPic from "../icons/BananaBread.png"
import Favorites from './Favorites';

const Recipes = () => {
  return (
    <div className = "recipesPageWrapper">
        <div className= "recipesPageContainer">
        <div className="recipesHeaderWrapper">
            <div className="recipesHeaderBar">
                <div className = "recipesNavHeader">
                    <Link to="/" className="addRecipes">
                        Add
                    </Link>
                    <Link to="/" className="searchRecipes">
                        Search
                    </Link>
                </div>
                <div className="recipesHeaderContainer">
                    <h3 className="recipesHeader">Recipes</h3>
                </div>
                <hr className = "line"/>
            </div>
        </div>
        
        <div className="recHeaderWrapper">
            <h3 className="recRecipesTitle">Recommended For You</h3>
        </div>

        <div className = "recRecipes">
            <div className= "imageHolder">
                <Link to="/">
                <img src= {SmoothiePic} className = "pics"/>
                </Link>
            </div>
            <div className= "imageHolder">
                <img src= {MuffinsPic} className = "pics"/>
            </div>
        </div>

        <div className= "favRecipesTitleWrapper">
            <h3 className= "favTitle">Favorites</h3>
            <Link to="./Favorites" className= "seeAllFavs">
                See All
            </Link>
        </div>

        <div className = "favRecipesWrapper">
            <div className= "imageHolder">
                <img src= {WrapsPic} className = "pics"/>
            </div>
            <div className= "imageHolder">
                <img src= {BananaBreadPic} className = "pics"/>
            </div>
        </div>

        <div className= "yourRecipesTitleWrapper">
            <h3 className= "favTitle">Your Recipes</h3>
            <Link to="./Favorites" className= "seeAllFavs">
                See All
            </Link>
        </div>

        <div className = "yourRecipesWrapper">
            <div className= "imageHolder">
                <img src= {BananaBreadPic} className = "pics"/>
            </div>
        </div>

        </div>
        <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default Recipes