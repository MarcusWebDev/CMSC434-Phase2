import React from 'react'
import "./NewRecipeSaved.css"
import { Link } from "react-router-dom";

const RemoveIngSbm = () => {
  return (
    <div className="newRecipeSavedPageWrapper">
        <div className="newRecipeSavedPageContainer">
            <div className="newRecipeSavedContentWrapper">

                <div className="newRecipeSavedContentContainer1">
                    <div className="newRecipeSavedContentContainer2">

                        <div className="newRecipeSavedHeaderBar">
                            <h3 className= "newRecipeSavedTitle">Recipe Saved!</h3>
                        </div>

                        <Link to = "../Recipes/AddNewRecipe">
                        <button className="newRecipeSavedOkButton">
                            <div className="newRecipeSavedOkButtonText">
                                Add New Recipe
                            </div>
                        </button>
                        </Link>

                        <Link to = "../Recipes">
                        <button className="newRecipeSavedOkButton">
                            <div className="newRecipeSavedOkButtonText">
                                Done
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

export default RemoveIngSbm