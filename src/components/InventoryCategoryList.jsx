import React from "react";
import "./InventoryCategoryList.css";
import InventoryItem from "./InventoryItem.jsx";
import { useState } from 'react';


const InventoryCategoryList = ({items,onDelete,onReduce,updateItem}) => {
  
  // console.log(items);
    return (
      <div className="categoryContainer2">
            <h3 className="categoryHeader2">{items[0].categoryName}</h3>
            
            {items.map(shoppingListItem => <InventoryItem key={shoppingListItem.id} item={shoppingListItem} onDelete={onDelete} onReduce={onReduce} updateItem={updateItem}/>)}
            
        </div>
  )
}



export default InventoryCategoryList; 