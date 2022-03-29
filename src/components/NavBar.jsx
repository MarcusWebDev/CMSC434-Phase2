import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({selectedTab}) {
    return (
        <div className="navBarWrapper">
            <div className="navBarContainer">
                <Link to="/">
                    <div>
                        {selectedTab == "Home Page" ? <img src={require("../icons/homeButtonBlue.png")} /> : <img src={require("../icons/homeButtonGray.png")} />}
                    </div>
                </Link>
                <Link to="/shoppingList">
                    <div>
                        {selectedTab == "Shopping List" ? <img src={require("../icons/shoppingListButtonBlue.png")} /> : <img src={require("../icons/shoppingListButtonGray.png")} />}
                    </div>
                </Link>
                <Link to="/inventory">
                    <div>
                        {selectedTab == "Inventory" ? <img src={require("../icons/inventoryButtonBlue.png")} /> : <img src={require("../icons/inventoryButtonGray.png")} />}
                    </div>
                </Link>
                <Link to="/recipes">
                    <div>
                        {selectedTab == "Recipes" ? <img src={require("../icons/recipesButtonBlue.png")} /> : <img src={require("../icons/recipesButtonGray.png")} />}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;