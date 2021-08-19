import React from "react";

import LoginButton from "../login/login.js";
import LogoutButton from "../logout/logout.js";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  return isAuthenticated ? <div> 
  {/* <p>Bienvenido, 
    <NavLink to="/profile"> {user.given_name}</NavLink>
    </p> */}
  <LogoutButton /> </div>: <LoginButton />;
};

export default AuthenticationButton;