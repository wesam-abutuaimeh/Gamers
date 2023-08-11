import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Quote from "../../components/Quotes";
import Button from "../../components/Button";
import Picture from "../../components/Picture";
import OrLine from "../../components/OrLine";
import { useAuthContext } from "../../contexts/AuthContext";
import { END_POINTS } from "../../constant/auth";
import { PATHS } from "../../router/PATHS";
import { registrationSchema } from "../../constant/authFormsValidation";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

function SignUp(props) {
    let [isStrongPassword, setIsStrongPassword] = useState(false);
    const { handleAUTHENTICATE, isLoading } = useAuthContext();

    const handleChangePassword = (e) => {
        const regex =
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$/;
        const password = e.target.value;
        setIsStrongPassword(regex.test(password));
        const warningMsg = document.querySelector(".text");
        const processBar = document.querySelector(".process__bar");

        if (isStrongPassword) {
            warningMsg.innerHTML = "Strong Password";
            processBar.style.cssText = "width: 100%; background-color: #1565D8;";
            warningMsg.style.cssText = "color: #1565D8;";
        } else if (password.length === 0) {
            warningMsg.innerHTML = "Please Write a password";
            processBar.style.cssText = "width: 10%; background-color: #ffc107;";
            warningMsg.style.cssText = "color: #ffc107;";
        } else if (password.length < 8) {
            warningMsg.innerHTML = "I'm sorry, but it's a weak password";
            processBar.style.cssText = "width: 30%; background-color: #ffc107;";
            warningMsg.style.cssText = "color: #ffc107;";
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registrationSchema),
    });
    const onSubmit = async (data) => {
        handleAUTHENTICATE(END_POINTS.SIGNUP, data);
    };

    return (
        <div className="sign__up__container">
            <div className="left__side">
                <Picture
                    src="/assets/dots.png"
                    alt="dots shape"
                    pictureClassName="dots__shape"
                />
                <Picture
                    src="/assets/circle__shape.png"
                    alt="circle shape"
                    pictureClassName="circle__shape"
                />

                <Logo>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="53"
                        height="57"
                        viewBox="0 0 53 57"
                        fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M36.3693 19.4904C33.9261 24.5722 28.7297 28.08 22.7141 28.08C14.351 28.08 7.57132 21.3004 7.57132 12.9373C7.57132 7.45807 10.4814 2.65854 14.8404 0C6.3926 1.58395 0 8.99844 0 17.906C0 27.9679 8.15675 36.1246 18.2186 36.1246C27.7467 36.1246 35.5664 28.8104 36.3693 19.4904Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M43.7707 42.0109C39.3658 45.5307 33.1624 46.4385 27.7417 43.8302C20.2056 40.2041 17.036 31.1553 20.6621 23.6192C23.0378 18.6818 27.7412 15.6187 32.8218 15.113C24.5226 12.8775 15.5473 16.787 11.685 24.8137C7.32234 33.8806 11.1358 44.7674 20.2027 49.1301C28.7884 53.2613 39.0061 50.061 43.7707 42.0109Z"
                            fill="white"
                        />
                    </svg>
                </Logo>
                <Quote color="#FFF" fontStyle="normal" />
            </div>
            <div className="right__side">
                <Link to={PATHS.Auth.SIGNIN} className="back">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z"
                            fill="#8692A6"
                        />
                    </svg>
                    Back
                </Link>

                <div className="registration__area">
                    <h1>Register Individual Account!</h1>
                    <p>For the purpose of gamers regulation, your details are r</p>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="username">Username*</label>
                        <input type="text" placeholder="Enter username" id="username" className="username" {...register("name")} />
                        {errors.name && <span className="error__msg">{errors.name.message}</span>}

                        <label htmlFor="email">Email Address*</label>
                        <input type="email" placeholder="Enter email address" id="email" className="email" {...register("email")} />
                        {errors.email && <span className="error__msg">{errors.email.message}</span>}

                        <label htmlFor="phone__number">Phone Number*</label>
                        <input type="text" placeholder="970 598-844-683" id="phone__number" className="phone__number" {...register("phoneNumber")} />
                        {errors.phoneNumber && <span className="error__msg">{errors.phoneNumber.message}</span>}

                        <label htmlFor="create__password">Create Password*</label>
                        <div className="password">
                            <input type="password" placeholder="password" id="create__password" className="create__password" onChange={handleChangePassword} {...register("password")} />
                            <div>
                                <div className="process">
                                    <div className="process__bar"></div>
                                </div>
                                <div className="text">
                                    You Must Write a Strong Password For Security, Please!
                                </div>
                            </div>
                        </div>
                        {errors.password && <span className="error__msg">{errors.password.message}</span>}

                        <label htmlFor="repeat__password">Repeat password</label>
                        <input type="password" placeholder="Repeat password" id="repeat__password" className="repeat__password" />

                        <div>
                            <input
                                type="checkbox"
                                id="agreement"
                                className="agreement"
                                required
                                {...register("agreement")}
                            />
                            <label htmlFor="agreement" className="agreement__label">
                                I agree to terms &amp; conditions
                            </label>
                        </div>
                        {errors.agreement && <span className="error__msg">{errors.agreement.message}</span>}

                        <Button type="submit" componentClassName="register__btn" bgcolor="#1565D8" color="#fff">
                            {isLoading ? "Loading ..." : "Register Account"}
                        </Button>
                    </form>
                    <OrLine />

                    <button className="login__btn">
                        <Link to={PATHS.Auth.SIGNIN}>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
/*componentClassName="login__btn" bgcolor="#fff" color="#000" shadow="0px 4px 10px 0px rgba(0, 0, 0, 0.08)"*/
