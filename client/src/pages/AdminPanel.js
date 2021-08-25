import React from "react";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const AdminPanel = () => {
  const { user } = useAuth0();
  
  return (
    <Layout>
      <div><Toaster/></div>
      <div className="admin_container">
       <DisabledTabs/>
      </div>
    </Layout>
  );
};

function DisabledTabs() {
  const [value, setValue] = React.useState("products");
  const history=useHistory()
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/admin/${newValue}`)
  };


  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Products" value="products"/>
        <Tab label="Add Product" value="create"/>
        <Tab label="Orders" value="orders"/>
        <Tab label="Users" value="users"/>
      </Tabs>
    </Paper>
  );
}
export default AdminPanel;




 
