import React from 'react';
import { render } from '@testing-library/react';
import ShoppingListItem from "./ShoppingListItem.jsx";
import CategoryList from "./CategoryList.jsx";
import NewItemShoppingList from './NewItemShoppingList.jsx';
import ItemsAddedNotification from "./ItemsAddedNotification.jsx";
import NavBar from "./NavBar.jsx";
import "./ShoppingListPreset.css";


//check if there is a current value for map.get("whatever"), if not initialize it with an array with the item you want put in it
//otherwise do a map.get().put()

class ShoppingListPreset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditDisabled: true,
            addItemOpen: false,
            itemsAddedOpen: false,
            aKeyboardVisible: false
        }
        this.closeAddItem = this.closeAddItem.bind(this);
        this.closeItemsAdded = this.closeItemsAdded.bind(this);
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

    closeItemsAdded() {
        this.setState({
            itemsAddedOpen: false
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
    
    selectAll() {
        for (let currentArray of this.props.presetData.presetMap) {
            for (let currentItem of currentArray[1]) {
                let categoryName = this.props.itemsToCategories.get(currentItem.name.toLowerCase().replace(/ /g, ""));
                if (categoryName == undefined) {
                    categoryName = "Other";
                }
                this.props.updateItem(this.props.presetData.id, currentItem.id, categoryName, currentItem.name, currentItem.quantity, currentItem.unit, true)
            }
        }        
    }

    deselectAll() {
        for (let currentArray of this.props.presetData.presetMap) {
            for (let currentItem of currentArray[1]) {
                let categoryName = this.props.itemsToCategories.get(currentItem.name.toLowerCase().replace(/ /g, ""));
                if (categoryName == undefined) {
                    categoryName = "Other";
                }
                this.props.updateItem(this.props.presetData.id, currentItem.id, categoryName, currentItem.name, currentItem.quantity, currentItem.unit, false)
            }
        }  
    }

    render() {
        return(
            <div className="presetWrapper">
                <div className={`presetContainer ${this.state.addItemOpen || this.state.itemsAddedOpen ? "blurWall" : null}`}>
                    <div className="presetHeaderButtonBar">
                        <div className={`backButtonContainer ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.props.closePreset()}>
                            <img src={require("../icons/backArrowBlue.png")} className="backButtonArrow"/>
                            <p className="blueText backButtonMargins">Back</p>
                        </div>
                        <button className={`buttonBackgroundless redText  ${this.state.isEditDisabled ? "hidden" : "verticalMargin"}`} onClick={() => {this.props.closePreset(); this.props.deletePreset(this.props.presetData.id)}}>Delete Template</button>
                        <button className={`buttonBackgroundless blueText ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.toggleEditDisable()}>Edit</button>
                        <button className={`buttonBackgroundless blueText boldText ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => this.toggleEditDisable()}>Done</button>
                    </div>
                    
                    <div className="presetHeaderContainer">
                        <input type="text" className="presetName" onChange={(event) => this.props.updatePresetName(this.props.presetData.id, event.target.value)} defaultValue={this.props.name} disabled={this.state.isEditDisabled} onFocus={() => this.setState({aKeyboardVisible: true})} onBlur={() => this.setState({aKeyboardVisible: false})} />
                    </div>
                    <div className="presetSelectionButtons">
                        <button className={`presetSelectAllButton ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.deselectAll()}>Deselect All</button>
                        <button className={`presetSelectAllButton ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => this.selectAll()}>Select All</button>
                    </div>
                    <div className={`presetItemContainer ${this.state.isEditDisabled ? "presetItemContainerSmall" : null}`}>
                        {this.presetMapIsAllEmptyArrays() ? <p className="presetListIsEmptyText">This List is Empty</p> : [...this.props.presetData.presetMap.entries()].map((entry) => <CategoryList isPreset={true} presetId={this.props.presetData.id} name={entry[0]} items={entry[1]} isEditDisabled={this.state.isEditDisabled} updateItem={this.props.updateItem} removeItem={this.props.removeItem}/>)}
                        <div className="presetEmptySpace"><br/><br/><br/><br/><br/></div>
                    </div>
                    <button className={`addAllItemsButton ${this.state.isEditDisabled ? null : "hidden"}`} onClick={() => {this.setState({itemsAddedOpen: true}); this.props.importItemstoShoppingList(this.props.presetData.presetMap)}}>Add Selected Items to Shopping List</button>
                    <div className={`presetBottomButtonsContainer ${this.state.isEditDisabled ? null : "presetLessMargin"}`}>
                        <button className={`addNewItemsToListButton ${this.state.isEditDisabled ? "hidden" : null}`} onClick={() => this.setState({addItemOpen: true})}>Add New Items to Template</button>
                    </div>
                    
                </div>
                <NavBar selectedTab={"Shopping List"} />
                {this.state.addItemOpen ? <NewItemShoppingList isPreset={true} presetId={this.props.presetData.id} createItem={this.props.createItem} itemsToCategories={this.props.itemsToCategories} nextItemId={this.props.nextItemId} close={this.closeAddItem}/> : null}
                {this.state.itemsAddedOpen ? <ItemsAddedNotification addedToName="Shopping List" onClose={this.closeItemsAdded} pathToGoTo="/shoppingList" /> : null}
                <img className={`alphabeticKeyboard ${this.state.aKeyboardVisible ? "" : "hidden "}`} src={require("../icons/alphabeticKeyboard.png")} />
            </div>
        );
    }
}

export default ShoppingListPreset;