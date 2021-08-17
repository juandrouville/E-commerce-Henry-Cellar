import React from "react";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";


const AdminPanel = () => {
  const { user } = useAuth0();
  console.log(user)
  return (
    <Layout>
    
    </Layout>
  );
};

export default AdminPanel;