import React from 'react'
import "./AddItemInventory.css"
import { Link } from "react-router-dom";

const AddItemInventory = () => {
  return (
    <div className='PageWrapper'>
        <div className='HeaderContainer'>
        <h3 className='Heading'>Add Item(s)</h3>
        </div>
        <hr className='rule'/>
        <div className='ShoppingListandButton'>
        <h3 className='ChooseShoppingList'>Choose from Shopping List</h3>
        <div className='Select'>Select the items from Shopping List</div>
        <div className='ShoppingListButton'>
            Go to Your Shopping List
        </div>
        </div>
        <hr className='rule2'/>
        <div className='ShoppingListandButton'>
        <h3 className='ChooseShoppingList2'>Or Enter Item Info</h3>
        <div className='Select'>Manually enter the info for the item to be added</div>
        <Link to="/inventory/addOfficeRefrigeratorItem" className="linkAdd" color='#007AFF;'> <div className='ShoppingListButton'>
            Enter Item Info
        </div>
        </Link>
        </div>
        
            
            
        
    </div>
  )
}

export default AddItemInventory