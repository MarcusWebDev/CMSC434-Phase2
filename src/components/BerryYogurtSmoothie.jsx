import React from 'react'
import "./BerryYogurtSmoothie.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import SmoothiePic from "../icons/BerryYogurtSmoothiePic.jpg"
import NavBar from './NavBar';
import Button from './Button';
import Heart from "../icons/heart.png"
import Cook from "../icons/cook.png"

const BerryYogurtSmoothie = () => {
  return (
    <div className="bysPageWrapper">
        <div className="bysPageContainer">

            <div className="bysBackWrapper">
                <Link to="/Recipes" className="bysBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="/Recipes" className="bysBackLink">
                    <div className= "bysBackArrow">
                        Back
                    </div>
                </Link>
            </div>

            <div className="bysImageWrapper">
                <div className="bysImageHolder">
                    <img src = {SmoothiePic} class = "bysPic"/>
                </div>
            </div>

            <div className="bysTitleWrapper">
                <h3 className="bysTitle">Berry Yogurt Smoothie</h3>
            </div>

            <div className="bysButtonWrapper">
                <div className="bysButtonsContainer">
                
                    <Link to = "../recipes/BerryYogurtSmoothieFavorite">
                    <button className = "bysButtons">
                        <div className= "bysFavButton">
                            <img src = {Heart} />
                            Favorite
                        </div>
                    </button>
                    </Link>

                    <Link to = "./BysInstructions">
                    <button className = "bysButtons">
                        <div className= "bysCookButton">
                            <img src = {Cook} />
                            Cook
                        </div>
                    </button>
                    </Link>

                </div>
            </div>

            <div className="bysDescWrapper">
                <div className="bysDesc">
                Get frosty with this super easy and delicious mixed berry smoothie with yogurt and made with lots of love!
                </div>
            </div>

            <hr/>

            <div className="bysInfoWrapper">

                <div className="bysInfoContainer">
                    <div className="bysInfoHolder">
                        <div className="bysInfoLeft">
                            Prep Time
                        </div>
                        <div className="bysInfoRight">
                            5 min
                        </div>
                    </div>
                    
                    <div className="bysInfoHolder">
                        <div className="bysInfoLeft">
                            Yield
                        </div>
                        <div className="bysInfoRight">
                            Serves 2
                        </div>
                    </div>

                    <div className="bysInfoHolder">
                        <div className="bysInfoLeft">
                            Method
                        </div>
                        <div className="bysInfoRight">
                            Blender
                        </div>
                    </div>

                    <div className="bysInfoHolder">
                        <div className="bysInfoLeft">
                            Cuisine
                        </div>
                        <div className="bysInfoRight">
                            Vegan
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default BerryYogurtSmoothie