import { useEffect, useState } from "react";
import "boxicons";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { SideBarData } from "../sidebarData/sidebarData";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import SearchBar from "../SearchBar/SearchBar";
import AuthNav from "../auth-Nav/auth-nav";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";


const NuevaNavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const userData = useSelector((state) => state.user);
  useEffect(() => {}, [userData]);

  return (
    <div className="fixed">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="newNav">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {isAuthenticated && userData ? (
            <h3 className="welcome">
              <Avatar src={userData.dataValues.image}/>
              <pre>  </pre>
              Welcome,
              <NavLink
                to="/Profile"
                refresh="true"
                style={{ textDecoration: "none" }}
              >
                <p style={{ color: "#ffffff" }}>
                  {" "}
                  {user.given_name} <CgProfile />
                </p>
              </NavLink>
            </h3>
          ) : null}
          <SearchBar />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="button-text">
              <Link>
                <AuthNav />
              </Link>
            </li>
            <li className="nav-text">
              {isAuthenticated && userData && userData.dataValues.admin ? (
                <NavLink to="/admin/products" refresh="true">
                  <RiIcons.RiAdminLine />
                  <h3 className="h3">AdminPanel</h3>
                </NavLink>
              ) : null}
            </li>
            <li className="nav-text">
              {isAuthenticated ? (
                <NavLink to="/prueba" refresh="true">
                  <AiIcons.AiOutlineHistory />
                  <h3 className="h3">My Shopping</h3>
                </NavLink>
              ) : null}
            </li>
            <li className="nav-text">
              <NavLink to="/aboutUs" refresh="true">
                <FcAbout />
                <h3 className="h3">About Us</h3>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="/ContactUs" refresh="true">
                <AiOutlineMail />
                <h3 className="h3">Contact Us</h3>
              </NavLink>
            </li>
            <li className="nav-text">
              <a href="https://www.instagram.com/henrycellar/" target="instagram">
                <GrInstagram />
                
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default NuevaNavBar;
