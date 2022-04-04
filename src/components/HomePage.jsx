import React from 'react';
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import NavBar from "./NavBar.jsx";
import "./HomePage.css";
import SelectUserPortrait from './SelectUserPortrait.jsx';
import StorageUnit from './StorageUnit.jsx';


function HomePage() {
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
                    <p className="notificationsAlert"><u><b>Bananas</b></u> is expiring in 2 days!</p>
                    <p className="notificationsAlert"><u><b>Watermelon</b></u> is expiring in 3 days!</p>
                    <p className="notificationsAlert"><u><b>Oat Milk</b></u> is expiring in 1 day!</p>
                </div>
                <hr className='divide'/>
                <div className="refrigeratorSelectionContainer">
                    
                    <h2 className="refrigeratorHeader">Your Storage Units</h2> <div className='SeeAll'>See All</div>
                </div>
                <div className="refrigeratorFreezerContainer">
                    {/* <Link to="/inventory/OfficeRefrigerator" className="link">
                        <Button color="#FFFFFF" icon={require("../icons/basket.png")} text="Refrigerator"/>
                    </Link>
                    <Link to="/freezer" className="link">
                        <Button color="#FFFFFF" icon={require("../icons/snowflake.png")} text="Freezer"/>
                    </Link> */}
                    <StorageUnit />
                </div>
            </div>
            <NavBar selectedTab="Home Page" />
        </div>
    );
}

export default HomePage;