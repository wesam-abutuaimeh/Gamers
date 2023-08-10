import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Quote from "../../components/Quotes";
import Picture from "../../components/Picture";
import Button from "../../components/Button";
import OrLine from "../../components/OrLine";
import { useAuthContext } from "../../contexts/AuthContext";
import { END_POINTS } from "../../constant/auth";
import { signinSchema } from "../../constant/authFormsValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

function SignIn() {
    const { handleAUTHENTICATE, isLoading } = useAuthContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signinSchema),
    });

    const onSubmit = async (data) => {
        handleAUTHENTICATE(END_POINTS.LOGIN, data)
    };

    return (
        <div className="sign__in__container">
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
                        <a className="social__media__link" href="https://google.com" target="_blank" rel="noopener noreferrer" >
                            <Picture src="/assets/flat-color-icons_google.png" alt="Google" />
                        </a>
                        <a className="social__media__link" href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
                            <Picture src="/assets/logos_twitter.png" alt="Twitter" />
                        </a>
                        <a className="social__media__link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
                            <Picture src="/assets/cib_linkedin-in.png" alt="LinkedIn" />
                        </a>
                        <a className="social__media__link" href="https://github.com" target="_blank" rel="noopener noreferrer" >
                            <Picture src="/assets/ant-design_github-filled.png" alt="Github" />
                        </a>
                    </div>
                    <OrLine />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Your email</label>
                        <input type="email" placeholder="Write your email" id="email" className="email" {...register("email")} />
                        {errors.email && <span className="error__msg">{errors.email.message}</span>}

                        <label htmlFor="password">Enter your password*</label>
                        <input type="password" placeholder="•••••••••" id="create__password" className="create__password" {...register("password")} />
                        {errors.password && <span className="error__msg">{errors.password.message} </span>}

                        <Button type="submit" componentClassName="login__btn" bgcolor="#1565D8" color="#fff" >
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
