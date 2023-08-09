import React from "react";
import "./style.css";

const InputField = ({ id, title, type, value, placeholder, required, className, handlePassword }) => {
    return (
        <div className="input__container">
            <label htmlFor={id}> {title}</label>
            <input type={type}
                id={id}
                value={value}
                required={required}
                placeholder={placeholder}
                onBlur={handlePassword}
                className={className} />
        </div>
    );
}

export default InputField;
