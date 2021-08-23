import React from "react";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const AdminPanel = () => {
  const { user } = useAuth0();
  
  return (
    <Layout>
      <div><Toaster/></div>
      <div className="admin_container">
        <NavLink to="/admin/products">
          <h3>Products</h3>
        </NavLink>
        <NavLink to="/admin/create" refresh="true" style={{ textDecoration: "none" }}>
          <h3>Post New Product</h3>
        </NavLink>
        <NavLink to="/admin/orders" refresh="true" style={{ textDecoration: "none" }}>
          <h3>Orders</h3>
        </NavLink>
        <NavLink
          to="/admin/users"
          refresh="true"
          style={{ textDecoration: "none" }}
        ><h3>Users</h3></NavLink>
      </div>
    </Layout>
  );
};

export default AdminPanel;
