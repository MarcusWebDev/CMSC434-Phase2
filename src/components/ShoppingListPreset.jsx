import React from 'react';
import { render } from '@testing-library/react';
import ShoppingListItem from "./ShoppingListItem.jsx";
import CategoryList from "./CategoryList.jsx";
import NewItemShoppingList from './NewItemShoppingList.jsx';
import "./ShoppingListPreset.css";


//check if there is a current value for map.get("whatever"), if not initialize it with an array with the item you want put in it
//otherwise do a map.get().put()

class ShoppingListPreset extends React.Component {
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
    }

    closeAddItem() {
        this.setState({
            addItemOpen: false
        })
    }

    presetMapIsAllEmptyArrays() {
        for (let currentValue of this.props.presetData.presetMap.values()) {;
            if (currentValue.length != 0) {
                return false;
            }
        }
        return true;
    }

    render() {
        return(
            <div className="presetWrapper">
                <div className={`presetContainer ${this.state.addItemOpen ? "blurWall" : null}`}>
                    <div className="backButtonContainer" onClick={() => this.props.closePreset()}>
                        <img src={require("../icons/backArrowWhite.png")} className="backButtonArrow"/>
                        <p className="whiteText">Back</p>
                    </div>
                    <div className="presetHeaderContainer">
                        <input type="text" className="presetName" onChange={(event) => this.props.updatePresetName(this.props.presetData.id, event.target.value)} defaultValue={this.props.name} disabled={this.state.isEditDisabled}/>
                        <button className={`button buttonWhite ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.toggleEditDisable()}>Edit</button>
                        <button className={`button buttonWhite ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => this.toggleEditDisable()}>Done</button>
                    </div>
                    <div className="presetItemContainer">
                        {this.presetMapIsAllEmptyArrays() ? <p className="presetListIsEmptyText">This List is Empty</p> : [...this.props.presetData.presetMap.entries()].map((entry) => <CategoryList isPreset={true} presetId={this.props.presetData.id} name={entry[0]} items={entry[1]} isEditDisabled={this.state.isEditDisabled} updateItem={this.props.updateItem} removeItem={this.props.removeItem}/>)}
                    </div>
                    <button className={`addAllItemsButton ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.props.importItemstoShoppingList(this.props.presetData.presetMap)}>Add All Items to Shopping List</button>
                    <div className="presetBottomButtonsContainer">
                        <button className={`deleteListButton ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => {this.props.closePreset(); this.props.deletePreset(this.props.presetData.id)}}>Delete List</button>
                        <button className={`addNewItemsToListButton ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => this.setState({addItemOpen: true})}>Add New Items to List</button>
                    </div>
                    
                </div>
                {this.state.addItemOpen ? <NewItemShoppingList isPreset={true} presetId={this.props.presetData.id} createItem={this.props.createItem} itemsToCategories={this.props.itemsToCategories} nextItemId={this.props.nextItemId} close={this.closeAddItem}/> : null}
            </div>
        );
    }
}

export default ShoppingListPreset;