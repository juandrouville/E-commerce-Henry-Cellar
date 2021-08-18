//React
import React from "react";
import NuevaNavBar from "../components/nuevaNavBar/nuevaNavBar"

const LayoutPrimary = ({ children }) => {
  return (
    <div>
      <NuevaNavBar/>
     
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

export default LayoutPrimary;
