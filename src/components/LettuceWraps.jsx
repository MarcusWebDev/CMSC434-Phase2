import React from 'react'
import "./LettuceWraps.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import WrapsPic from "../icons/LettuceWraps.png"
import NavBar from './NavBar';
import Button from './Button';
import Heart from "../icons/heart.png"
import Cook from "../icons/cook.png"

const LettuceWraps = () => {
  return (
    <div className="lwPageWrapper">
        <div className="lwPageContainer">

            <div className="lwBackPadding">
            </div>
            <div className="lwBackWrapper">
                <Link to="/Recipes" className="lwBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="/Recipes" className="lwBackLink">
                    <div className= "lwBackArrow">
                        Back
                    </div>
                </Link>
            </div>

            <div className="lwImageWrapper">
                <div className="lwImageHolder">
                    <img src = {WrapsPic} class = "lwPic"/>
                </div>
            </div>

            <div className="lwTitleWrapper">
                <h3 className="lwTitle">Thai Lettuce Wraps</h3>
            </div>

            <div className="lwButtonWrapper">
                <div className="lwButtonsContainer">
                    <Link to = "../Recipes/LettuceWrapsFavorite">
                    <button className = "lwButtons">
                        <div className= "lwFavButton">
                            <img src = {Heart} />
                            Favorite
                        </div>
                    </button>
                    </Link>
                    <Link to = "./LwInstructions">
                    <button className = "lwButtons">
                        <div className= "lwCookButton">
                            <img src = {Cook} />
                            Cook
                        </div>
                    </button>
                    </Link>

                </div>
            </div>

            <div className="lwDescWrapper">
                <div className="lwDesc">
                    These easy Thai Lettuce Wraps with ‘meatballs’ featuring chickpeas and quinoa are a perfect healthy and delicious vegan lunch or dinner! And it wouldn’t be complete without peanut sauce! Recipe comes from Minimalist Baker’s cookbook, ‘Everyday Cooking‘.
                </div>
            </div>

            <hr/>

            <div className="lwInfoWrapper">

                <div className="lwInfoContainer">
                    <div className="lwInfoHolder">
                        <div className="lwInfoLeft">
                            Prep Time
                        </div>
                        <div className="lwInfoRight">
                            10 min
                        </div>
                    </div>
                    
                    <div className="lwInfoHolder">
                        <div className="lwInfoLeft">
                            Yield
                        </div>
                        <div className="lwInfoRight">
                            Serves 3
                        </div>
                    </div>

                    <div className="lwInfoHolder">
                        <div className="lwInfoLeft">
                            Method
                        </div>
                        <div className="lwInfoRight">
                            Bake
                        </div>
                    </div>

                    <div className="lwInfoHolder">
                        <div className="lwInfoLeft">
                            Cuisine
                        </div>
                        <div className="lwInfoRight">
                            Thai, Vegan
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default LettuceWraps