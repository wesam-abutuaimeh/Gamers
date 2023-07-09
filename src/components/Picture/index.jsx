import React, { Component } from "react";

class Picture extends Component {
    render() {
        const { src, alt } = this.props;
        return (<img src={src} alt={alt} />);
    }
}

export default Picture;
