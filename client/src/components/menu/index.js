import SearchBar from "../SearchBar/SearchBar";
import Home from "../../assets/images/Home.png";
import cart2 from "../../assets/images/cart2.png";
import contact from "../../assets/images/contact.png";
import search from "../../assets/images/search.png";
import login from "../../assets/images/login.png";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    // Your menu here 👇🏻
    <div className="menu-left">
      <div>
        <NavLink to="/" refresh="true">
          <img src={Home} alt="winelogo" />
        </NavLink>
      </div>
      <div className="menu-right">
        <NavLink to="/contact" refresh="true">
          <img src={contact} alt="contactlogo" />
          <h3>Contact</h3>
        </NavLink>
        <NavLink to="/mycart" refresh="true">
          <img src={cart2} alt="cartlogo" />
          <h3>Cart</h3>
        </NavLink>
        <NavLink to="/login" refresh="true">
          <img src={login} alt="loginlogo" />
          <h3>Log in</h3>
        </NavLink>
        <SearchBar />
        <img src={search} alt="searchlogo" />
      </div>
    </div>
  );
};

export default Menu;
