import React from "react";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";
import { Link , NavLink } from "react-router-dom";
import { getDbOrder } from "../../actions";
import { useSelector , useDispatch } from "react-redux";
import * as AiIcons from "react-icons/ai";
import AuthNav from '../auth-Nav/auth-nav';
import * as IoIcons from "react-icons/io";


const Profile = () => {
  const { user } = useAuth0();
  const userData = useSelector((state) => state.user.dataValues);
  const dispatch = useDispatch();
  const historyUser = (id) => {
    dispatch(getDbOrder(id));
  };

  return (
    <Layout>
      <div className="page_profile">
        <div className="conatiner_profile">
          <div className="image_data">
            <img src={userData.image} alt="Profile" className="imgProfile" />
            <div className="profileData">
              <h2>{userData.firstName} {userData.lastName}</h2>
              <p>@{userData.userName}</p>
              <br/>
              <p>E-mail: {userData.email}</p>
              {userData.adress !== "Unknown" && (
                <div className="user_Adress">
                <p>Address: {userData.adress}</p>
              </div>
              )}
            </div>
          </div>
              <div className="optionsUser">
                <Link to={`/mycart`} className="btn_myCart">
                  <IoIcons.IoIosCart size={20} />
                  <h3>My Cart </h3>
                </Link>
                <NavLink to="/prueba" refresh="true" className="btn_history">
                  <button
                    className="btn_logueo" 
                    onClick={() => historyUser(userData.dataValues.id)}>
                    <AiIcons.AiOutlineHistory size={20} />
                    <h3>My Shopping</h3>
                  </button>
                </NavLink>
                <AuthNav />
              </div>
        </div>
      </div>
    </Layout>
  );
};
        
          

export default Profile;
