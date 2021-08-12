//React
import React from "react";
import NavBar from "../components/NavBar/NavBar.js";

const LayoutPrimary = ({ children }) => {
  return (
    <div>
      <NavBar />
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

export default LayoutPrimary;
