import React from "react";
import "./style.css";

const Button = ({ type, componentClassName, bgcolor, color, shadow, onClick, children, }) => {
    return <button type={type} className={componentClassName} style={{ backgroundColor: bgcolor, color: color, boxShadow: shadow }} onClick={onClick}>
        {children}
    </button>
}

export default Button;
