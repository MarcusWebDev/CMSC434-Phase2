import React from 'react'
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import "./Recipes.css"
import SmoothiePic from "../icons/BerryYogurtSmoothiePic.jpg"
import MuffinsPic from "../icons/strawberryMuffins.jpg"
import WrapsPic from "../icons/LettuceWraps.png"
import BananaBreadPic from "../icons/BananaBread.png"
import Favorites from './Favorites';
import BerryYogurtSmoothie from './BerryYogurtSmoothie';

const Recipes = () => {
  return (
    <div className = "recipesPageWrapper">
        <div className= "recipesPageContainer">
        <div className="recipesHeaderWrapper">
            <div className="recipesHeaderBar">
                <div className = "recipesNavHeader">
                    <Link to="./addnewrecipe" className="addRecipes">
                        Add
                    </Link>
                    <Link to="./recipessearch" className="searchRecipes">
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
            <Link to="./BerryYogurtSmoothie" className="link">
                <div className= "imageHolder" style={{background: "url(" + SmoothiePic + ")", backgroundSize: "290px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <div className="recipeCardTextContainer">
                        <h3 className="recipeCardTitle">Berry Yogurt Smoothie</h3>
                        <p className="recipeCardDescription">Vegan, refined sugar-free</p>
                    </div>
                </div>
            </Link>
            <Link to="./StrawberryMuffins" className="link">
                <div className= "imageHolder" style={{background: "url(" + MuffinsPic + ")", backgroundSize: "232px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <div className="recipeCardTextContainer">
                        <h3 className="recipeCardTitle">Strawberry Muffins</h3>
                        <p className="recipeCardDescription">Vegan, gluten-free</p>
                    </div>
                </div>     
            </Link>
        </div>

        <div className= "favRecipesTitleWrapper">
            <h3 className= "favTitle">Favorites</h3>
            <Link to="./Favorites" className= "seeAllFavs">
                See All
            </Link>
        </div>

        <div className = "favRecipesWrapper">
            <Link to = "./LettuceWraps" className="link">
                <div className= "imageHolder" style={{background: "url(" + WrapsPic + ")", backgroundSize: "232px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <div className="recipeCardTextContainer">
                        <h3 className="recipeCardTitle">Thai Lettuce Wraps</h3>
                        <p className="recipeCardDescription">Vegan</p>
                    </div>
                </div>  
            </Link>
            <Link to = "./BananaBread" className="link">
                <div className= "imageHolder" style={{background: "url(" + BananaBreadPic + ")", backgroundSize: "232px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <div className="recipeCardTextContainer">
                        <h3 className="recipeCardTitle">Banana Bread</h3>
                        <p className="recipeCardDescription">Vegan</p>
                    </div>
                </div>  
            </Link>
        </div>

        <div className= "yourRecipesTitleWrapper">
            <h3 className= "favTitle">Your Recipes</h3>
            <Link to="/workinprogress" className= "seeAllFavs">
                See All
            </Link>
        </div>

        <div className = "yourRecipesWrapper">
            <Link to = "./BananaBread" className="link">
                <div className= "imageHolder" style={{background: "url(" + BananaBreadPic + ")", backgroundSize: "232px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <div className="recipeCardTextContainer">
                        <h3 className="recipeCardTitle">Banana Bread</h3>
                        <p className="recipeCardDescription">Vegan</p>
                    </div>
                </div>  
            </Link>
        </div>

        </div>
        <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default Recipes