import { Component } from "react";
import "./style.css"

class Button extends Component {
    render() {
        return (<button type={this.props.type} className={this.props.class} style={{ backgroundColor: this.props.bgcolor, color: this.props.color, boxShadow: this.props.shadow }}
            onClick={this.props.onClick}>
            {this.props.children}
        </button>);
    }
}

export default Button;
