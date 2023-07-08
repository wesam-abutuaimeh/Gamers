import React, { Component } from "react";
import Logo from "../../components/Logo";
import Quote from "../../components/Quotes";
import Picture from "../../components/Picture";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import OrLine from "../../components/OrLine";
import "./style.css";

class SignIn extends Component {

    render() {
        return <div className="sign__in__container">
            <div className="left__side" >
                <Logo>
                    <img src="/assets/sign__in__logo.svg" alt="" />
                </Logo>
                <Quote color="#696F79" fontStyle="itilac" signatureColor="#696F79" />
                <img src="/assets/sign_in_img.png" alt="SignImage" className="sign_in_img" />
            </div >
            <div className="right__side"><div className="registration__area">
                <h1>Join the game!!</h1>
                <p> Go inside the best gamers social network! </p>
                <div className="social__media__links__container">
                    <a className="social__media__link" href=" ">
                        <Picture src="/assets/flat-color-icons_google.png" alt="google" />
                    </a>
                    <a className="social__media__link" href=" ">
                        <Picture src="/assets/logos_twitter.png" alt="twitter" />
                    </a>
                    <a className="social__media__link" href=" ">
                        <Picture src="/assets/cib_linkedin-in.png" alt="linkedin" />
                    </a>
                    <a className="social__media__link" href=" ">
                        <Picture src="/assets/ant-design_github-filled.png" alt="Github" />
                    </a>
                </div>
                <OrLine />
                <form action="#">
                    <InputField htmlFor="email" title="Your email" type="email" placeholder="Write your email" required={true} id="email" className="email" />
                    <InputField htmlFor="create__password" title="Enter your password*" type="password" placeholder="•••••••••" required={true} id="create__password"
                        className="create__password" />
                    <Button type="submit" class="login__btn" bgcolor="#1565D8" color="#fff" > Login </Button>
                </form>
                <div className="exist__account">Don’t have an account? <a href=" ">Register</a></div>
            </div>
            </div>
        </div >
    }
}

export default SignIn;
