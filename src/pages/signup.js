import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="auth-btn">Sign Up</button>
        </form>

        <p className="auth-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
