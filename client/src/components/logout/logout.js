import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { clearUser } from "actions";
import * as BiIcons from "react-icons/bi";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();
  return (
    <li>
      <button
        className="li"
        onClick={() => {
          dispatch(clearUser());
          logout({
            returnTo:
              "https://*.vercel.app/home" || "http://localhost:3000/home"
          });
        }}
      >
        <BiIcons.BiLogOut className="svglogin" />
        Log Out
      </button>
    </li>
  );
};

export default LogoutButton;
