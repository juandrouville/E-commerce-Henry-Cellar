import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as BiIcons from "react-icons/bi";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button 
      className="btn_logueo" 
      onClick={() => loginWithRedirect()}>
      <BiIcons.BiLogIn size={20}/>
      <h3>Log In</h3>
    </button>
  );
};

export default LoginButton;
