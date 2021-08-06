import React from "react";

import LoginButton from "../login/login.js";
import LogoutButton from "../logout/logout.js";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  return isAuthenticated ? <>
  <p>Hi, {user.name}</p>
  <LogoutButton /> </>: <LoginButton />;
};

export default AuthenticationButton;