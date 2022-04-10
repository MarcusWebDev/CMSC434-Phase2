import React from 'react'
import "./RemoveIngBys.css"
import { Link } from "react-router-dom";

const RemoveIngBys = () => {
  return (
    <div className="removeIngBysPageWrapper">
        <div className="removeIngBysPageContainer">
            <div className="removeIngBysContentWrapper">

                <div className="removeIngBysContentContainer1">
                    <div className="removeIngBysContentContainer2">

                        <div className="removeIngBysHeaderBar">
                            <h3 className= "removeIngBysTitle">Finished Cooking</h3>
                        </div>

                        <div className="removeIngBysInfo">
                            Used Ingredients have been removed from your inventory
                        </div>

                        <Link to = "/Recipes/BerryYogurtSmoothie/BysInstructions">
                        <button className="removeIngBysOkButton">
                            <div className="removeIngBysOkButtonText">
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

export default RemoveIngBys