import React from "react";
import "./Button.css";

function Button({color, icon, text}) {
    return (
        <div className="buttonContainer" style={{background: color}}>
            <img src={icon} />
            <p className="buttonText">{text}</p>
        </div>
    );
}

export default Button;