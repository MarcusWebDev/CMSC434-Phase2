import React from 'react';
import { render } from '@testing-library/react';
import ShoppingListItem from "./ShoppingListItem.jsx";
import CategoryList from "./CategoryList.jsx";
import AddItemShoppingList from './AddItemShoppingList.jsx';
import "./ShoppingList.css";


//check if there is a current value for map.get("whatever"), if not initialize it with an array with the item you want put in it
//otherwise do a map.get().put()

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditDisabled: true,
            addItemOpen: false
        }
        this.closeAddItem = this.closeAddItem.bind(this);
    }

    toggleEditDisable() {
        this.setState({
            isEditDisabled: !this.state.isEditDisabled,
        });

        let buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle("hidden");
        }
    }

    closeAddItem() {
        this.setState({
            addItemOpen: false
        })
    }

    render() {
        return(
            <div className="shoppingListWrapper">
                <div className={`shoppingListContainer ${this.state.addItemOpen ? "blurWall" : null}`}>
                    <div className="headerWrapper">
                        <div className="headerContainer">
                            <h1 className="header">Shopping List</h1>
                            <div className="headerButtonContainer">
                                <button className="button buttonGrey" onClick={() => this.toggleEditDisable()}>Edit</button>
                                <button className="button buttonBlue" onClick={() => this.setState({addItemOpen: true})}>Add</button>
                                <button className="button buttonBlue hidden" onClick={() => this.toggleEditDisable()}>Done</button>
                            </div>
                        </div>
                    </div>
                    <div className="categoryListContainer">
                        {[...this.props.itemComponentsByCategory.entries()].map((entry) => <CategoryList name={entry[0]} items={entry[1]} isEditDisabled={this.state.isEditDisabled} updateItem={this.props.updateItem} removeItem={this.props.removeItem}/>)}
                    </div>   
                </div>
                {this.state.addItemOpen ? <AddItemShoppingList createShoppingListItem={this.props.createShoppingListItem} itemsToCategories={this.props.itemsToCategories} nextItemId={this.props.nextItemId} close={this.closeAddItem}/> : null}
            </div>
        );
    }
}

export default ShoppingList;