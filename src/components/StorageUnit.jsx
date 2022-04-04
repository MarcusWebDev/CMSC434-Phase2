import React from 'react'
import "./StorageUnit.css"

const StorageUnit = ({name}) => {
  return (
    <div className='StorageUnitBox'>
        <h4 className='StorageUnitHeading'>Office Refrigerator</h4>
        <p className='Numberitems'>12 items</p>
    </div>
  )
}

export default StorageUnit