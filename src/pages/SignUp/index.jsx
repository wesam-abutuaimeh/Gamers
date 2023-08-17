import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Quote from "../../components/Quotes";
import Button from "../../components/Button";
import Picture from "../../components/Picture";
import OrLine from "../../components/OrLine";
import { useAuthContext } from "../../contexts/AuthContext";
import { END_POINTS } from "../../constants/auth";
import { PATHS } from "../../router/PATHS";
import { registrationSchema } from "../../constants/authFormsValidation";
import { INPUTS } from "../../constants/signupInputs";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

function SignUp(props) {
    const { handleAUTHENTICATE, isLoading } = useAuthContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registrationSchema),
    });
    const onSubmit = async (data) => {
        handleAUTHENTICATE(END_POINTS.SIGNUP, data);
        console.log(data);
        console.log('din');
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
                        {INPUTS.map((input) => {
                            return <div key={input.id} className="input__container">
                                <label htmlFor={input.id}>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder} id={input.id} className={input.class} {...register(input.name)} />
                                {errors[input["type"]] && <span className="error__msg">{errors[input["type"]].message}</span>}
                            </div>
                        })}
                        <div>
                            <input type="checkbox" id="agreement" className="agreement" required {...register("agreement")} />
                            <label htmlFor="agreement" className="agreement__label">
                                I agree to terms &amp; conditions
                            </label>
                        </div>
                        {errors.agreement && <span className="error__msg">{errors.agreement.message}</span>}

                        <Button type="submit" class="register__btn" bgcolor="#1565D8" color="#fff">
                            {isLoading ? "Loading ..." : "Register Account"}
                        </Button>
                    </form>
                    <OrLine />
                    <Button class="login__btn">
                        <Link to={PATHS.Auth.SIGNIN}>Login</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
