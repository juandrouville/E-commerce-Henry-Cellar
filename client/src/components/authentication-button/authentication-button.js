import React from "react";

import LoginButton from "../login/login.js";
import LogoutButton from "../logout/logout.js";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <div>
      <LogoutButton />{" "} 
    </div>
  ) : (
    <LoginButton />
  );
};

export default AuthenticationButton;
