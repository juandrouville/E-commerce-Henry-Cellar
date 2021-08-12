import React from "react";
import AuthenticationButton from "../authentication-button/authentication-button.js";
import LoginImage from "assets/images/login.png";

const AuthNav = () => (
  <div className="auth__nav">
    <img src={LoginImage} alt="Wine" width="20" height="30" />
    <AuthenticationButton />
  </div>
);

export default AuthNav;
