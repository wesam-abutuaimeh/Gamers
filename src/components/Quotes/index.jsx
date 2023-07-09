import { Component } from "react";
import Picture from "../Picture";
import "./style.css";

class Quote extends Component {
    render() {
        const { color, fontStyle, signatureColor } = this.props;
        return <div className="quote__body">
            <Picture src="/assets/“.png" alt="''" />
            <div className="quote" style={{ color: color, fontStyle: fontStyle }}>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
                </svg>
            </div>
            <span className="signature" style={{ color: signatureColor }}>Hideo Kojima</span>
        </div>;
    }
}

export default Quote;
