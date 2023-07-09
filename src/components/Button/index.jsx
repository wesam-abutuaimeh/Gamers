import { Component } from "react";
import "./style.css";

class Button extends Component {
    render() {
        const { type, componentClassName, bgcolor, color, shadow, onClick, children, } = this.props;
        return (
            <button type={type} className={componentClassName} style={{ backgroundColor: bgcolor, color: color, boxShadow: shadow }} onClick={onClick}>
                {children}
            </button>
        );
    }
}

export default Button;
