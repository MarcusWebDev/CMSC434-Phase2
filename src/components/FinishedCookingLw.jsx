import React from 'react'
import "./FinishedCookingLw.css"
import X from "../icons/closeButton.png"
import { Link } from "react-router-dom";

const FinishedCookingLw = () => {
  return (
    <div className="finishedCookingLwPageWrapper">
        <div className="finishedCookingLwPageContainer">
            <div className="finishedCookingLwContentWrapper">

                <div className="finishedCookingLwContentContainer1">
                    <div className="finishedCookingLwContentContainer2">

                        <div className="fcLwHeaderBar">
                            <h3 className= "finishedCookingLwTitle">Finished Cooking</h3>
                            <Link to="/Recipes/LettuceWraps/LwInstructions" className="lwCloseLink">
                                <img src={X}/>
                            </Link>
                        </div>

                        <div className="finishedCookingLwInfo">
                            Please select the inventory location and yield.
                        </div>

                        <div className="lwFinishedDropDown">
                            <div className="lwFinishedDropDownTitle">
                                Inventory Location
                            </div>
                            
                            <div className="lwDropDownFonts">
                                <select className="lwFinishedDropDownMenu">
                                    <option>Lakehouse Refrigerator</option>
                                    <option>Office Refrigerator</option>
                                    <option>Lakehouse Freezer</option>
                                    <option>Lakehouse Pantry</option>
                                </select>
                            </div>
                        </div>

                        <div className="lwFinishedDropDown">
                            <div className="lwFinishedDropDownTitle">
                                Yield
                            </div>
                            
                            <div className="lwDropDownFonts">
                                <select className="lwFinishedDropDownMenu">
                                    <option>Serves 3</option>
                                    <option>Serves 6</option>
                                    <option>Serves 9</option>
                                    <option>Serves 12</option>
                                    <option>Serves 15</option>
                                </select>
                            </div>
                        </div>

                        <div className="lwFinishedCookingMoreInfo">
                            Used ingredients will be removed from your inventory
                        </div>

                        <Link to = "./RemoveIngLw">
                        <button className="lwFinishedCookingButton">
                            <div className="lwFinishedCookingButtonText">
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

export default FinishedCookingLw