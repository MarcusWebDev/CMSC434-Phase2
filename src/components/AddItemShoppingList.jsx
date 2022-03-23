import React from "react";
import ShoppingListPreset from "./ShoppingListPreset.jsx";
import ShoppingListPresetCard from "./ShoppingListPresetCard.jsx";
import NewItemShoppingList from "./NewItemShoppingList.jsx";
import { Link } from "react-router-dom";
import "./AddItemShoppingList.css";

class AddItemShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addItemOpen: false,
            presetOpen: false,
            presetIndex: 0
        }
        this.closeAddItem = this.closeAddItem.bind(this);
        this.closePreset = this.closePreset.bind(this);
        this.openPresetByCard = this.openPresetByCard.bind(this);
    }

    closeAddItem() {
        this.setState({
            addItemOpen: false
        })
    }

    closePreset() {
        this.setState({
            presetOpen: false
        })
    }
    
    openPresetByCard(index) {
        this.setState({
            presetOpen: true, presetIndex: index
        });
    }

    render() {
        if (this.state.presetOpen) {
            return (
                <ShoppingListPreset 
                    closePreset={this.closePreset} 
                    updatePresetName={this.props.updatePresetName}
                    importItemstoShoppingList={this.props.importItemstoShoppingList}
                    deletePreset={this.props.deletePreset}
                    name={this.props.presetArray[this.state.presetIndex].name} 
                    presetData={this.props.presetArray[this.state.presetIndex]} 
                    createItem={this.props.createPresetItem}
                    updateItem={this.props.updateItem} 
                    removeItem={this.props.removeItem}
                    nextItemId={this.props.nextItemId}
                    itemsToCategories={this.props.itemsToCategories}
                />
            ); 
        } else {
            return (
                <div className="addItemWrapper">
                    <div className={`addItemContainer ${this.state.addItemOpen ? "blurWall" : null}`}> 
                        <Link to="/shoppingList" className="link" >
                            <div className="backButtonContainer">
                                <img src={require("../icons/backArrowBlue.png")} className="backButtonArrow"/>
                                <p className="blueText displayInlineBlock">Shopping List</p>
                            </div>
                        </Link>
                        <h1>Add Item(s)</h1>
                        <div className="savedListHeader">
                            <h3>Start with a Saved List</h3>
                            <div className="newListButton" onClick={() => {this.props.createNewPreset(); this.setState({presetOpen: true, presetIndex: this.props.presetArray.length})}}>
                                <img src={require("../icons/addSymbol.png")} className="addSymbol"/>
                                <p>New List</p>
                            </div>
                        </div>
                        <div className="containerOfPresetCards">
                            {this.props.presetArray.map((obj, i) => <ShoppingListPresetCard openPreset={this.openPresetByCard} presetIndex={i} presetName={obj.name} presetMap={obj.presetMap}/>)}
                        </div>
                        <h3 className="addItemEnterInfoText">Or Enter Item Info</h3>
                        <p className="addItemTinyText">Manually enter the info for the item to be added</p>
                        <button className="enterItemInfoButton" onClick={() => this.setState({addItemOpen: true})}>Enter Item Info</button>
                    </div>
                    {this.state.addItemOpen ? <NewItemShoppingList isPreset={false} createItem={this.props.createItem} itemsToCategories={this.props.itemsToCategories} nextItemId={this.props.nextItemId} close={this.closeAddItem}/> : null}
                </div>
            );
        }
    }
}

export default AddItemShoppingList;