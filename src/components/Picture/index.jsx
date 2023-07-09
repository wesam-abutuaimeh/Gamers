import React, { Component } from "react";

class Picture extends Component {
    render() {
        const { src, alt, pictureClassName } = this.props;
        return (<img src={src} alt={alt} className={pictureClassName} />);
    }
}

export default Picture;
