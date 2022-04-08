import React from 'react';
import { render } from '@testing-library/react';
import CategoryList from "./CategoryList.jsx";
import NavBar from "./NavBar.jsx";
import SelectUserPortrait from "./SelectUserPortrait.jsx";
import { Link } from "react-router-dom";
import "./ShoppingList.css";


//check if there is a current value for map.get("whatever"), if not initialize it with an array with the item you want put in it
//otherwise do a map.get().put()

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditDisabled: true,
            elizabethClicked: false,
            jamesClicked: false,
            williamClicked: false,
            patriciaClicked: false
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
                            <div className="headerButtonContainer">
                                <Link to="/shoppingList/add" className={`link ${this.state.isEditDisabled ? null : "hidden"}`}>  
                                    <button className={`buttonBackgroundless blueText ${this.state.isEditDisabled ? null : "hidden"}`}>Add</button>
                                </Link>
                                <button className={`buttonBackgroundless blueText ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.toggleEditDisable()}>Edit</button>
                                <button className={`buttonBackgroundless redText ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => {this.props.clearShoppingList(); this.toggleEditDisable()}} >Clear List</button>
                                <button className={`buttonBackgroundless blueText boldText ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => this.toggleEditDisable()}>Done</button>
                            </div>
                            <div className="headerContainer">
                                <h1 className="header">Shopping List</h1>
                            </div>
                        </div>
                    </div>
                    <div className="shoppingListSelectUser">
                        <h3>Select Users</h3>
                        <div className="shoppingListUsersContainer">
                            <SelectUserPortrait name="Elizabeth" picture={require("../icons/elizabeth.jpg")} defaultState={true} />
                            <SelectUserPortrait name="James" picture={require("../icons/james.jpg")} defaultState={false} />
                            <SelectUserPortrait name="William" picture={require("../icons/william.jpg")} defaultState={false}/>
                            <SelectUserPortrait name="Patricia" picture={require("../icons/patricia.jpg")} defaultState={false}/>
                        </div>
                    </div>
                    <div className="categoryListContainer">
                        {[...this.props.itemDataByCategory.entries()].map((entry) => <CategoryList isPreset={false} name={entry[0]} items={entry[1]} isEditDisabled={this.state.isEditDisabled} updateItem={this.props.updateItem} removeItem={this.props.removeItem}/>)}
                    </div>   
                </div>
                <NavBar selectedTab={"Shopping List"} />
            </div>
        );
    }
}

export default ShoppingList;