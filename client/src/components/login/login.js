import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as BiIcons from "react-icons/bi";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <li className="li">
      
      <BiIcons.BiLogIn />
      <button  onClick={() => loginWithRedirect()}>
        Log In
      </button>
      
    </li>
  );
};

export default LoginButton;
