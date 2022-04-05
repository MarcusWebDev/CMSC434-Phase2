import React from 'react';
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import NavBar from "./NavBar.jsx";
import "./HomePage.css";
import SelectUserPortrait from './SelectUserPortrait.jsx';
import StorageUnit from './StorageUnit.jsx';
import HomePageNotifications from './HomePageNotifications.jsx';


function HomePage({dummyHome,dummyInv}) {

    
    const getLink = () => {
        console.log(dummyHome[0].linkTo)
    }

    return (
        <div className="homePageWrapper">
            <div className="homePageContainer">
                <div className="headerBar">
                    <h1 className="header">Hello, Elizabeth!</h1>
                    <Link to="/profileSettings" className="link">
                    <SelectUserPortrait picture={require("../icons/elizabeth.jpg")} />
                    </Link>
                </div>
                <div className="notifications">
                    <p className="notificationsHeader"><b>Notifications</b></p>
                    {dummyInv.map((unit) => { if(unit.categoryName==="Expiring")
                return (
                    <HomePageNotifications itemname={unit.name} />
                )
            } )}            
                    {/* <p className="notificationsAlert"><u><b>Watermelon</b></u> is expiring in 3 days!</p>
                    <p className="notificationsAlert"><u><b>Oat Milk</b></u> is expiring in 1 day!</p> */}
                </div>
                <hr className='divide'/>
                <div className="refrigeratorSelectionContainer">
                    
                    <h2 className="refrigeratorHeader">Your Storage Units</h2> <div className='SeeAll'><a className="link" href="#/allStorageUnits" >See All</a></div>
                </div>
                <div className="refrigeratorFreezerContainer">
                {dummyHome.map((unit) => {
                return (
                    <StorageUnit id={unit.id} name={unit.name} number={unit.numberitems} linkTo={unit.linkTo} FavoriteFillc={unit.FavoriteFill} />
                )
            } )}
                    {/* <StorageUnit name={dummyHome[0].name} number={dummyHome[0].numberitems} linkTo={dummyHome[0].linkTo} FavoriteFillc={true}/>
                    <StorageUnit name={dummyHome[1].name} number={dummyHome[1].numberitems} linkTo={dummyHome[1].linkTo} /> */}
                </div>
            </div>
            <NavBar selectedTab="Home Page" />
        </div>
    );
}

export default HomePage;