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
    <div className='StorageUnitBox' >
      {isEditable ? (<img className='deleteicon' src={deleteSymbol} onClick={onClick}/>) : null} 
        <h4 className='StorageUnitHeading' onClick={getLink}>{name}</h4>
        <p className='Numberitems'>{number} items</p>
      <div className='FavoriteandUsers'>
        {FavoriteFillc ? (<img className='FavoriteFill' src={FavoriteFill} />) : (<div className='FavoriteFill'></div>)}
        <div className='UserImages'>
          <img  src={Elizabeth}></img>
          <img className='James2' src={James}></img>
</div>
      </div>
    </div>
  )
}

export default StorageUnit