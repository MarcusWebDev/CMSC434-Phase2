import React, { useState } from 'react'
import "./AddItemInventory.css"
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import ItemsAddedNotification from './ItemsAddedNotification.jsx';
import BackArrow from '../icons/backArrowBlue.png';

const AddItemInventory = ({importFromShoppingList}) => {
  const [itemsAddedOpen, setItemsAddedOpen] = useState(false);
  return (
    <div className='PageWrapper'>
      <div className={`addItemInventoryContainer ${itemsAddedOpen ? "blurWall" : ""}`}>
        <div className='HeaderContainer'>
          <Link to="/inventory/LakeHouseFreezer" className="linkBack2" > <img className="linkBackimage" src={BackArrow} />  Back</Link>
          <h3 className='Heading'>Add Item(s)</h3>
        </div>
        <hr className='rule'/>
        <div className='ShoppingListandButton'>
          <h3 className='ChooseShoppingList'>Choose from Shopping List</h3>
          <div className='Select'>Select the items from Shopping List</div>
            <div className='ShoppingListButton' onClick={() =>{setItemsAddedOpen(true); importFromShoppingList()}}>
              Import checked items from Shopping List
            </div>
          </div>
        <hr className='rule2'/>
        <div className='ShoppingListandButton'>
          <h3 className='ChooseShoppingList2'>Or Enter Item Info</h3>
          <div className='Select'>Manually enter the info for the item to be added</div>
          <Link to="/inventory/addLakeHouseFreezerItem" className="linkAdd" color='#007AFF;'> 
            <div className='ShoppingListButton'>
              Enter Item Info
            </div>
          </Link>
        </div>
      </div>

      {itemsAddedOpen ? <ItemsAddedNotification addedToName="Inventory" onClose={() => setItemsAddedOpen(false)} pathToGoTo="/inventory/LakeHouseFreezer" /> : null}
      <NavBar selectedTab={"Inventory"} />
    </div>
  )
}

export default AddItemInventory