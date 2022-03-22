import React from 'react';
import { render } from '@testing-library/react';
import ShoppingListItem from "./ShoppingListItem.jsx";
import CategoryList from "./CategoryList.jsx";
import NewItemShoppingList from './NewItemShoppingList.jsx';
import { Link } from "react-router-dom";
import "./ShoppingList.css";


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
    }

    render() {
        return(
            <div className="shoppingListWrapper">
                <div className="shoppingListContainer">
                    <div className="headerWrapper">
                        <div className="shoppingListHeaderBar">
                            <Link to="/" className="link">
                                <div className="returnToHomeButton">
                                    <img src={require("../icons/backArrowBlue.png")} className="backButtonArrow"/>
                                    <p className="blueText">Home</p>
                                </div>
                            </Link>
                            <div className="headerContainer">
                                <h1 className="header">Shopping List</h1>
                                <div className="headerButtonContainer">
                                    <Link to="/shoppingList/add" className="link">  
                                        <button className={`button buttonBlue ${this.state.isEditDisabled ? null : "hidden"}`}>Add</button>
                                    </Link>
                                    <button className={`button buttonGrey ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.toggleEditDisable()}>Edit</button>
                                    <button className={`button buttonRed ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => {this.props.clearShoppingList(); this.toggleEditDisable()}} >Clear</button>
                                    <button className={`button buttonBlue ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => this.toggleEditDisable()}>Done</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="categoryListContainer">
                        {[...this.props.itemDataByCategory.entries()].map((entry) => <CategoryList isPreset={false} name={entry[0]} items={entry[1]} isEditDisabled={this.state.isEditDisabled} updateItem={this.props.updateItem} removeItem={this.props.removeItem}/>)}
                    </div>   
                </div>
            </div>
        );
    }
}

export default ShoppingList;