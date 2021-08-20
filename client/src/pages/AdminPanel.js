import React from "react";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const AdminPanel = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <Layout>
      <div className="admin_container">
        <NavLink to="/create" refresh="true" style={{ textDecoration: "none" }}>
          <h3>Post New Product</h3>
        </NavLink>
        <h3>Users</h3>
        <NavLink
          to="/"
          refresh="true"
          style={{ textDecoration: "none" }}
        ></NavLink>
      </div>
    </Layout>
  );
};

export default AdminPanel;
