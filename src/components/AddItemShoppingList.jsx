import React from "react";
import "./AddItemShoppingList.css";

class AddItemShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: "",
            itemQuantity: 0,
            itemUnit: "lbs"
        }
    }


    render() {
        return (
            <div className="addItemWrapper">
                <div className="addItemContainer">
                    <div className="addItemHeader">
                        <h2>New Item</h2>
                        <img src={require("../icons/closeButton.png")} className="addItemCloseButton" onClick={()=> this.props.close()}/>
                    </div>
                    <label className="addItemLabel">Item Name</label>
                    <input type="text" className="addItemInput" onChange={(event) => this.setState({itemName: event.target.value})} placeholder="Name"/>
                    <div className="quantityUnitContainer">
                        <div className="quantityContainer">
                            <label className="addItemLabel">Quantity</label>
                            <input type="number" className="addItemInput" onChange={(event) => this.setState({itemQuantity: event.target.value})} placeholder="0" />            
                        </div>
                        <div className="unitContainer">
                            <label className="addItemLabel">Unit</label>
                            <select className="addItemInput" onChange={(event) => this.setState({itemUnit: event.target.value})}>
                                <option value="lbs">lbs</option>
                                <option value="gallons">gallons</option>
                                <option value="cartons">cartons</option>
                                <option value="bowls">bowls</option>
                                <option value="servings">servings</option>
                            </select>
                        </div>
                        
                    </div>
                    <button className="addItemButton addItemButtonActive" onClick={()=> this.props.updateItemComponentsByCategory(this.props.itemsToCategories.get(this.state.itemName), {name: this.state.itemName, quantity: this.state.itemQuantity, unit: this.state.itemUnit, checked: false})}>Add Item(s)</button>
                </div>
            </div>
        );
    }
}

export default AddItemShoppingList;