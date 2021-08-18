import react from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr"

export const SideBarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "PostForm",
        path: "/create",
        icon: <IoIcons.IoIosCreate />,
        cName: "nav-text"
    },
    {
        title: "Cart",
        path: "/mycart",
        icon: <IoIcons.IoIosCart />,
        cName: "nav-text"
    },
    {
        title: "Fav",
        path: "/favourite",
        icon: <GrIcons.GrFavorite />,
        cName: "nav-text"
    },
]