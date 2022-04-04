import React from 'react'
import "./InventoryRefrigerator.css"
import Symbol from '../icons/removeCircle.svg'
import InventoryCategoryList from './InventoryCategoryList.jsx';
import { Link } from "react-router-dom";
// import AddItemInventory from './components/AddItemInventory';
import droparrow from '../icons/dropDownArrow.png';
import Elizabeth from '../icons/Elizabeth.png';
import James from '../icons/James.png';
import William from '../icons/William.png';
import Patricia from '../icons/Patricia.png';
import NavBar from './NavBar';
import BackArrow from '../icons/backArrowBlue.png';


function InventoryRefrigerator(props) {

    const onClick = () => {
        console.log("GG");
    }

    const edit = () => {
        // console.log("works");
        var btn=document.getElementsByClassName('linkEdit');
        // btn.text="Done"
        var inputs = document.getElementsByClassName('nameInput shoppingListItemInput');

        var tip = document.getElementsByClassName('tip');
        if(inputs[0].disabled===true)
        {
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false;
            }
            inputs = document.getElementsByClassName('quantityInput shoppingListItemInput');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false;
            }
            inputs = document.getElementsByClassName('metricsSelect shoppingListItemInput');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false;
            }
        tip[0].style.display = "None";
            btn[0].innerHTML='Done'
            
        }
        else {
            var inputs = document.getElementsByClassName('nameInput shoppingListItemInput');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        inputs = document.getElementsByClassName('quantityInput shoppingListItemInput');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        inputs = document.getElementsByClassName('metricsSelect shoppingListItemInput');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
        tip[0].style.display = "flex";
        btn[0].innerHTML='Edit'
        }
        
       
    }


    const activeTab = () => {
        var btnContainer = document.getElementById("act");
        var btns = btnContainer.getElementsByClassName("Refri");

        if (btns[0].className.includes(" active")) {
            btns[0].className = btns[0].className.replace(" active", "");
            btns[1].className += " active";
            document.getElementById("dis").style.display = "none"
        }
        else {
            btns[1].className = btns[1].className.replace(" active", "");
            btns[0].className += " active";
            document.getElementById("dis").style.display = "flex"

        }


    }
    

    const m = {}
    props.dummyInv.map((item) => {
        if(item.categoryName in m) {
            let temp = m[item.categoryName]
            temp.push(item)
            m[item.categoryName] = temp
        }
        else{
            m[item.categoryName] = [item]
        }
    })

    console.log(m)


    return (
        <div className='PageWrapper'>
           <Link to="/" className="linkBack" > <img className="linkBackimage" src={BackArrow} />     Back</Link>
            <div className='HeaderContainer'>
                <Link to="/inventory/addOfficeRefrigerator" className="linkAdd" color='#007AFF;'>Add</Link>
                
                <div className="linkEdit" onClick={edit}>Edit</div>
                <button className="button buttonBlue hidden" >Done</button>
            </div>
            <div id="actA" className='RefriFreezerA' >
            <div className="dropdown">
  <h3 className="Refrig">Office Refrigerator <img className="drop" src={droparrow}></img></h3>
  <div className="dropdown-content">
    <a href="#">Lake House Refrigerator</a>
    <a href="#">Lake House Freezer</a>
    <a href="#">Lake House Pantry</a>
    <a href="#">Office Pantry</a>
  </div>
  <hr className='rule3' />
</div>
                <h4 className='select'>Select Users</h4>
                <div className='Users'>
                    <form>
                    <span className="dot"><img className='Elizabeth' src={Elizabeth}></img></span>&nbsp;
                <span className="dot"><img className='James' src={James}></img></span>&nbsp;
                <span className="dot"><img className='William' src={William}></img></span>&nbsp;
                <span className="dot"><img className='Patricia' src={Patricia}></img></span>&nbsp;
                    </form>
                </div>
                <div className='Usernames'>
                    Elizabeth &nbsp; &nbsp; &nbsp;  James &nbsp; &nbsp; &nbsp; William &nbsp; &nbsp;&nbsp;Patricia
                    
                </div>
                <hr className='rule4' />
                <div className='tip'>
                    <p className='para'>Tip: Click<img className='symbol' src={Symbol}></img>to reduce item quantity by one.</p>
                </div>
            </div>
            <div id="dis" className='InventoryList'>
                {/* {console.log(props.dummyInv)} */}
                {}
                {Object.keys(m).map((k) => {
                    return (
                        <InventoryCategoryList  key={m[k].id} items={m[k]}  onDelete={props.onDelete} onReduce={props.onReduce} updateItem={props.updateItem} />
                    )
                })}
                {/* <InventoryCategoryList items={props.dummyInv} onDelete={props.onDelete} onReduce={props.onReduce} /> */}
            </div>
            {/* <NavBar selectedTab={"Inventory"} /> */}
        </div>



    )
}

export default InventoryRefrigerator