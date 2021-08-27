import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import * as MdIcons from "react-icons/md";
// import * as BiIcons from "react-icons/bi";

export const SideBarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Cart",
    path: "/mycart",
    icon: <IoIcons.IoIosCart />,
    cName: "nav-text"
  }
  // {
  //     title: "Fav",
  //     path: "/favourite",
  //     icon: <MdIcons.MdFavorite />,
  //     cName: "nav-text"
  // },
];
