import React from "react";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { useSelector } from "react-redux";
import FinalizarCompra from "../Compra/finalcompra";

const Profile = () => {
  const { user } = useAuth0();
  const userData = useSelector((state) => state.user.dataValues);

  return (
    <Layout>
      <div className="page_profile">
        <div className="conatiner_profile">
          <div className="image_data">
            <img src={userData.image} alt="Profile" className="imgProfile" />
            <div className="profileData">
              <h2 className="h3Profile">{userData.userName}</h2>
              <h3 className="h3Profile">Name: {userData.firstName}</h3>
              <h3 className="h3Profile">Last Name: {userData.lastName}</h3>
              <p className="h3Profile">E-mail: {userData.email}</p>
              <p className="h3Profile">Address: {userData.calle}</p>
              <p className="h3Profile">Number: {userData.numero}</p>
              <p className="h3Profile">City: {userData.localidad}</p>
              <p className="h3Profile">State: {userData.provincia}</p>
              <p className="h3Profile">Zip Code: {userData.codigopostal}</p>
              <p className="h3Profile">Phone Number: {userData.phone}</p>
            </div>
          </div>
            <FinalizarCompra className="add_data"/>
        </div>
      </div>
    </Layout>
  );
};
        
          

export default Profile;
