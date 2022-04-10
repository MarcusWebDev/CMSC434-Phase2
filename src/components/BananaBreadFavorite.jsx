import React from 'react'
import "./BananaBread.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import BreadPic from "../icons/BananaBread.png"
import NavBar from './NavBar';
import Button from './Button';
import FullHeart from "../icons/fullHeart.png"
import Cook from "../icons/cook.png"

const BananaBread = () => {
  return (
    <div className="bbPageWrapper">
        <div className="bbPageContainer">

            <div className="bbBackPadding">
            </div>
            <div className="bbBackWrapper">
                <Link to="/Recipes" className="bbBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="/Recipes" className="bbBackLink">
                    <div className= "bbBackArrow">
                        Back
                    </div>
                </Link>
            </div>

            <div className="bbImageWrapper">
                <div className="bbImageHolder">
                    <img src = {BreadPic} class = "bbPic"/>
                </div>
            </div>

            <div className="bbTitleWrapper">
                <h3 className="bbTitle">Banana Bread</h3>
            </div>

            <div className="bbButtonWrapper">
                <div className="bbButtonsContainer">
                    <Link to = "../Recipes/BananaBread">
                    <button className = "bbButtons">
                        <div className= "bbFavButton">
                            <img src = {FullHeart} />
                            Favorite
                        </div>
                    </button>
                    </Link>
                    <Link to = "../Recipes/BananaBread/BbInstructions">
                    <button className = "bbButtons">
                        <div className= "bbCookButton">
                            <img src = {Cook} />
                            Cook
                        </div>
                    </button>
                    </Link>

                </div>
            </div>

            <div className="bbDescWrapper">
                <div className="bbDesc">
                    A tried and true, classic vegan banana bread! Perfectly moist and delicious, this healthy vegan banana bread recipe makes a terrific snack or great way to start the day.
                </div>
            </div>

            <hr/>

            <div className="bbInfoWrapper">

                <div className="bbInfoContainer">
                    <div className="bbInfoHolder">
                        <div className="bbInfoLeft">
                            Prep Time
                        </div>
                        <div className="bbInfoRight">
                            10 min
                        </div>
                    </div>
                    
                    <div className="bbInfoHolder">
                        <div className="bbInfoLeft">
                            Yield
                        </div>
                        <div className="bbInfoRight">
                            8 Slices
                        </div>
                    </div>

                    <div className="bbInfoHolder">
                        <div className="bbInfoLeft">
                            Method
                        </div>
                        <div className="bbInfoRight">
                            Bake
                        </div>
                    </div>

                    <div className="bbInfoHolder">
                        <div className="bbInfoLeft">
                            Cuisine
                        </div>
                        <div className="bbInfoRight">
                            American, Vegan
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default BananaBread