import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { clearUser } from "actions";

const LogoutButton = () => {

  const dispatch=useDispatch()
  const { logout } = useAuth0();
  return (
    <button
      
      onClick={() =>{
        dispatch(clearUser())
        logout({
          returnTo: window.location.origin,
        })}
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;