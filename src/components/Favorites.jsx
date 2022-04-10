import React from 'react'
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import "./Favorites.css"
import backArrow from "../icons/backArrowBlue.png"
import BananaBreadPic from "../icons/BananaBread.png"
import WrapsPic from "../icons/LettuceWraps.png"

const Favorites = () => {
  return (
    <div className= "favoritesPageWrapper">
        <div className= "favoritesPageContainer">
            
            <div className="favPageHeaderWrapper">
                <div className= "favoritesPageHeaderBar">
                    <Link to="/Recipes" className="link">
                        <img src={backArrow}/>
                    </Link>
                    <Link to="/Recipes" className="link">
                        <div className= "backArrow">
                            Back
                        </div>
                    </Link>
                    <div className= "favPageTitle">
                        Favorites
                    </div>
                    
                    <div className= "editFavsTitle noDec">
                        <Link to="/workinprogress" className="link">
                            Edit
                        </Link>
                    </div>
                    
                </div>
            </div>

            <div className="favImgHolderStart">

            </div>

            <div className="favImgHolderWrapper">
                <Link to = "../Recipes/LettuceWraps" className="link">
                    <div className="favImgHolder" style={{background: "url(" + WrapsPic + ")", backgroundSize: "336px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                        <div className="recipesCardHorizontalTextContainer">
                            <h3 className="recipeCardTitle">Thai Lettuce Wraps</h3>
                            <p className="recipeCardDescription">Vegan</p>
                        </div>    
                    </div>
                </Link>
            </div>

            <div className="favImgHolderWrapper">
                <Link to = "../Recipes/LettuceWraps" className="link">
                    <div className="favImgHolder" style={{background: "url(" + BananaBreadPic+ ")", backgroundSize: "336px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                        <div className="recipesCardHorizontalTextContainer">
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

export default Favorites