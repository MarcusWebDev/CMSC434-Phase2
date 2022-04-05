import React from 'react'
import './AllStorageUnits.css'
import { Link } from "react-router-dom";
import BackArrow from '../icons/backArrowBlue.png';
import AddSymbol from '../icons/addStorage.png'
import StorageUnit from './StorageUnit';

const AllStorageUnits = ({dummyHome,editHomePage,deleteHomePage}) => {

    const changeEditButton = () => {
    let btn=document.getElementById("EditStorage")
    if(btn.innerHTML=="Edit")
    {
        btn.innerHTML="Done"
        editHomePage()
    }
    else {
        btn.innerHTML="Edit"
        editHomePage()
    }
    }

  return (
    <div className='StoragePage'>
        <div className='StorageHead'>
       { dummyHome[0].isEditable ? <Link to="/addStorageUnits" className="linkBack4" > <img className="linkAdd2" src={AddSymbol} /></Link> : <Link to="/" className="linkBack4" > <img className="linkBackimage" src={BackArrow} />  Home</Link> }
        <h4 className='StorageHeading'>Storage Units</h4>
        <div id="EditStorage" className="linkEdit3" onClick={changeEditButton} >Edit</div> 
        </div>
        <div className='StorageLists'>
            {dummyHome.map((unit) => {
                return (
                    <StorageUnit id={unit.id} name={unit.name} number={unit.numberitems} linkTo={unit.linkTo} FavoriteFillc={unit.FavoriteFill} isEditable={unit.isEditable} deleteHomePage={deleteHomePage} />
                )
            } )}
        
        {/* <StorageUnit id={dummyHome[1].id} name={dummyHome[1].name} number={dummyHome[1].numberitems} linkTo={dummyHome[1].linkTo} FavoriteFillc={false} isEditable={dummyHome[1].isEditable} deleteHomePage={deleteHomePage}/>
        <StorageUnit id={dummyHome[2].id} name={dummyHome[2].name} number={dummyHome[2].numberitems} linkTo={dummyHome[2].linkTo} FavoriteFillc={false} isEditable={dummyHome[2].isEditable} deleteHomePage={deleteHomePage}/> */}
        </div>
        </div>
  )
}

export default AllStorageUnits