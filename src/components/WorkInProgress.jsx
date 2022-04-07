import React from 'react'
import './WorkInProgress.css'
import { Link } from "react-router-dom";
import wrench from '../icons/wrenchIcon.png'
import NavBar from './NavBar';

const WorkInProgress = () => {
  return (
    <div className='WorkPage'>
        <Link to="/" className="link" >
                            <div className="backButtonContainer3">
                                <img src={require("../icons/backArrowBlue.png")} className="backButtonArrow"/>
                                <p className="blueText displayInlineBlock">Back</p>
                            </div>
                            </Link>
                            <div><img className='wrenchico' src={wrench} />
                            <h3 className='wrenchhead'>Under Construction</h3></div>      
        <NavBar />
        </div>
  )
}

export default WorkInProgress