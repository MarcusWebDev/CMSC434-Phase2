import React from 'react'

const HomePageNotifications = ({itemname}) => {
  return (
    <div><p className="notificationsAlert"><u><b>{itemname}</b></u> is expiring soon!</p></div>
  )
}

export default HomePageNotifications