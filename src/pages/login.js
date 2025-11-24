import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Welcome Back</h2>

                <form>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />

                    <button className="auth-btn">Login</button>
                </form>

                <p className="auth-text">
                    Don’t have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
