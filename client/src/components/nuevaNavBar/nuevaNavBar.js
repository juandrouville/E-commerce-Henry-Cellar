import react, { useState } from "react";
import 'boxicons';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { SideBarData } from "../sidebarData/sidebarData"
import { IconContext } from "react-icons";
import SearchBar from "../SearchBar/SearchBar";
import AuthNav from "../auth-Nav/auth-nav";

const NuevaNavBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            
            <div className="newNav">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
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
                        
                        )
                    })}
                    <AuthNav />
                </ul>
                <h2>contactUS</h2>
            </nav>
        </IconContext.Provider>
        </>
    );
};

export default NuevaNavBar;