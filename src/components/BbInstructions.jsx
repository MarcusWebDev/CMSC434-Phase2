import React from 'react'
import "./BbInstructions.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import NavBar from './NavBar';

const BbInstructions = () => {
  return (
    <div className="bbInstructionsPageWrapper">
      <div className="bbInstructionsPageContainer">

        <div className="bbInstructionsHeaderWrapper">
          <div className="bbInstructionsHeaderBar">
            <div className="bbInstructionsNavHeader">
              <div className="bbInstructionsHeaderContainer">
                <Link to="../Recipes/BananaBread" className="bbInsBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="../Recipes/BananaBread" className="bbInsBackLink">
                    <div className= "bbInsBackArrow">
                        Back
                    </div>
                </Link>
                <Link to="./FinishedCookingBb" className="searchRecipes">
                    Finish Cooking
                </Link>
              </div>
            </div>

            <div className="bbInsTitleContainer">
              <h3 className="bbInsTitle">
                Banana Bread
              </h3>
            </div>
            
            <hr class = "bbInsLine"/>
          </div>
        </div>

        <div className="bbInsIngredientsTitleCont">
          <h3 className="bbInsIngTitle">
            INGREDIENTS
          </h3>
        </div>
        <div className="bbIngredientsInfo">
          <ul class="bbIngList">
              <li>
                1 3/4 cups (210 g) spelt flour (whole wheat, unbleached all-purpose, or gluten free blend), see notes
              </li>
              <li>
                1/3 cup (75 g) organic pure cane sugar (or 1/2 finely chopped dates)
              </li>
              <li>
                1 1/2 teaspoons baking powder
              </li>
              <li>
                1/2 teaspoon baking soda
              </li>
              <li>
                pinch of mineral salt
              </li>
              <li>
                1/3 cup (75 ml) neutral flavored oil (or coconut oil in liquid state, vegan butter at room temp or applesauce
              </li>
              <li>
                1 teaspoon vanilla extract
              </li>
              <li>
                4 small or 3 large overripe bananas (about 1 1/2 – 1 3/4 cups (338-410g)), mashed
              </li>
              <li>
                1/4 cup (56 ml) almond milk, use only if needed
              </li>
              <div className="bbIngListHeaderTitle">Optional:</div>
              <li>
                1/2 – 2/3 cup chopped walnuts
              </li>
              <li>
                1/4 –  1/2 cup chocolate chips (mini or regular)
              </li>
              <li>
                1 teaspoon cinnamon
              </li>
          </ul>
        </div>

        <div className="bbInsInsTitleCont">
          <h3 className="bbInsInsTitle">
            INSTRUCTIONS
          </h3>
        </div>
        <div className="bbInstructionsData">
            Preheat oven to 350 degrees F. Grease your loaf pan.
        </div>
        <div className="bbInstructionsData">
            One bowl method: In a medium sized mixing bowl, mash 3 – 4 bananas (about 1 1/2 cups to 1 3/4 cups works well), add oil/applesauce and vanilla extract, mix again. Add the flour, sugar, baking soda, baking powder and salt, and mix well, but don’t overmix, just enough until the flour is combined. Batter will be slightly thick and a few lumps is ok. If mixture seems too thick, add milk, especially if using heavier flours such as whole wheat or whole spelt (you’re more inclined to need it).
        </div>
        <div className="bbInstructionsData">
            Pour batter into a greased loaf pan. Bake for about 50 min – 1 hour. Ovens vary, mine usually takes 50 minutes. You can also do the toothpick test in the center of the loaf, if it comes out clean it should be ready. Remove from oven and let cool for 10 min before slicing.
        </div>
        <div className="bbInstructionsData">
            Original method: In a medium/large size bowl, combine flour, sugar, baking powder, baking soda and salt, set aside. In a medium bowl, mash bananas. Add the oil, vanilla and bananas to the dry ingredients and mix until combined, do not overmix. If mixture seems too thick, add the almond milk (especially if using heavier flours such as whole wheat or whole spelt, you’re more inclined to need it).
        </div>
        <div className="bbInstructionsData">
            Pour batter into a greased loaf pan. Bake for about 50 min – 1 hour. Ovens vary, mine usually takes 50 minutes. You can also do the toothpick test in the center of the loaf, if it comes out clean it should be ready. Remove from oven and let cool for 10 min before slicing.
        </div>
        <div className="bbInstructionsData">
            Store: Keep covered on the counter for up to 3 days or in the refrigerator up to 1 week. Keep in the freezer for up to 2 months. Thaw the wrapped loaves overnight in the refrigerator. Reheat in the microwave or a toaster oven with a door.
        </div>

        <div className="bbInstructionsDataWhtSpace">

        </div>
      </div>
      <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default BbInstructions