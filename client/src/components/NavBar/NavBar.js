import SearchBar from "../SearchBar/SearchBar";
import cart2 from "../../assets/images/cart2.png";
import search from "../../assets/images/search.png";
import login from "../../assets/images/login.png";
import { NavLink } from "react-router-dom";
import home1 from "assets/icons/logo-wine.png";

//Authentication
import React from "react";
import AuthNav from "../auth-Nav/auth-nav";


const NavBar = () => {
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
        <NavLink to="/mycart" refresh="true" style={{ textDecoration: "none" }}>
          <img src={cart2} alt="cartlogo" width="40" height="40" />
          <h3>Cart</h3>
        </NavLink>

        <AuthNav />
        
        <div className="nav__items">
          {" "}
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
