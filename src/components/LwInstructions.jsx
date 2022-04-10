import React from 'react'
import "./LwInstructions.css"
import { Link } from "react-router-dom";
import backArrow from "../icons/backArrowBlue.png"
import NavBar from './NavBar';

const LwInstructions = () => {
  return (
    <div className="lwInstructionsPageWrapper">
      <div className="lwInstructionsPageContainer">

        <div className="lwInstructionsHeaderWrapper">
          <div className="lwInstructionsHeaderBar">
            <div className="lwInstructionsNavHeader">
              <div className="lwInstructionsHeaderContainer">
                <Link to="../Recipes/LettuceWraps" className="lwInsBackLink">
                    <img src={backArrow}/>
                </Link>
                <Link to="../Recipes/LettuceWraps" className="lwInsBackLink">
                    <div className= "lwInsBackArrow">
                        Back
                    </div>
                </Link>
                <Link to="./FinishedCookingLw" className="searchRecipes">
                    Finish Cooking
                </Link>
              </div>
            </div>

            <div className="lwInsTitleContainer">
              <h3 className="lwInsTitle">
                Thai Lettuce Wraps
              </h3>
            </div>
            
            <hr class = "lwInsLine"/>
          </div>
        </div>

        <div className="lwInsIngredientsTitleCont">
          <h3 className="lwInsIngTitle">
            INGREDIENTS
          </h3>
        </div>
        <div className="lwIngredientsInfo">
            <ul class="lwIngList">
                <div className="lwIngListHeaderTitle">Meatballs:</div>
                <li>
                    1 can (15 oz) chickpeas
                </li>
                <li>
                    1/2 cup cooked quinoa
                </li>
                <li>
                    1/4 cup coconut sugar (or organic brown sugar)
                </li>
                <li>
                    2 tablespoons salted natural peanut butter (smooth or chunky)
                </li>
                <li>
                    2 – 3 tablespoons tamari or soy sauce
                </li>
                <li>
                    1/4 cup finely chopped fresh cilantro
                </li>
                <li>
                    1/4 cup scallions (green onions), thinly sliced
                </li>
                <li>
                    1 teaspoon chili garlic sauce
                </li>
                <li>
                    1/4 cup roasted salted peanuts, crushed or finely chopped
                </li>
                <div className="lwIngListHeaderTitle">Peanut Sauce:</div>
                <li>
                    1/3 cup natural peanut butter or almond butter
                </li>
                <li>
                    1 tablespoon tamari or soy sauce
                </li>
                <li>
                    2 tablespoons coconut sugar or organic brown sugar
                </li>
                <li>
                    1/2 lime, juiced
                </li>
                <li>
                    1/2 – 1 teaspoon garlic chili sauce
                </li>
                <li>
                    2 – 4 tablespoons hot water, to thin
                </li>
                <div className="lwIngListHeaderTitle">Lettuce Wraps:</div>
                <li>
                    1 head butter or bibb lettuce or 1 – 2 head romaine
                </li>
                <li>
                    shredded carrots
                </li>
                <li>
                    sliced green onions
                </li>
                <li>
                    chopped peanuts
                </li>
                <li>
                    chopped fresh cilantro
                </li>
                <li>
                    lime wedges
                </li>
            </ul>
        </div>

        <div className="lwInsInsTitleCont">
          <h3 className="lwInsInsTitle">
            INSTRUCTIONS
          </h3>
        </div>

        <div className="lwInstructionsData">
            Preheat oven to 350 degrees F.Line a rimmed baking sheet with parchment paper or silpat, or lightly grease with oil.
        </div>
        <div className="lwInstructionsData">
            Mash chickpeas: Drain, rinse and pat the chickpeas dry as possible. In a medium size mixing bowl, add chickpeas and mash well with the back of a fork (pulsing in a blender/food processor will also work).
        </div>

        <div className="lwInstructionsData">
            Mix the meatball mixture: Add in the remaining ingredients for the meatballs with the mashed chickpeas. Mix well to combine. Taste and adjust seasoning as needed. If mixture is too wet, add a bit more crushed peanuts (a few tablespoons of breadcrumbs would work great too). I will depend on how wet your quinoa and peanut butter are.
        </div>
        <div className="lwInstructionsData">
            Roll meatballs: Scoop up mixture, using about 1 – 1 1/2 heaping tablespoons. Gently, but firmly press the mixture together and shape into balls, rolling between your palms. Take your time. You should get about 12. The mixture my be sticky and you may need to rinse your hands after rolling 2 – 3 balls, it helps to keep your hands clean.
        </div>
        <div className="lwInstructionsData">
            Bake: Place ‘meatballs’ on the prepared baking sheet. Place on the center rack in the oven for 25 – 20 minutes.
        </div>
        <div className="lwInstructionsData">
            Peanut sauce: In a small bowl, mix the peanut butter, tamari, sugar, lime, garlic and chili sauce. Add hot water a tablespoon or so at a time until desired consistency. If too thin add more nut butter.
        </div>
        <div className="lwInstructionsData">
            Serve: Place lettuce (you may want to double up the lettuce for added strength) on individual serving dishes, top with carrots, meatballs, scallions, peanuts, cilantro and a drizzle of peanut sauce. Enjoy to the fullest!
        </div>
        <div className="lwInstructionsData">
            Serves 3 (4 meatballs per serving)
        </div>
        <div className="lwInstructionsData">
            Store: Leftovers can be stored in the refrigerator for up to 5 – 6 days.
        </div>
        <div className="lwInstructionsDataWhtSpace">

        </div>
      </div>
      <NavBar selectedTab={"Recipes"} />
    </div>
  )
}

export default LwInstructions