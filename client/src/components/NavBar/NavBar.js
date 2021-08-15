//React
import React, { useState } from "react";
//COMPONENTS
import SearchBar from "../SearchBar/SearchBar";
import cart2 from "../../assets/images/cart2.png";
import { NavLink } from "react-router-dom";

//ICON
import home1 from "assets/icons/logo-wine.png";

//Authentication with Auth0
import AuthNav from "../auth-Nav/auth-nav";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  //Este estado es para el menu mobile
  const [activo, setActivo] = useState(false);
  //Estos son los span del menu mobile que cambian
  const toggleMenu = () => {
    setActivo(!activo);
  };

  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  return (
    // Your menu here 👇🏻
    <div className={activo ? "menu menu--activo" : "menu"} id="navbar">
      <div className="example">
        <NavLink
          to="/catalog"
          refresh="true"
          className="wine"
          style={{ textDecoration: "none" }}
        >
          <h1>Henry Cellar</h1>
          <img src={home1} alt="winelogo" width="50" height="50" />
        </NavLink>
        <button
          className={activo ? "menu__icon menu__icon--activo" : "menu__icon"}
          type="button"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="item">
        <AuthNav />
        {isAuthenticated &&
        (user.sub === "google-oauth2|102669847324725021364" ||
          user.sub === "google-oauth2|109028710743016612481" ||
          user.sub === "google-oauth2|110496112430074927748") ? (
          <>
            <NavLink
              to="/create"
              refresh="true"
              style={{ textDecoration: "none" }}
            >
              <h3>PostForm</h3>
            </NavLink>
          </>
        ) : null}
      </div>

      <NavLink
        className="item"
        to="/mycart"
        refresh="true"
        style={{ textDecoration: "none" }}
      >
        <img src={cart2} alt="cartlogo" width="40" height="40" />
        <h3>Cart</h3>
      </NavLink>

      <div className="nav__items item">
        <SearchBar />
      </div>
      <div
        className={
          activo ? "menu__content menu__content--activo" : "menu__content "
        }
      >
        <div className="menu__list">
          <div className="item">
            <AuthNav />
            {isAuthenticated &&
            (user.sub === "google-oauth2|102669847324725021364" ||
              user.sub === "google-oauth2|109028710743016612481" ||
              user.sub === "google-oauth2|110496112430074927748") ? (
              <>
                <NavLink
                  to="/create"
                  refresh="true"
                  style={{ textDecoration: "none" }}
                >
                  <h3>PostForm</h3>
                </NavLink>
              </>
            ) : null}
          </div>

          <NavLink
            className="item"
            to="/mycart"
            refresh="true"
            style={{ textDecoration: "none" }}
          >
            <img src={cart2} alt="cartlogo" width="40" height="40" />
            <h3>Cart</h3>
          </NavLink>
          <div className="nav__items item">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
