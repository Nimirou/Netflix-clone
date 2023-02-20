import React from "react";
import "./SignInScreen.css";

function SignInScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1 className="signupScreen__title">Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password"></input>
        <button type="submit">Sign In</button>
        <h4>
          <span className="signupScreenGrey">New to NETFLIX?</span>{" "}
          <span className="signupScreen__link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
