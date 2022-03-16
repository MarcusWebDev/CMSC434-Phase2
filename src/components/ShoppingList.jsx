import React from 'react';
import ShoppingListItem from "./ShoppingListItem";
import CategoryList from "./CategoryList.jsx";
import "./ShoppingList.css";
import { render } from '@testing-library/react';

//check if there is a current value for map.get("whatever"), if not initialize it with an array with the item you want put in it
//otherwise do a map.get().put()

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditDisabled: true,
            categoryListData: []
        }
    }

    toggleEditDisable() {
        this.setState({
            isEditDisabled: !this.state.isEditDisabled,
        });
        
        this.props.updateItemComponentsByCategory("Meats & Seafood", {name: "Fish", quantity: 1});
        this.props.updateItemComponentsByCategory("Vegetables", {name: "Potato", quantity: 1});
        this.props.updateItemComponentsByCategory("Fruit", {name: "Apple", quantity: 1});
        this.createCategories();

        let buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle("hidden");
        }
    }

    render() {
        return(
            <div className="shoppingListWrapper">
                <div className="shoppingListContainer">
                    <div className="headerContainer">
                        <h1 className="header">Shopping List</h1>
                        <div className="headerButtonContainer">
                            <button className="button buttonGrey" onClick={() => this.toggleEditDisable()}>Edit</button>
                            <button className="button buttonBlue">Add</button>
                            <button className="button buttonBlue hidden" onClick={() => this.toggleEditDisable()}>Done</button>
                        </div>
                    </div>
                    <div className="categoryListContainer">
                        {this.state.categoryListData.map(categoryList => <CategoryList name={categoryList.name} items={categoryList.items} isDisabled={this.state.isEditDisabled} />)}
                    </div>   
                </div>
            </div>
        );
    }

    createCategories() {
        let items = this.props.itemComponentsByCategory; //an array of objects

        for (let currentCategory of items.keys()) { //for each category
            if (items.get(currentCategory).length != 0) { //if the category has items mapped to it
                let i = 0;
                let alreadySet = false;
                for (let currentCategoryList of this.state.categoryListData) { //now we're looking at categoryListData which stores the categoryList data used to render CategoryLists
                    if (currentCategoryList.name == currentCategory) { //If there is already a CategoryList with the current name that has been added to categoryListData then update that data
                        let temp = [...this.state.categoryListData]
                        temp[i].items = items.get(currentCategory);
                        this.setState({
                            categoryListData: temp
                        });
                        alreadySet = true;
                    }
                    i++;
                }
                if (!alreadySet) { //If there is not already a CategoryList with the current name then add one to the categoryListData
                    this.setState({
                        categoryListData: this.state.categoryListData.concat({name: currentCategory, items: items.get(currentCategory)})
                    }, () => console.log(this.state));
                }
            }
        }
    }
}

export default ShoppingList;