import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { clearUser } from "actions";
import * as BiIcons from "react-icons/bi";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();
  return (
    <li className="li">

      
      <button className="li"
        onClick={() => {
          dispatch(clearUser());
          logout({
            returnTo: window.location.origin,
          });
        }}
      >
        <BiIcons.BiLogOut className="svglogin"/>Log Out
      </button>

    </li>
  );
};

export default LogoutButton;
