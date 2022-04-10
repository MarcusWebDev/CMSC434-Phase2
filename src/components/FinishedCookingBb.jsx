import React from 'react'
import "./FinishedCookingBb.css"
import X from "../icons/closeButton.png"
import { Link } from "react-router-dom";

const FinishedCookingBb = () => {
  return (
    <div className="finishedCookingBbPageWrapper">
        <div className="finishedCookingBbPageContainer">
            <div className="finishedCookingBbContentWrapper">

                <div className="finishedCookingBbContentContainer1">
                    <div className="finishedCookingBbContentContainer2">

                        <div className="fcBbHeaderBar">
                            <h3 className= "finishedCookingBbTitle">Finished Cooking</h3>
                            <Link to="/Recipes/BananaBread/BbInstructions" className="bbCloseLink">
                                <img src={X}/>
                            </Link>
                        </div>

                        <div className="finishedCookingBbInfo">
                            Please select the inventory location and yield.
                        </div>

                        <div className="bbFinishedDropDown">
                            <div className="bbFinishedDropDownTitle">
                                Inventory Location
                            </div>
                            
                            <div className="bbDropDownFonts">
                                <select className="bbFinishedDropDownMenu">
                                    <option>Lakehouse Refrigerator</option>
                                    <option>Office Refrigerator</option>
                                    <option>Lakehouse Freezer</option>
                                    <option>Lakehouse Pantry</option>
                                </select>
                            </div>
                        </div>

                        <div className="bbFinishedDropDown">
                            <div className="bbFinishedDropDownTitle">
                                Yield
                            </div>
                            
                            <div className="bbDropDownFonts">
                                <select className="bbFinishedDropDownMenu">
                                    <option>8 Slices</option>
                                    <option>16 Slices</option>
                                    <option>24 Slices</option>
                                    <option>32 Slices</option>
                                    <option>40 Slices</option>
                                </select>
                            </div>
                        </div>

                        <div className="bbFinishedCookingMoreInfo">
                            Used ingredients will be removed from your inventory
                        </div>

                        <Link to = "./RemoveIngBb">
                        <button className="bbFinishedCookingButton">
                            <div className="bbFinishedCookingButtonText">
                                Remove Used Ingredients
                            </div>
                        </button>
                        </Link>

                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default FinishedCookingBb