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
            isEditDisabled: true
        }
    }

    toggleEditDisable() {
        this.setState({
            isEditDisabled: !this.state.isEditDisabled,
        });
        
        this.props.updateItemComponentsByCategory("Meats & Seafood", {name: "Fish", quantity: 1});
        this.props.updateItemComponentsByCategory("Vegetables", {name: "Potato", quantity: 1});
        this.props.updateItemComponentsByCategory("Fruit", {name: "Apple", quantity: 1});

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
                        {[...this.props.itemComponentsByCategory.entries()].map((entry) => <CategoryList name={entry[0]} items={entry[1]} isEditDisabled={this.state.isEditDisabled} />)}
                    </div>   
                </div>
            </div>
        );
    }
}

export default ShoppingList;