import React from "react";
import "./NewItemShoppingList.css";

class NewItemShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            itemQuantity: 0,
            itemUnit: "lbs"
        }
    }

    createItem() {
        if (this.props.isPreset) {
            this.props.createItem(this.props.presetId, this.props.itemsToCategories.get(this.state.itemName), {id: this.props.nextItemId, name: this.state.itemName, quantity: this.state.itemQuantity, unit: this.state.itemUnit, checked: false})
        } else {
            this.props.createItem(this.props.itemsToCategories.get(this.state.itemName), {id: this.props.nextItemId, name: this.state.itemName, quantity: this.state.itemQuantity, unit: this.state.itemUnit, checked: false})
        }
    }


    render() {
        return (
            <div className="newItemWrapper">
                <div className="newItemContainer">
                    <div className="newItemHeader">
                        <h2>New Item</h2>
                        <img src={require("../icons/closeButton.png")} className="newItemCloseButton" onClick={()=> this.props.close()}/>
                    </div>
                    <label className="newItemLabel">Item Name</label>
                    <input type="text" className="newItemInput" onChange={(event) => this.setState({itemName: event.target.value})} placeholder="Name"/>
                    <div className="quantityUnitContainer">
                        <div className="quantityContainer">
                            <label className="newItemLabel">Quantity</label>
                            <input type="number" className="newItemInput" min="1" onChange={(event) => this.setState({itemQuantity: event.target.value})} placeholder="1" />            
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
                    <button className="newItemButton newItemButtonActive" onClick={()=> this.createItem()}>Add Item(s)</button>
                </div>
            </div>
        );
    }
}

export default NewItemShoppingList;