import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Quote from "../../components/Quotes";
import Picture from "../../components/Picture";
import Button from "../../components/Button";
import OrLine from "../../components/OrLine";
import Alert from "../../components/Alert"
import { useAuthContext } from "../../contexts/AuthContext";
import { END_POINTS } from "../../constants/auth";
import { signinSchema } from "../../constants/authFormsValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { INPUTS } from "../../constants/loginInputs";
import { socailMediaLinks } from "../../constants/socailMediaLinks";
import "./style.css";

function SignIn() {
    const { handleAUTHENTICATE, isLoading, showAuthAlert } = useAuthContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signinSchema),
    });

    const onSubmit = async (data) => {
        await handleAUTHENTICATE(END_POINTS.LOGIN, data)
    };

    return (
        <div className="sign__in__container">
            {showAuthAlert && <Alert alert="Error !" alertBody="Sorry, there seems to be an issue with the information you provided. Please double-check your username and password and ensure that they are entered correctly" />}
            <div className="left__side">
                <Logo><Picture src="/assets/sign__in__logo.svg" alt="signin logo" /></Logo>
                <Quote color="#696F79" fontStyle="italic" signatureColor="#696F79" />
                <Picture src="/assets/sign_in_img.png" alt="signin image" pictureClassName="sign_in_img" />
            </div>
            <div className="right__side">
                <div className="registration__area">
                    <h1>Join the game!!</h1>
                    <p>Go inside the best gamers social network!</p>
                    <div className="social__media__links__container">
                        {socailMediaLinks.map((link) => {
                            return <a key={link.id} className={link.class} href={link.href} target={link.target} rel={link.rel} >
                                <Picture src={link.src} alt={link.title} />
                            </a>
                        })}
                    </div>
                    <OrLine />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {INPUTS.map((input) => {
                            return (
                                <div key={input.id} className="input__container">
                                    <label htmlFor={input.id}>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} id={input.id} className={input.class} {...register(input.type)} />
                                    {errors[input["type"]] && <span className="error__msg">{errors[input["type"]].message}</span>}
                                </div>
                            );
                        })}
                        <Button type="submit" class="login__btn" bgcolor="#1565D8" color="#fff">
                            {isLoading ? "isLoading..." : "Login"}
                        </Button>
                    </form>
                    <div className="exist__account">
                        Don’t have an account? <Link to="/">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignIn;
