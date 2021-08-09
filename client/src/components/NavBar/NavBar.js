import SearchBar from "../SearchBar/SearchBar";
import cart2 from "../../assets/images/cart2.png";
import { NavLink } from "react-router-dom";
import home1 from "assets/icons/logo-wine.png";

//Authentication with Auth0
import React from "react";
import AuthNav from "../auth-Nav/auth-nav";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  return (
    // Your menu here 👇🏻
    <div className="nav-bar">
      <div className="nav__brand">
        <NavLink
          to="/"
          refresh="true"
          className="wine"
          style={{ textDecoration: "none" }}
        >
          <h1>Henry Cellar</h1>
          <img src={home1} alt="winelogo" width="50" height="50" />
        </NavLink>
        <AuthNav />
      <NavLink to="/mycart" refresh="true" style={{ textDecoration: "none" }}>
          <img src={cart2} alt="cartlogo" width="40" height="40" />
          <h3>Cart</h3>
        </NavLink>
        {isAuthenticated &&
        user.sub === "google-oauth2|102669847324725021364" ? (

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
        <div className="nav__items">
          {" "}
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
