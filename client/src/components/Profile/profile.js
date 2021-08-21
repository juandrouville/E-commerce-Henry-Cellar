import React from "react";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, given_name, family_name, picture, email } = user;
  console.log(user)
  return (
    <Layout>
    <div className="all_products_container">
      <div className="profile">
        <div>
          <img
            src={picture}
            alt="Profile"
            className="imgProfile"
          />
        </div>
        <div className="profileData">
          <h2 className="h3Profile">{name}</h2>
          <h3 className="h3Profile">Nombre: {given_name}</h3>
          <h3 className="h3Profile">Apellido: {family_name}</h3>
          <p className="h3Profile">E-mail: {email}</p>
          <p className="h3Profile">Address: </p>
          <p className="h3Profile">Phone Number: </p>
        </div>
      </div>
      {/* <div >
        <pre >
          {JSON.stringify(user, null, 2)}
        </pre>
      </div> */}
      
    </div>
    </Layout>
  );
};

export default Profile;
