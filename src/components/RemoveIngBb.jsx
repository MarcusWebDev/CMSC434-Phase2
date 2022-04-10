import React from 'react'
import "./RemoveIngBb.css"
import { Link } from "react-router-dom";

const RemoveIngBb = () => {
  return (
    <div className="removeIngBbPageWrapper">
        <div className="removeIngBbPageContainer">
            <div className="removeIngBbContentWrapper">

                <div className="removeIngBbContentContainer1">
                    <div className="removeIngBbContentContainer2">

                        <div className="removeIngBbHeaderBar">
                            <h3 className= "removeIngBbTitle">Finished Cooking</h3>
                        </div>

                        <div className="removeIngBbInfo">
                            Used Ingredients have been removed from your inventory
                        </div>

                        <Link to = "/Recipes/BananaBread/BbInstructions">
                        <button className="removeIngBbOkButton">
                            <div className="removeIngBbOkButtonText">
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

export default RemoveIngBb