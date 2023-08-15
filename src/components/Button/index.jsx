import React from "react";
import "./style.css";

const Button = ({ type, className, bgcolor, color, shadow, onClick, children, }) => {
    return <button type={type} className={className} style={{ backgroundColor: bgcolor, color: color, boxShadow: shadow }} onClick={onClick}>
        {children}
    </button>
}

export default Button;
