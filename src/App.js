import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.jsx';
import ShoppingList from "./components/ShoppingList.jsx";
import ShoppingListPreset from "./components/ShoppingListPreset.jsx";
import AddItemShoppingList from "./components/AddItemShoppingList.jsx";
import InventoryRefrigerator from './components/InventoryRefrigerator.jsx';
import AddItemInventory from './components/AddItemInventory.jsx';
import ItemInfoInventory from './components/ItemInfoInventory.jsx';
import AllStorageUnits from './components/AllStorageUnits.jsx';
import AddStorageUnit from './components/AddStorageUnit.jsx';
import WorkInProgress from './components/WorkInProgress.jsx';
import Recipes from "./components/Recipes.jsx";
import RecipePreview from "./components/RecipePreview.jsx";
import RecipeInstructions from "./components/RecipeInstructions.jsx";
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingListItemDataByCategory: {value: this.initializeShoppingList()},
      nextShoppingListItemId: 0,
      itemsToCategories: {value: this.initializeItemsToCategories()},

      presetArray: [],
      nextPresetId: 0,
      dummyInv:this.dummyInventoryData(),
      nextInventoryId: 6,
      dummyHome:this.dummyHomePage()
    };
    this.deleteItemInventory = this.deleteItemInventory.bind(this);
    this.reduceItemInventory = this.reduceItemInventory.bind(this);
    this.createItemInventory = this.createItemInventory.bind(this);
    this.updateItemInventory = this.updateItemInventory.bind(this);
    this.editHomePage = this.editHomePage.bind(this);
    this.deleteHomePage = this.deleteHomePage.bind(this);
    this.importItemsFromShoppingList = this.importItemsFromShoppingList.bind(this);
    this.createShoppingListItem = this.createShoppingListItem.bind(this);
    this.removeShoppingListItem = this.removeShoppingListItem.bind(this);
    this.updateShoppingListItem = this.updateShoppingListItem.bind(this);
    this.clearShoppingList = this.clearShoppingList.bind(this);

    this.createNewPreset = this.createNewPreset.bind(this);
    this.createPresetListItem = this.createPresetListItem.bind(this);
    this.updatePresetListItem = this.updatePresetListItem.bind(this);
    this.removePresetListItem = this.removePresetListItem.bind(this);
    this.updatePresetName = this.updatePresetName.bind(this);
    this.importItemstoShoppingList = this.importItemstoShoppingList.bind(this);
    this.deletePreset = this.deletePreset.bind(this);
    this.createStorageUnit = this.createStorageUnit.bind(this);
  }

  
  

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage
        dummyHome={this.state.dummyHome} 
        dummyInv={this.state.dummyInv}/>} />
        <Route path="/profileSettings" element={<HomePage />} />
        <Route path="/shoppingList" 
          element={<ShoppingList 
            itemDataByCategory={this.state.shoppingListItemDataByCategory.value}
            removeItem={this.removeShoppingListItem}
            updateItem={this.updateShoppingListItem}
            clearShoppingList={this.clearShoppingList}
          />} 
        />
        <Route path="/allStorageUnits" element={<AllStorageUnits
        dummyHome={this.state.dummyHome} 
        editHomePage={this.editHomePage}
        deleteHomePage={this.deleteHomePage}/>} />
        <Route path="/addStorageUnits" element={<AddStorageUnit 
        dummyHome={this.state.dummyHome}
        id={this.state.nextInventoryId}
        createStorageUnit={this.createStorageUnit}/>} />
        <Route path="/shoppingList/add" 
          element={<AddItemShoppingList 
            createItem={this.createShoppingListItem}
            createNewPreset={this.createNewPreset}
            createPresetItem={this.createPresetListItem}
            updateItem={this.updatePresetListItem}
            removeItem={this.removePresetListItem}
            updatePresetName={this.updatePresetName}
            importItemstoShoppingList={this.importItemstoShoppingList}
            deletePreset={this.deletePreset}
            itemsToCategories={this.state.itemsToCategories.value}
            nextItemId={this.state.nextShoppingListItemId} 
            presetArray={this.state.presetArray}
          />} 
        />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/inventory/OfficeRefrigerator" element={<InventoryRefrigerator
        dummyInv={this.state.dummyInv}
        onReduce={this.reduceItemInventory} 
        onDelete={this.deleteItemInventory}
        updateItem={this.updateItemInventory}/>} />
        <Route path="/freezer" element={<HomePage />} />
        <Route path="/inventory/addOfficeRefrigerator" element={<AddItemInventory importFromShoppingList={this.importItemsFromShoppingList}/>} />
        <Route path="/inventory/addOfficeRefrigeratorItem" element={<ItemInfoInventory 
        dummyInv={this.state.dummyInv}
        id={this.state.nextInventoryId}
        newItem={this.createItemInventory} />} />
        <Route path="/workinprogress" element={<WorkInProgress />} />

        <Route path="/recipes/berryYogurtSmoothiePreview" element={<RecipePreview picture={require("./icons/berryYogurtSmoothie.jpg")} itemName="Berry Yogurt Smoothie" itemDescription="Get frosty with this super easy and delicious mixed berry smoothie with yogurt and made with lots of love!" prepTime="5 min" servingSize="Serves 2" method="Blender" cuisine="Vegan" pathToLinkTo={"/recipes/berryYogurtSmoothieInstructions"} />} />
        <Route path="/recipes/strawberryMuffinsPreview" element={<RecipePreview picture={require("./icons/strawberryMuffins.jpg")} itemName="StrawBerry Muffins" itemDescription="Vegan Strawberry Muffins – Speckled with juicy red strawberries this healthy muffin recipe bakes up moist and fluffy and is made with 7 simple ingredients in 1 bowl!" prepTime="5 min" servingSize="12 muffins" method="Bake" cuisine="Vegan" pathToLinkTo={"/recipes/strawberryMuffinsInstructions"} />} />
        <Route path="/recipes/thaiLettuceWrapsPreview" element={<RecipePreview picture={require("./icons/lettuceWraps.jpg")} itemName="Thai Lettuce Wraps" itemDescription="Easy Thai Lettuce Wraps with chickpea and quinoa ‘meatballs’ and peanut dressing are a perfect healthy and delicious vegan lunch or dinner made with everyday ingredients! " prepTime="10 min" servingSize="Serves 3" method="Bake" cuisine="Vegan" pathToLinkTo={"/recipes/thaiLettuceWrapsInstructions"} />} />
        <Route path="/recipes/bananaBreadPreview" element={<RecipePreview picture={require("./icons/bananaBread.jpg")} itemName="Banana Bread" itemDescription="This ‘tried and true’, classic vegan banana bread recipe is moist, healthy, and so easy to make. It’s egg & dairy free, has an oil-free option, and is the best banana bread ever!" prepTime="10 min" servingSize="8-10 slices" method="Bake" cuisine="Vegan" pathToLinkTo={"/recipes/bananaBreadInstructions"} />} />

        <Route path="/recipes/berryYogurtSmoothieInstructions" element={<RecipeInstructions itemName="Berry Yogurt Smoothie" ingredientsArray={this.getBerryYogurtSmoothieIngredients()} instructions={this.getBerryYogurtSmoothieInstructions()} pathToLinkTo="/recipes/berryYogurtSmoothiePreview" />} />
        <Route path="/recipes/strawberryMuffinsInstructions" element={<RecipeInstructions itemName="Strawberry Muffins" ingredientsArray={this.getStrawBerryMuffinIngredients()} instructions={this.getStrawberryMuffinInstructions()} pathToLinkTo="/recipes/strawberryMuffinsPreview" />} />
        <Route path="/recipes/thaiLettuceWrapsInstructions" element={<RecipeInstructions itemName="Thai Lettuce Wraps" ingredientsArray={this.getThaiLettuceWrapsIngredients()} instructions={this.getThaiLettuceWrapsInstructions()} pathToLinkTo="/recipes/thaiLettuceWrapsPreview" />} />
        <Route path="/recipes/bananaBreadInstructions" element={<RecipeInstructions itemName="Banana Bread" ingredientsArray={this.getBananaBreadIngredients()} instructions={this.getBananaBreadInstructions()} pathToLinkTo="/recipes/bananaBreadPreview" />} />

      </Routes>
    );
  }
  getBerryYogurtSmoothieIngredients() {
    return  [
      "1 1/2 cups frozen berries mix (strawberries, raspberries, blueberries, and/or blackberries)",
      "1 small banana, optional (but adds extra creaminess!)",
      "1 cup unsweetened non-dairy yogurt (plain or vanilla)",
      "1/2 cup unsweetened almond milk (plain or vanilla)",
      "1 teaspoon vanilla extract or ground vanilla bean powder, optional"
    ];
  }

  getBerryYogurtSmoothieInstructions() {
    return "Place ingredients into your blender, blend until smooth, stopping every now and then to scrape down the sides if needed. Add an extra splash of non-dairy milk or water as needed.\n\n" +
    "Serve as is in a glass with straw/spoon. Alternately, serve in a bowl making a smoothie bowl."
  }

  getStrawBerryMuffinIngredients() {
    return [
      "1/3 cup sugar (pure cane, coconut, or pure maple syrup)",
      "1/3 cup olive oil or vegan butter (at room temp)",
      "1 teaspoon vanilla extract",
      "1 cup non-dairy milk (almond, cashew, oat, soy, etc)",
      "2 cups flour (all-purpose, whole wheat, spelt, or combo)",
      "2 1/2 teaspoons baking powder",
      "pinch of salt",
      "1 1/2 cups of strawberries, diced (plus extra for topping)"
    ];
  }

  getStrawberryMuffinInstructions() {
    return "Prep: Preheat oven to 350 degrees F. Line a muffin tin with parchment paper liners or lightly grease with oil.\n\n" +
    "Batter: In the bottom of a large mixing bowl, add the sugar and oil/butter, mix well. Add the vanilla and non-dairy milk, stir to combine. Lastly, add the flour, baking powder, and salt, mix until combined.Batter: In the bottom of a large mixing bowl, add the sugar and oil/butter, mix well. Add the vanilla and non-dairy milk, stir to combine. Lastly, add the flour, baking powder, and salt, mix until combined.\n\n" +
    "Add strawberries: Toss in the strawberries and gently fold them into the batter.\n\n" +
    "Scoop: Fill each muffin-lined hole with batter. For uniformity, fill muffin tin using a ¼ measuring cup or large ice cream scooper to scoop up the batter and pour into the muffin holes.\n\n" +
    "Topping: Optionally, add a few strategic strawberries on top and sprinkle the top with a little pure cane sugar or raw sugar. The sugar will add a nice crunch to the tops!\n\n" +
    "Bake: Place in the oven on the center rack and bake for 30 – 35 minutes. Let cool a few minutes and enjoy warm or at room temperature.\n\n" +
    "Makes 12 muffins"
  }

  getThaiLettuceWrapsIngredients() {
    return [
      "1 can (15 oz) chickpeas",
      "1/2 cup cooked quinoa",
      "1/4 cup coconut sugar (or organic brown sugar)",
      "2 tablespoons salted natural peanut butter (smooth or chunky)",
      "2 – 3 tablespoons tamari or soy sauce",
      "1/4 cup finely chopped fresh cilantro",
      "1/4 cup scallions (green onions), thinly sliced",
      "1 teaspoon chili garlic sauce",
      "1/4 cup roasted salted peanuts, crushed or finely chopped",
      "1/3 cup natural peanut butter or almond butter",
      "1 tablespoon tamari or soy sauce",
      "2 tablespoons coconut sugar or organic brown sugar",
      "1/2 lime, juiced",
      "1/2 – 1 teaspoon garlic chili sauce",
      "2 – 4 tablespoons hot water, to thin",
      "1 head butter or bibb lettuce or 1 – 2 head romaine",
      "shredded carrots",
      "sliced green onions",
      "chopped peanuts",
      "chopped fresh cilantro",
      "lime wedges"
    ];
  }

  getThaiLettuceWrapsInstructions() {
    return "Preheat oven to 350 degrees F.Line a rimmed baking sheet with parchment paper or silpat, or lightly grease with oil.\n\n" +
    "Mash chickpeas: Drain, rinse and pat the chickpeas dry as possible. In a medium size mixing bowl, add chickpeas and mash well with the back of a fork (pulsing in a blender/food processor will also work).\n\n" +
    "Mix the meatball mixture: Add in the remaining ingredients for the meatballs with the mashed chickpeas. Mix well to combine. Taste and adjust seasoning as needed. If mixture is too wet, add a bit more crushed peanuts (a few tablespoons of breadcrumbs would work great too). I will depend on how wet your quinoa and peanut butter are.\n\n" +
    "Roll meatballs: Scoop up mixture, using about 1 – 1 1/2 heaping tablespoons. Gently, but firmly press the mixture together and shape into balls, rolling between your palms. Take your time. You should get about 12. The mixture my be sticky and you may need to rinse your hands after rolling 2 – 3 balls, it helps to keep your hands clean.\n\n" +
    "Bake: Place ‘meatballs’ on the prepared baking sheet. Place on the center rack in the oven for 25 – 20 minutes.\n\n" +
    "Peanut sauce: In a small bowl, mix the peanut butter, tamari, sugar, lime, garlic and chili sauce. Add hot water a tablespoon or so at a time until desired consistency. If too thin add more nut butter.\n\n" + 
    "Serve: Place lettuce (you may want to double up the lettuce for added strength) on individual serving dishes, top with carrots, meatballs, scallions, peanuts, cilantro and a drizzle of peanut sauce. Enjoy to the fullest!"
  }

  getBananaBreadIngredients() {
    return [
      "1 3/4 cups (210 g) spelt flour (whole wheat, unbleached all-purpose, or gluten free blend)",
      "1/3 cup (75 g) organic pure cane sugar (or 1/2 finely chopped dates)",
      "1 1/2 teaspoons baking powder",
      "1/2 teaspoon baking soda",
      "pinch of mineral salt",
      "1/3 cup (75 ml) neutral flavored oil (or coconut oil in liquid state, vegan butter at room temp or applesauce",
      "1 teaspoon vanilla extract",
      "4 small or 3 large overripe bananas (about 1 1/2 – 1 3/4 cups (338-410g)), mashed",
      "1/4 cup (56 ml) almond milk, use only if needed"
    ];
  }

  getBananaBreadInstructions() {
    return "Preheat oven to 350 degrees F. Grease your loaf pan.\n\n" +
    "One bowl method: In a medium sized mixing bowl, mash 3 – 4 bananas (about 1 1/2 cups to 1 3/4 cups works well), add oil/applesauce and vanilla extract, mix again. Add the flour, sugar, baking soda, baking powder and salt, and mix well, but don’t overmix, just enough until the flour is combined. Batter will be slightly thick and a few lumps is ok. If mixture seems too thick, add milk, especially if using heavier flours such as whole wheat or whole spelt (you’re more inclined to need it).\n\n" +
    "Pour batter into a greased loaf pan. Bake for about 50 min – 1 hour. Ovens vary, mine usually takes 50 minutes. You can also do the toothpick test in the center of the loaf, if it comes out clean it should be ready. Remove from oven and let cool for 10 min before slicing.\n\n" +
    "Original method: In a medium/large size bowl, combine flour, sugar, baking powder, baking soda and salt, set aside. In a medium bowl, mash bananas. Add the oil, vanilla and bananas to the dry ingredients and mix until combined, do not overmix. If mixture seems too thick, add the almond milk (especially if using heavier flours such as whole wheat or whole spelt, you’re more inclined to need it).\n\n" +
    "Pour batter into a greased loaf pan. Bake for about 50 min – 1 hour. Ovens vary, mine usually takes 50 minutes. You can also do the toothpick test in the center of the loaf, if it comes out clean it should be ready. Remove from oven and let cool for 10 min before slicing.\n\n" +
    "Store: Keep covered on the counter for up to 3 days or in the refrigerator up to 1 week. Keep in the freezer for up to 2 months. Thaw the wrapped loaves overnight in the refrigerator. Reheat in the microwave or a toaster oven with a door."
  }

  createShoppingListItem(key, newValue) {
    if (key == undefined) {
      this.setState({
        shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set("Other", this.state.shoppingListItemDataByCategory.value.get("Other").concat(newValue))},
        nextShoppingListItemId: ++this.state.nextShoppingListItemId
      });
    } else {
      this.setState({
        shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set(key, this.state.shoppingListItemDataByCategory.value.get(key).concat(newValue))},
        nextShoppingListItemId: ++this.state.nextShoppingListItemId
      })
    }
  }

  deleteItemInventory = (id) => {
    let temp = [...this.state.dummyInv];
    temp.splice(temp.findIndex((obj) => obj.id == id),1);
    let temp2 = [...this.state.dummyHome];
    temp2[0].numberitems = temp2[0].numberitems-1
    this.setState({
      dummyInv: temp,
      dummyHome:temp2
    });
  }

  reduceItemInventory = (id) => {
    let temp = [...this.state.dummyInv];
    let index = temp.findIndex((obj) => obj.id == id)
    
    if(temp[index].quantity-1===0)
    return this.deleteItemInventory(id)
    temp[index].quantity=temp[index].quantity-1; 
    // console.log(temp[index].quantity)
    // temp.findIndex((obj) => obj.id == id ? obj.quantity=obj.quantity-1 : null);
    this.setState({
      dummyInv: temp

    });
    console.log(this.state.dummyInv);
    
  }

  updateItemInventory = (id,name) => {
    console.log("PLEASE")
    let temp = [...this.state.dummyInv];
    let index=temp.findIndex((obj) => obj.id === id);
    let tempitem = {
      'id':id,
      'name': name,
      'quantity': 7,
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Other'
    }
    temp.splice(index,1,1);
    this.setState({
      dummyInv:temp
    })
  }

  createItemInventory = (id,name,quantity,unit,expiration) => {
    let temp = [...this.state.dummyInv];
    let currentExpirationDate=new Date(expiration);
    let categoryName = "Other"
    var d = new Date();
    d.setDate(d.getDate() +3);
    let tempname=name.toLowerCase();
    name=tempname[0].toUpperCase()+tempname.substring(1);
    if(d>=currentExpirationDate)
    {
      categoryName="Expiring"
    }
    else {
      categoryName= this.state.itemsToCategories.value.get(name.toLowerCase().replace(/ /g, ""));
      if (categoryName == undefined) {
        categoryName= "Other";
      }
    }
    let item = {
    'id': id, 
    'name': name,
    'quantity': quantity,
    'unit': unit,
    'isDisabled': true,
    'checked': false,
    'expiration': new Date(expiration),
    'categoryName': categoryName
    }
    temp.push(item)
    let temp2 = [...this.state.dummyHome]
    temp2[0].numberitems = temp2[0].numberitems+1
    this.setState({
      dummyInv:temp,
      nextInventoryId: ++this.state.nextInventoryId,
      dummyHome: temp2
    })
    console.log("Item Create",id);
  }

  createStorageUnit(id,name) {
    let temp=[...this.state.dummyHome]
    let storage={
      'id': id,
      'name': name,
        'numberitems': 0,
        'linkTo':'#/workinprogress',
        'isEditable':false,
        'FavoriteFill':false
    }
    temp.push(storage);
    this.setState({
      dummyHome: temp,
      nextInventoryId: ++this.state.nextInventoryId
    })
  }

  editHomePage() {
    let temp=[...this.state.dummyHome]
    if(temp[0].isEditable==false) {
      for(const element of temp)
        {
            element.isEditable=true
            console.log(element)
        }
    }
    else {
      for(const element of temp)
        {
            element.isEditable=false
            console.log(element)
        }
    }
    this.setState({
      dummyHome:temp
    })

  }

  deleteHomePage = (id) => {
    let temp=[...this.state.dummyHome]
    console.log(temp.filter((page) => page.id !== id))
    this.setState({
      dummyHome:temp.filter((page) => page.id !== id)
    })
  }

  importItemsFromShoppingList() {
    let mapValues = this.state.shoppingListItemDataByCategory.value.values();
    let today = new Date();
    let tempArray = [...this.state.dummyInv];
    for (let currentArray of mapValues) {
      for (let currentItem of currentArray) {
        if (currentItem.checked) {
          let categoryName= this.state.itemsToCategories.value.get(currentItem.name.toLowerCase().replace(/ /g, ""));
          if (categoryName == undefined) {
            categoryName= "Other";
          }
          tempArray.push({
            'id': currentItem.id, 
            'name': currentItem.name,
            'quantity': currentItem.quantity,
            'unit': currentItem.unit,
            'isDisabled': true,
            'checked': false,
            'expiration': new Date(today.setDate(today.getDate() + 7)),
            'categoryName': categoryName
          });
        }
      }
    }
    this.setState({
      dummyInv: tempArray
    })
  }

  removeShoppingListItem(id, categoryName) {
    let tempArray = this.state.shoppingListItemDataByCategory.value.get(categoryName);
    tempArray.splice(tempArray.findIndex((obj) => obj.id == id), 1);
    this.setState({
      shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set(categoryName, tempArray)}
    });
  }



  updateShoppingListItem(id, categoryName, newItemName, newItemQuantity, newItemUnit, newItemChecked) {
    if (this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) != categoryName && !(this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) == undefined && categoryName == "Other")) {
      this.removeShoppingListItem(id, categoryName);
      this.createShoppingListItem(this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")), {id: id, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: newItemChecked})
    } else {
      let tempArray = this.state.shoppingListItemDataByCategory.value.get(categoryName);
      tempArray.find((obj, i) => {
        if (obj.id == id) {
          tempArray[i] = {id: id, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: newItemChecked};
          return true;
        }
      });
      this.setState({
        shoppingListItemDataByCategory: {value: this.state.shoppingListItemDataByCategory.value.set(categoryName, tempArray)}
      });
    }
  }

  clearShoppingList() {
    this.setState({
      shoppingListItemDataByCategory: {value: this.initializeShoppingList()},
    });
  }

  createNewPreset() {
    this.setState({
      presetArray: this.state.presetArray.concat({id: this.state.nextPresetId, name: "New List", presetMap: this.initializeShoppingList()}),
      nextPresetId: ++this.state.nextPresetId
    });
  }

  createPresetListItem(presetId, key, newValue) {
    let temp = [...this.state.presetArray];
    if (key == undefined) {
      temp.find((obj) => {
        if (obj.id == presetId) {
          obj.presetMap.set("Other", obj.presetMap.get("Other").concat(newValue))
          return true;
        }
      })
    } else {
      temp.find((obj) => {
        if (obj.id == presetId) {
          obj.presetMap.set(key, obj.presetMap.get(key).concat(newValue))
          return true;
        }
      });
    }

    this.setState({
      presetArray: temp,
      nextShoppingListItemId: ++this.state.nextShoppingListItemId
    });
  }

  updatePresetListItem(presetId, itemId, categoryName, newItemName, newItemQuantity, newItemUnit, newPresetChecked) {
    let temp = [...this.state.presetArray];
    temp.find((obj) => {
      if (obj.id == presetId) {
        if (this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) != categoryName && !(this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")) == undefined && categoryName == "Other")) {
          this.removePresetListItem(presetId, itemId, categoryName);
          this.createPresetListItem(presetId, this.state.itemsToCategories.value.get(newItemName.toLowerCase().replace(/ /g, "")), {id: itemId, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: false, presetChecked: newPresetChecked});
        } else {
          let tempArray = obj.presetMap.get(categoryName);
          tempArray.find((o, i) => {
            if (o.id == itemId) {
              tempArray[i] = {id: itemId, name: newItemName, quantity: newItemQuantity, unit: newItemUnit, checked: false, presetChecked: newPresetChecked};
              return true;
            }
          });

          obj.presetMap.set(categoryName, tempArray);
        }
        return true;
      }
    });
    this.setState({
      presetArray: temp
    });
  }

  removePresetListItem(presetId, itemId, categoryName) {
    let temp = [...this.state.presetArray];
    temp.find((obj) => {
      if (obj.id == presetId) {
        let tempArray = obj.presetMap.get(categoryName);
        tempArray.splice(tempArray.findIndex((o) =>  o.id == itemId ), 1);
        obj.presetMap.set(categoryName, tempArray);

        return true;
      }
    });

    this.setState({
      presetArray: temp
    });
  }

  updatePresetName(presetId, newName) {
    let temp = [...this.state.presetArray];
    temp.find((obj) => {
      if (obj.id == presetId) {
        obj.name = newName;
        return true;
      }
    });
    this.setState({
      presetArray: temp
    });
  }

  deletePreset(presetId) {
    let temp = [...this.state.presetArray];
    temp.splice(temp.findIndex((obj) => obj.id == presetId), 1);

    this.setState({
      presetArray: temp
    });
  }

  importItemstoShoppingList(presetMap) {
    for (let currentArray of presetMap.values()) {
      for (let currentItem of currentArray) {
        if (currentItem.presetChecked) {
          currentItem.presetChecked = false;
          currentItem.id = this.state.nextShoppingListItemId;
          this.setState({
            nextShoppingListItemId: ++this.state.nextShoppingListItemId
          })
          this.createShoppingListItem(this.state.itemsToCategories.value.get(currentItem.name), currentItem);
        }
      }
    }
  }

  initializeItemsToCategories() {
    return new Map().set("soda", "Beverages")
    .set("coke", "Beverages")
    .set("sprite", "Beverages")
    .set("milk", "Dairy")
    .set("eggs", "Meats & Seafood")
    .set("bread", "Bakery & Breads")
    .set("cereal", "Breakfast")
    .set("chips", "Snacks")
    .set("cheese", "Dairy")
    .set("beer", "Beverages")
    .set("water", "Beverages")
    .set("cookies", "Snacks")
    .set("bacon", "Meats & Seafood")
    .set("cupcakes", "Snacks")
    .set("muffins", "Snacks")
    .set("bananas", "Fruit")
    .set("apples", "Fruit")
    .set("pineapples", "Fruit")
    .set("lemons", "Fruit")
    .set("peaches", "Fruit")
    .set("hamburgermeat", "Meats & Seafood")
    .set("potatoes", "Vegetables")
    .set("corn", "Vegetables")
    .set("onions", "Vegetables")
    .set("tomatoes", "Vegetables")
    .set("chicken", "Meats & Seafood")
    .set("beef", "Meats & Seafood")
    .set("steak", "Meats & Seafood")
    .set("fish", "Meats & Seafood")
    .set("toothpaste", "Personal Care")
    .set("toiletpaper", "Personal Care")
    .set("lotion", "Personal Care")
    .set("thyme", "Herbs & Spices")
    .set("cayennepowder", "Herbs & Spices")
    .set("cayenne", "Herbs & Spices")
    .set("onionpowder", "Herbs & Spices")
    .set("mangoes", "Fruit")
    .set("detergent", "Personal Care")
    .set("soap", "Personal Care")
    .set("shampoo", "Personal Care")
    .set("conditioner", "Personal Care")
    .set("razors", "Personal Care")
    .set("sourcream", "Dairy")
    .set("coffee", "Beverages")
    .set("juice", "Beverages")
    .set("frozenpizza", "Frozen")
    .set("icecream", "Frozen")
    .set("firstaid", "Personal Care")
    .set("tampons", "Personal Care")
    .set("pantyliners", "Personal Care")
    .set("vitamins", "Personal Care")
    .set("coughsyrup", "Personal Care")
    .set("tvdinners", "Frozen")
    .set("frozenvegetables", "Frozen")
    .set("frozenfruit", "Frozen")
    .set("waffles", "Frozen")
    .set("toasterstrudel", "Frozen")
    .set("toasterstrudels", "Frozen")  
  }

  initializeShoppingList() {
    return new Map().set("Bakery & Breads", [])
    .set("Beverages", [])
    .set("Breakfast", [])
    .set("Dairy", [])
    .set("Frozen", [])
    .set("Fruit", [])
    .set("Herbs & Spices", [])
    .set("Meats & Seafood", [])
    .set("Pantry", [])
    .set("Personal Care", [])
    .set("Prepared Food", [])
    .set("Snacks", [])
    .set("Vegetables", [])
    .set("Other", [])
  }

  dummyInventoryData() {
    let expiring = [
      {
      'id': '1', 
      'name': 'Bananas',
      'quantity': 7,
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Expiring'
   }, 
   {
      'id':'2',
      'name': 'Watermelon',
      'quantity': '1',
      'unit': 'lbs',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Expiring'
   },
   {
      'id':'3',
      'name': 'Oatmilk',
      'quantity': '1',
      'unit': 'cartons',
      'isDisabled': true,
      'checked': false,
      'categoryName': 'Expiring'
   }, 
   {
     'id':'4',
       'name': 'Egg',
       'quantity': '15',
       'unit': 'qty',
       'isDisabled': true,
       'checked': false,
       'categoryName': 'Dairy'
   },
   {
    'id': 5, 
    'name': 'Apples',
    'quantity': '13',
    'unit': 'cartons',
    'isDisabled': true,
    'checked': false,
    'categoryName': 'Fruit'
   }
   ]
   return expiring
   }

   dummyHomePage() {
    let data = [
      {
        'id': 1,
        'name': 'Office Refrigerator',
        'numberitems': 5,
        'linkTo':'#/inventory/OfficeRefrigerator',
        'isEditable':false,
        'FavoriteFill':true
      },
      {
        'id': 2,
        'name': 'LakeHouse Freezer',
        'numberitems': 3,
        'linkTo':'#/inventory/OfficeRefrigerator',
        'isEditable':false,
        'FavoriteFill':false
      },
      {
        'id': 3,
        'name': 'LakeHouse Refrigerator',
        'numberitems': 6,
        'linkTo':'#/inventory/OfficeRefrigerator',
        'isEditable':false,
        'FavoriteFill':false
      },
      {
        'id': 4,
        'name': 'LakeHouse Pantry',
        'numberitems': 4,
        'linkTo':'#/inventory/OfficeRefrigerator',
        'isEditable':false,
        'FavoriteFill':false
      }
    ]
    return data
  }

}





export default App;
