import { Component } from "react";
import "./style.css"

class Logo extends Component {
    render() {
        return (<div className="logo">{this.props.children} <span>Gamers</span> </div>);
    }
}

export default Logo;
