import React from "react";
import NewItemNotification from "./NewItemNotification.jsx";
import SelectUserPortrait from "./SelectUserPortrait.jsx";
import "./NewItemShoppingList.css";

class NewItemShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            itemQuantity: 1,
            itemUnit: "lbs",
            itemAddedNotificationOpen: false,
            notificationName: "",
            aKeyboardVisible: false,
            nKeyboardVisible: false
        };
        this.timer = 0;
        this.newItemNotificationOnTimeout = this.newItemNotificationOnTimeout.bind(this);
    }

    createItem() {
        if (this.props.isPreset) {
            this.props.createItem(this.props.presetId, this.props.itemsToCategories.get(this.state.itemName.toLowerCase().replace(/ /g, "")), {id: this.props.nextItemId, name: this.state.itemName, quantity: this.state.itemQuantity, unit: this.state.itemUnit, checked: false, presetChecked: false})
        } else {
            this.props.createItem(this.props.itemsToCategories.get(this.state.itemName.toLowerCase().replace(/ /g, "")), {id: this.props.nextItemId, name: this.state.itemName, quantity: this.state.itemQuantity, unit: this.state.itemUnit, checked: false})
        }
    }

    newItemNotificationOnTimeout() {
        this.setState({
            itemAddedNotificationOpen: false
        });
    }

    runNotificationTimer() {
        this.timer = setTimeout(() => {
            this.newItemNotificationOnTimeout();
        }, 3000)
    }

    render() {
        return (
            <div className={`newItemWrapper ${this.props.isPreset ? "newItemWrapperPreset" : null}`}>
                <div className="newItemContainer">
                    <div className="newItemHeader">
                        <h2>New Item</h2>
                        <img src={require("../icons/closeButton.png")} className="newItemCloseButton" onClick={()=> this.props.close()}/>
                    </div>
                    <label className="newItemLabel">Item Name</label>
                    <input type="text" className="newItemInput" onChange={(event) => this.setState({itemName: event.target.value})} placeholder="Name" onFocus={() => this.setState({aKeyboardVisible: true})} onBlur={() => this.setState({aKeyboardVisible: false})}/>
                    <div className="quantityUnitContainer">
                        <div className="quantityContainer">
                            <label className="newItemLabel">Quantity</label>
                            <input type="number" className="newItemInput" min="1" onChange={(event) => this.setState({itemQuantity: event.target.value})} placeholder="1" onFocus={() => this.setState({nKeyboardVisible: true})} onBlur={() => this.setState({nKeyboardVisible: false})}/>            
                        </div>
                        <div className="unitContainer">
                            <label className="newItemLabel">Unit</label>
                            <select className="newItemInput" onChange={(event) => this.setState({itemUnit: event.target.value})}>
                                <option value="lbs">lbs</option>
                                <option value="gallons">gallons</option>
                                <option value="cartons">cartons</option>
                                <option value="bowls">bowls</option>
                                <option value="servings">servings</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className={`${this.props.isPreset ? "hidden" : null}`}>
                        <h3 className="newItemSelectUsers">Select Users</h3>
                        <div className="shoppingListUsersContainer">
                            <SelectUserPortrait name="Elizabeth" picture={require("../icons/elizabeth.jpg")} defaultState={true}/>
                            <SelectUserPortrait name="James" picture={require("../icons/james.jpg")} defaultState={false} />
                            <SelectUserPortrait name="William" picture={require("../icons/william.jpg")} defaultState={false} />
                            <SelectUserPortrait name="Patricia" picture={require("../icons/patricia.jpg")} defaultState={false} />
                        </div>
                    </div>
                    <button className="newItemButton newItemButtonActive" onClick={()=> {this.createItem(); this.setState({itemAddedNotificationOpen: true, notificationName: this.state.itemName}); clearTimeout(this.timer); this.runNotificationTimer()}}>Add Item(s)</button>
                </div>
                {this.state.itemAddedNotificationOpen ? <NewItemNotification name={this.state.notificationName} isPreset={this.props.isPreset} /> : null}
                <img className={`alphabeticKeyboard ${this.state.aKeyboardVisible ? "" : "hidden "}`} src={require("../icons/alphabeticKeyboard.png")} />
                <img className={`numericKeyboard ${this.state.nKeyboardVisible ? "" : "hidden "}`} src={require("../icons/numericKeyboard.png")} />
            </div>
        );
    }
}

export default NewItemShoppingList;