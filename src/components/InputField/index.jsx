import React, { Component } from "react";
import "./style.css";

class InputField extends Component {

    render() {
        const { id, title, type, value, placeholder, required, className, handlePassword } = this.props;
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
}
export default InputField;
