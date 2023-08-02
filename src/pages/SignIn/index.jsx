import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Quote from "../../components/Quotes";
import Picture from "../../components/Picture";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import OrLine from "../../components/OrLine";
import "./style.css";

function SignIn() {
    return (
        <div className="sign__in__container">
            <div className="left__side">
                <Logo>
                    <Picture src="/assets/sign__in__logo.svg" alt="sigin logo" />
                </Logo>
                <Quote color="#696F79" fontStyle="itilac" signatureColor="#696F79" />
                <Picture src="/assets/sign_in_img.png" alt="sigin mage" pictureClassName="sign_in_img" />
            </div>
            <div className="right__side">
                <div className="registration__area">
                    <h1>Join the game!!</h1>
                    <p> Go inside the best gamers social network! </p>
                    <div className="social__media__links__container">
                        <Link className="social__media__link" to="https://google.com">
                            <Picture src="/assets/flat-color-icons_google.png" alt="google" />
                        </Link>
                        <Link className="social__media__link" to="https://google.com">
                            <Picture src="/assets/logos_twitter.png" alt="twitter" />
                        </Link>
                        <Link className="social__media__link" to="https://google.com">
                            <Picture src="/assets/cib_linkedin-in.png" alt="linkedin" />
                        </Link>
                        <Link className="social__media__link" to="https://google.com">
                            <Picture src="/assets/ant-design_github-filled.png" alt="Github" />
                        </Link>
                    </div>
                    <OrLine />
                    <form action="#">
                        <InputField htmlFor="email" title="Your email" type="email"
                            placeholder="Write your email" required={true} id="email" className="email" />
                        <InputField htmlFor="create__password" title="Enter your password*" type="password"
                            placeholder="•••••••••" required={true} id="create__password" className="create__password" />
                        <Button type="submit" componentClassName="login__btn" bgcolor="#1565D8" color="#fff">Login</Button>
                    </form>
                    <div className="exist__account">Don’t have an account? <Link to="/signup">Register</Link></div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
