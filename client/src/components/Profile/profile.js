import React from "react";

import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user } = useAuth0();
  const { name, given_name, family_name, picture, email } = user;

  return (
    <div>
      <div >
        <div >
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div >
          <h2>{name}</h2>
          <h3>Nombre: {given_name}</h3>
          <h3>Apellido: {family_name}</h3>
          <p >E-mail: {email}</p>
          
        </div>
      </div>
      {/* <div >
        <pre >
          {JSON.stringify(user, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default Profile;