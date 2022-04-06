import React from 'react'
import "./StorageUnit.css"
import FavoriteFill from "../icons/favoriteFill.png"
import Elizabeth from '../icons/ElizabethBlue.png';
import James from '../icons/JamesBlue.png';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import deleteSymbol from '../icons/deleteSymbol.png'

const StorageUnit = ({id,name,number,linkTo,FavoriteFillc,isEditable,deleteHomePage}) => {

  const onClick = () => {
    deleteHomePage(id)
  }
  

  const getLink = () => {
    window.location.href=linkTo
}

  return (
    <div className={"StorageUnitWrapper"}>
      <div className='StorageUnitBox' onClick={getLink}>
        <h4 className='StorageUnitHeading' >{name}</h4>
        <p className='Numberitems'>{number} items</p>
        <div className='FavoriteandUsers'>
          {FavoriteFillc ? (<img className='FavoriteFill' src={FavoriteFill} />) : (<div className='FavoriteFill'></div>)}
          <div className='UserImages'>
            <img  src={Elizabeth}></img>
            <img className='James2' src={James}></img>
          </div>
        </div>
      </div>
      {isEditable ? (<img className='StorageUnitDeleteIcon' src={deleteSymbol} onClick={onClick}/>) : null} 
    </div>
    
  )
}

export default StorageUnit