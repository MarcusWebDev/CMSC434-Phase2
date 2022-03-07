import React from "react";
import "./Button.css";

function Button({color, icon, text}) {
    return (
        <div className="buttonContainer" style={{background: color}}>
            <img src={require("../icons/library_books_24px_rounded.svg")} style={{width: "50px"}}/>
            {text}
        </div>
    );
}

export default Button;