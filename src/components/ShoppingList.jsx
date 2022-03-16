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
            arrayOfCategoryLists: []
        }
    }

    toggleEditDisable() {
        this.setState({
            isEditDisabled: !this.state.isEditDisabled,
        });

        this.props.updateItemComponentsByCategory("Fruit", <ShoppingListItem name="Apple" quantity="1" isDisabled={this.state.isEditDisabled}/>)
        this.props.updateItemComponentsByCategory("Meats & Seafood", <ShoppingListItem name="Fish" quantity="1" isDisabled={this.state.isEditDisabled}/>)
        this.props.updateItemComponentsByCategory("Vegetables", <ShoppingListItem name="Fish" quantity="1" isDisabled={this.state.isEditDisabled}/>)
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
                        {this.state.arrayOfCategoryLists}
                    </div>   
                </div>
            </div>
        );
    }

    createCategories() {
        let items = this.props.itemComponentsByCategory;
        let iterator = items.keys();
        console.log(this.props);



        //add the CategoryLists to the arrayOfCategoryLists
         for (let currentCategory of iterator) {
            if (items.get(currentCategory).length != 0) {
                console.log(currentCategory);
                /*let i = 0;
                for (let currentCategoryList of this.state.arrayOfCategoryLists) {
                    if (currentCategoryList.props.name == currentCategory) {
                        this.setState({
                            arrayOfCategoryLists: this.state.arrayOfCategoryLists.splice(i, 1)
                        });
                    }
                    i++;
                }*/
                this.setState({
                    arrayOfCategoryLists: this.state.arrayOfCategoryLists
                        .concat(<CategoryList name={currentCategory} items={items.get(currentCategory)} isDisabled={this.state.isEditDisabled}/>)
                });
                console.log(this.state.arrayOfCategoryLists);
            }
        }
        //console.log(this.state.arrayOfCategoryLists);
        //console.log(this.props.itemComponentsByCategory);
    }
}

export default ShoppingList;