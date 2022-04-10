import React from 'react'
import "./StrawberryMuffins.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import MuffinsPic from "../icons/strawberryMuffins.jpg"
import NavBar from './NavBar';
import Button from './Button';
import Heart from "../icons/heart.png"
import Cook from "../icons/cook.png"

const StrawberryMuffins = () => {
  return (
    <div className="sbmPageWrapper">
        <div className="sbmPageContainer">

            <div className="sbmBackPadding">
            </div>
            <div className="sbmBackWrapper">
                <Link to="/Recipes" className="sbmBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="/Recipes" className="sbmBackLink">
                    <div className= "sbmBackArrow">
                        Back
                    </div>
                </Link>
            </div>

            <div className="sbmImageWrapper">
                <div className="sbmImageHolder">
                    <img src = {MuffinsPic} class = "sbmPic"/>
                </div>
            </div>

            <div className="sbmTitleWrapper">
                <h3 className="sbmTitle">Strawberry Muffins</h3>
            </div>

            <div className="sbmButtonWrapper">
                <div className="sbmButtonsContainer">
                    <Link to = "../Recipes/StrawberryMuffinsFavorite">
                    <button className = "sbmButtons">
                        <div className= "sbmFavButton">
                            <img src = {Heart} />
                            Favorite
                        </div>
                    </button>
                    </Link>

                    <Link to = "./SbmInstructions">
                    <button className = "sbmButtons">
                        <div className= "sbmCookButton">
                            <img src = {Cook} />
                            Cook
                        </div>
                    </button>
                    </Link>

                </div>
            </div>

            <div className="sbmDescWrapper">
                <div className="sbmDesc">
                    Healthy Strawberry Muffins bedazzled with fresh strawberries and made with simple pantry staples are easy to make and customize, and of course – delicious! Vegan, WFPB recipe, with an oil-free and gluten-free option. Kid tested, mother approved, and a toddler’s favorite!
                </div>
            </div>

            <hr/>

            <div className="sbmInfoWrapper">

                <div className="sbmInfoContainer">
                    <div className="sbmInfoHolder">
                        <div className="sbmInfoLeft">
                            Prep Time
                        </div>
                        <div className="sbmInfoRight">
                            10 min
                        </div>
                    </div>
                    
                    <div className="sbmInfoHolder">
                        <div className="sbmInfoLeft">
                            Yield
                        </div>
                        <div className="sbmInfoRight">
                            12 Muffins
                        </div>
                    </div>

                    <div className="sbmInfoHolder">
                        <div className="sbmInfoLeft">
                            Method
                        </div>
                        <div className="sbmInfoRight">
                            Bake
                        </div>
                    </div>

                    <div className="sbmInfoHolder">
                        <div className="sbmInfoLeft">
                            Cuisine
                        </div>
                        <div className="sbmInfoRight">
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

export default StrawberryMuffins