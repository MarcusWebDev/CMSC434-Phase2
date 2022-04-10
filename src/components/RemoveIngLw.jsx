import React from 'react'
import "./RemoveIngLw.css"
import { Link } from "react-router-dom";

const RemoveIngLw = () => {
  return (
    <div className="removeIngLwPageWrapper">
        <div className="removeIngLwPageContainer">
            <div className="removeIngLwContentWrapper">

                <div className="removeIngLwContentContainer1">
                    <div className="removeIngLwContentContainer2">

                        <div className="removeIngLwHeaderBar">
                            <h3 className= "removeIngLwTitle">Finished Cooking</h3>
                        </div>

                        <div className="removeIngLwInfo">
                            Used Ingredients have been removed from your inventory
                        </div>

                        <Link to = "/Recipes/LettuceWraps/LwInstructions">
                        <button className="removeIngLwOkButton">
                            <div className="removeIngLwOkButtonText">
                                Ok
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

export default RemoveIngLw