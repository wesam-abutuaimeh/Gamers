import React, { Component } from "react";
import Logo from "../../components/Logo";
import Quote from "../../components/Quotes";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "./style.css";
import OrLine from "../../components/OrLine";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordVal: "",
        };
    }

    handleChangePassword = (e) => {
        const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|]).{8,32}$/;
        const password = e.target.value;
        this.setState({ passwordVal: password }, () => {
            const isValidPassword = regex.test(password);
            console.log(isValidPassword ? 'Valid password' : 'Invalid password'); // TODO reomve
        });
    }

    render() {
        return <div className="sign__up__container">
            <div className="left__side" >
                <img src="/assets/dots.png" alt="dots shape" className="dots__shape" />
                <img src="/assets/circle__shape.png" alt="circle shape" className="circle__shape" />
                <Logo>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="57" viewBox="0 0 53 57" fill="none">
                        <path filerule="evenodd" clipRule="evenodd" d="M36.3693 19.4904C33.9261 24.5722 28.7297 28.08 22.7141 28.08C14.351 28.08 7.57132 21.3004 7.57132 12.9373C7.57132 7.45807 10.4814 2.65854 14.8404 -8.14426e-06C6.3926 1.58395 0 8.99844 0 17.906C0 27.9679 8.15675 36.1246 18.2186 36.1246C27.7467 36.1246 35.5664 28.8104 36.3693 19.4904Z" fill="white" />
                        <path filerule="evenodd" clipRule="evenodd" d="M43.7707 42.0109C39.3658 45.5307 33.1624 46.4385 27.7417 43.8302C20.2056 40.2041 17.036 31.1553 20.6621 23.6192C23.0378 18.6818 27.7412 15.6187 32.8218 15.113C24.5226 12.8775 15.5473 16.787 11.685 24.8137C7.32234 33.8806 11.1358 44.7674 20.2027 49.1301C28.7884 53.2613 39.0061 50.061 43.7707 42.0109Z" fill="white" />
                    </svg>
                </Logo>
                <Quote color="#FFF" fontStyle="normal" />
            </div >
            <div className="right__side">
                <a href="
                " className="back">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z" fill="#8692A6" />
                    </svg>
                    Back
                </a>
                <div className="registration__area">
                    <h1>Register Individual Account!</h1>
                    <p> For the purpose of gamers regulation, your details are required. </p>
                    <form action="#">
                        <InputField htmlFor="username" title="Username*" type="text" placeholder="Enter username" required={true} id="username" className="username"
                            onChange={this.handleInputChange} />
                        <InputField htmlFor="email" title="Email Address*" type="email" placeholder="Enter email address" required={true} id="email" className="email" />
                        <InputField htmlFor="phone__number" title="Phone Number*" type="number" placeholder="Enter phone number" required={true} id="phone__number" className="phone__number" />
                        <InputField htmlFor="create__password" title="Create Password*" type="password" placeholder="password" required={true} id="create__password"
                            className="create__password" onChange={this.handleChangePassword} />
                        <InputField htmlFor="repeat__password" title="Repeat password*" type="password" placeholder="Repeat password" required={true} id="repeat__password" className="repeat__password" />
                        <input type="checkbox" id="agreement" className="agreement" required />
                        <label htmlFor="agreement">I agree to terms & conditions</label>
                    </form>
                    <Button type="submit" class="register__btn" bgcolor="#1565D8" color="#fff" > Register Account </Button>
                    <OrLine />
                    <Button class="login__btn" bgcolor="#fff" color="#000" shadow="0px 4px 10px 0px rgba(0, 0, 0, 0.08)">Login</Button>
                </div>
            </div>
        </div >
    }
}

export default SignUp;
