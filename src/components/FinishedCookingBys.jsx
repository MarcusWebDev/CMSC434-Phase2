import React from 'react'
import "./FinishedCookingBys.css"
import X from "../icons/closeButton.png"
import { Link } from "react-router-dom";

const FinishedCookingBys = () => {
  return (
    <div className="finishedCookingBysPageWrapper">
        <div className="finishedCookingBysPageContainer">
            <div className="finishedCookingBysContentWrapper">

                <div className="finishedCookingBysContentContainer1">
                    <div className="finishedCookingBysContentContainer2">

                        <div className="fcBysHeaderBar">
                            <h3 className= "finishedCookingBysTitle">Finished Cooking</h3>
                            <Link to="/Recipes/BerryYogurtSmoothie/BysInstructions" className="closeLink">
                                <img src={X}/>
                            </Link>
                        </div>

                        <div className="finishedCookingBysInfo">
                            Please select the inventory location and yield.
                        </div>

                        <div className="bysFinishedDropDown">
                            <div className="bysFinishedDropDownTitle">
                                Inventory Location
                            </div>
                            
                            <div className="bysDropDownFonts">
                                <select className="bysFinishedDropDownMenu">
                                    <option>Lakehouse Refrigerator</option>
                                    <option>Office Refrigerator</option>
                                    <option>Lakehouse Freezer</option>
                                    <option>Lakehouse Pantry</option>
                                </select>
                            </div>
                        </div>

                        <div className="bysFinishedDropDown">
                            <div className="bysFinishedDropDownTitle">
                                Yield
                            </div>
                            
                            <div className="bysDropDownFonts">
                                <select className="bysFinishedDropDownMenu">
                                    <option>Serves 2</option>
                                    <option>Serves 4</option>
                                    <option>Serves 6</option>
                                    <option>Serves 8</option>
                                    <option>Serves 10</option>
                                </select>
                            </div>
                        </div>

                        <div className="bysFinishedCookingMoreInfo">
                            Used ingredients will be removed from your inventory
                        </div>

                        <Link to = "./RemoveIngBys">
                        <button className="bysFinishedCookingButton">
                            <div className="bysFinishedCookingButtonText">
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

export default FinishedCookingBys