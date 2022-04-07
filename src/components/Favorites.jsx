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
                    <div className= "editFavsTitle">
                        <Link to = "/" className="noDec">
                            Edit
                        </Link>
                    </div>
                </div>
            </div>

            <div className="favImgHolderStart">

            </div>

            <div className="favImgHolderWrapper">
                <div className="favImgHolder">
                    <img src= {WrapsPic} className = "pics2"/>
                </div>
            </div>

            <div className="favImgHolderWrapper">
                <div className="favImgHolder">
                    <img src= {BananaBreadPic} className = "pics2"/>
                </div>
            </div>

            <div className="favImgHolderWrapper">
                <div className="favImgHolder">
                    <img src= {BananaBreadPic} className = "pics2"/>
                </div>
            </div>

            <div className="favImgHolderWrapper">
                <div className="favImgHolder">
                    <img src= {BananaBreadPic} className = "pics2"/>
                </div>
            </div>

            <div className="favImgHolderWrapper">
                <div className="favImgHolder">
                    <img src= {BananaBreadPic} className = "pics2"/>
                </div>
            </div>
        </div>
        <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default Favorites