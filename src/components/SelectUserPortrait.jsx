import React, {useState} from "react";
import "./SelectUserPortrait.css";

function SelectUserPortrait({name, picture, defaultState}) {
    const [clicked, setClicked] = useState(defaultState);

    return (
        <div className="selectUserPortraitContainer">
            <img className={`selectUserPortrait ${clicked ? "selectUserSelected" : null}`} src={picture} onClick={() => setClicked(!clicked)} />
            <p className={clicked ? "selectUserLessTopMargin" : null}>{name}</p>
        </div>
    );
}

export default SelectUserPortrait;