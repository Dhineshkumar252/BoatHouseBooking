import React, { useState } from "react";
import './Registration.css';

function Registration() {
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    const handleToggle = () => {
        setIsSignUpActive((prevIsSignUpActive) => !prevIsSignUpActive);
    };

    return (
        <>
            <div>
                <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
                    <div className="form-container sign-up">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form>
                            <h1>Sign In</h1>
                            <div className="social-icons">
                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email password</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forget Your Password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className={`toggle ${isSignUpActive ? 'right-panel-active' : ''}`}>
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your login details</p>
                                <button onClick={handleToggle} className="hidden" id="login">Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details</p>
                                <button onClick={handleToggle} className="hidden" id="register">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Registration;