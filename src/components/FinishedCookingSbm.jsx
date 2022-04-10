import React from 'react'
import "./FinishedCookingSbm.css"
import X from "../icons/closeButton.png"
import { Link } from "react-router-dom";

const FinishedCookingSbm = () => {
  return (
    <div className="finishedCookingSbmPageWrapper">
        <div className="finishedCookingSbmPageContainer">
            <div className="finishedCookingSbmContentWrapper">

                <div className="finishedCookingSbmContentContainer1">
                    <div className="finishedCookingSbmContentContainer2">

                        <div className="fcSbmHeaderBar">
                            <h3 className= "finishedCookingSbmTitle">Finished Cooking</h3>
                            <Link to="/Recipes/StrawberryMuffins/SbmInstructions" className="sbmCloseLink">
                                <img src={X}/>
                            </Link>
                        </div>

                        <div className="finishedCookingSbmInfo">
                            Please select the inventory location and yield.
                        </div>

                        <div className="sbmFinishedDropDown">
                            <div className="sbmFinishedDropDownTitle">
                                Inventory Location
                            </div>
                            
                            <div className="sbmDropDownFonts">
                                <select className="sbmFinishedDropDownMenu">
                                    <option>Lakehouse Refrigerator</option>
                                    <option>Office Refrigerator</option>
                                    <option>Lakehouse Freezer</option>
                                    <option>Lakehouse Pantry</option>
                                </select>
                            </div>
                        </div>

                        <div className="sbmFinishedDropDown">
                            <div className="sbmFinishedDropDownTitle">
                                Yield
                            </div>
                            
                            <div className="sbmDropDownFonts">
                                <select className="sbmFinishedDropDownMenu">
                                    <option>12 Muffins</option>
                                    <option>24 Muffins</option>
                                    <option>36 Muffins</option>
                                    <option>48 Muffins</option>
                                    <option>60 Muffins</option>
                                </select>
                            </div>
                        </div>

                        <div className="sbmFinishedCookingMoreInfo">
                            Used ingredients will be removed from your inventory
                        </div>

                        <Link to = "./RemoveIngSbm">
                        <button className="sbmFinishedCookingButton">
                            <div className="sbmFinishedCookingButtonText">
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

export default FinishedCookingSbm