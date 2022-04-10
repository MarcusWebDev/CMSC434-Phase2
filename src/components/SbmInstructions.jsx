import React from 'react'
import "./SbmInstructions.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import NavBar from './NavBar';

const SbmInstructions = () => {
  return (
    <div className="sbmInstructionsPageWrapper">
      <div className="sbmInstructionsPageContainer">

        <div className="sbmInstructionsHeaderWrapper">
          <div className="sbmInstructionsHeaderBar">
            <div className="sbmInstructionsNavHeader">
              <div className="sbmInstructionsHeaderContainer">
                <Link to="../Recipes/StrawberryMuffins" className="sbmInsBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="../Recipes/StrawberryMuffins" className="sbmInsBackLink">
                    <div className= "sbmInsBackArrow">
                        Back
                    </div>
                </Link>
                <Link to="./FinishedCookingSbm" className="searchRecipes">
                    Finish Cooking
                </Link>
              </div>
            </div>

            <div className="sbmInsTitleContainer">
              <h3 className="sbmInsTitle">
                Strawberry Muffins
              </h3>
            </div>
            
            <hr class = "sbmInsLine"/>
          </div>
        </div>

        <div className="sbmInsIngredientsTitleCont">
          <h3 className="sbmInsIngTitle">
            INGREDIENTS
          </h3>
        </div>
        <div className="sbmIngredientsInfo">
          <ul class="sbmIngList">
              <li>
                1/3 cup sugar (pure cane, coconut, or pure maple syrup)
              </li>
              <li>
                1/3 cup olive oil or vegan butter (at room temp)
              </li>
              <li>
                1 teaspoon vanilla extract
              </li>
              <li>
                1 cup non-dairy milk (almond, cashew, oat, soy, etc)
              </li>
              <li>
                2 cups flour (all-purpose, whole wheat, spelt, or combo)
              </li>
              <li>
                2 1/2 teaspoons baking powder
              </li>
              <li>
                pinch of salt
              </li>
              <li>
                1 1/2 cups of strawberries, diced (plus extra for topping)
              </li>
          </ul>
        </div>

        <div className="sbmInsInsTitleCont">
          <h3 className="sbmInsInsTitle">
            INSTRUCTIONS
          </h3>
        </div>
        <div className="sbmInstructionsData">
            Prep: Preheat oven to 350 degrees F. Line a muffin tin with parchment paper liners or lightly grease with oil.
        </div>
        <div className="sbmInstructionsData">
            Batter: In the bottom of a large mixing bowl, add the sugar and oil/butter, mix well. Add the vanilla and non-dairy milk, stir to combine. Lastly, add the flour, baking powder, and salt, mix until combined.
        </div>

        <div className="sbmInstructionsData">
            Add strawberries: Toss in the strawberries and gently fold them into the batter.
        </div>

        <div className="sbmInstructionsData">
            Scoop: Fill each muffin-lined hole with batter. For uniformity, fill muffin tin using a ¼ measuring cup or large ice cream scooper to scoop up the batter and pour into the muffin holes.
        </div>

        <div className="sbmInstructionsData">
            Topping: Optionally, add a few strategic strawberries on top and sprinkle the top with a little pure cane sugar or raw sugar. The sugar will add a nice crunch to the tops!
        </div>

        <div className="sbmInstructionsData">
            Bake: Place in the oven on the center rack and bake for 30 – 35 minutes. Let cool a few minutes and enjoy warm or at room temperature.
        </div>

        <div className="sbmInstructionsData">
            Makes 12 muffins
        </div>

        <div className="sbmInstructionsDataWhtSpace">

        </div>
      </div>
      <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default SbmInstructions