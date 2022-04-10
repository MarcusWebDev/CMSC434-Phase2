import React from 'react'
import "./BysInstructions.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import NavBar from './NavBar';

const BysInstructions = () => {
  return (
    <div className="bysInstructionsPageWrapper">
      <div className="bysInstructionsPageContainer">

        <div className="bysInstructionsHeaderWrapper">
          <div className="bysInstructionsHeaderBar">
            <div className="bysInstructionsNavHeader">
              <div className="bysInstructionsHeaderContainer">
                <Link to="../Recipes/BerryYogurtSmoothie" className="bysInsBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="../Recipes/BerryYogurtSmoothie" className="bysInsBackLink">
                    <div className= "bysInsBackArrow">
                        Back
                    </div>
                </Link>
                <Link to="./FinishedCookingBys" className="searchRecipes">
                    Finish Cooking
                </Link>
              </div>
            </div>

            <div className="bysInsTitleContainer">
              <h3 className="bysInsTitle">
                Berry Yogurt Smoothie
              </h3>
            </div>
            
            <hr class = "bysInsLine"/>
          </div>
        </div>

        <div className="bysInsIngredientsTitleCont">
          <h3 className="bysInsIngTitle">
            INGREDIENTS
          </h3>
        </div>
        <div className="bysIngredientsInfo">
          <ul class="bysIngList">
            <li>
              1 1/2 cup frozen berries mix (strawberries, raspberries, blueberries, and/or blackberries)
            </li>
            <li>
              1 small banana, optional (but adds extra creaminess!)
            </li>
            <li>
              1 cup unsweetened non-dairy yogurt (plain or vanilla)
            </li>
            <li>
              1/2 cup unsweetened almond milk (plain or vanilla)
            </li>
            <li>
            1 teaspoon vanilla extract or ground vanilla bean powder, optional
            </li>
          </ul>
        </div>

        <div className="bysInsInsTitleCont">
          <h3 className="bysInsInsTitle">
            INSTRUCTIONS
          </h3>
        </div>
        <div className="bysInstructionsData">
          Place ingredients into your blender, blend until smooth, stopping every now and then to scrape down the sides if needed. Add an extra splash of non-dairy milk or water as needed.
        </div>
        <div className="bysInstructionsData">
          Serve as is in a glass with straw/spoon. Alternately, serve in a bowl making a smoothie bowl.
        </div>

        <div className="bysInstructionsData">
          Either way you serve it, top with any one or more of these optional topping:
          <ul>
            <li>
              frozen/fresh berries
            </li>
            <li>
              granola
            </li>
            <li>
              coconut flakes
            </li>
            <li>
              cocoa nibs
            </li>
            <li>
              chia/hemp seeds
            </li>
            <li>
              chopped almonds
            </li>
            <li>
              a dollop of your favorite nut butter
            </li>
          </ul>
        </div>

        <div className="bysInstructionsData">
          Serves 1 large or 2 small smoothies
        </div>

        <div className="bysInstructionsDataWhtSpace">

        </div>
      </div>
      <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default BysInstructions