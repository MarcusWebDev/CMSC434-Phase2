import React from "react";
import "./InventoryCategoryList.css";
import InventoryItem from "./InventoryItem.jsx";


const InventoryCategoryList = ({items,onDelete,onReduce,updateItem}) => {

 
    return (
      <div className="categoryContainer2">
            <h3 className="categoryHeader2">{items[0].categoryName}</h3>
            
            {items.map(shoppingListItem => <InventoryItem key={shoppingListItem.id} item={shoppingListItem} onDelete={onDelete} onReduce={onReduce} updateItem={updateItem}/>)}
            
        </div>
  )
  
}



export default InventoryCategoryList; 