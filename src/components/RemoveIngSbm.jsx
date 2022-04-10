import React from 'react'
import "./RemoveIngSbm.css"
import { Link } from "react-router-dom";

const RemoveIngSbm = () => {
  return (
    <div className="removeIngSbmPageWrapper">
        <div className="removeIngSbmPageContainer">
            <div className="removeIngSbmContentWrapper">

                <div className="removeIngSbmContentContainer1">
                    <div className="removeIngSbmContentContainer2">

                        <div className="removeIngSbmHeaderBar">
                            <h3 className= "removeIngSbmTitle">Finished Cooking</h3>
                        </div>

                        <div className="removeIngSbmInfo">
                            Used Ingredients have been removed from your inventory
                        </div>

                        <Link to = "/Recipes/StrawberryMuffins/SbmInstructions">
                        <button className="removeIngSbmOkButton">
                            <div className="removeIngSbmOkButtonText">
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

export default RemoveIngSbm