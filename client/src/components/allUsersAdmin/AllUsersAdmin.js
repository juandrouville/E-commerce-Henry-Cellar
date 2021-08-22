import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/index";
import Pagination from "components/pagination/pagination";
import LayoutPrimary from "layouts/layout-primary";
import Materialtable from "material-table";
import { forwardRef } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  ArrowDownward: forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
};

function AllUsersAdmin({ users, GetUsers }) {
  
  const columns = [
    // { title: "Id", field: "id" },
    // {
    //   title: "Image",
    //   field: "image",
    //   render: (rowData) => (
    //     <img
    //       src={rowData.image}
    //       alt=""
    //       style={{ width: 40, borderRadius: "50%" }}
    //     />
    //   ),
    // },
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "User Name", field: "userName"},
    { title: "E-mail", field: "email" },
    { title: "Admin", field: "admin" },
    { title: "Subscribed", field: "subscribed" },
    { title: "Blocked", field: "blocked" },
];    

  useEffect(() => {
    GetUsers();
  }, [GetUsers]);

console.log(users);
  return (
    <LayoutPrimary>
      <div className="all_products_container">
      <NavLink
          to="/AdminPanel"
          refresh="true"
          className="back_to_admin_panel"
        >
          <RiIcons.RiAdminLine />

          <h3 className="h3">Back to AdminPanel</h3>
        </NavLink>
        <Materialtable
          title="Users"
          columns={columns}
          data={users}
          icons={tableIcons}
          actions={[
            {
              icon: Edit,
              tooltip: "Edit Product",
              onClick: (event, rowData) => {
                alert("You clicked edit on row with id: " + rowData.id);
                
              },
            },
            {
              icon: DeleteOutline,
              tooltip: "Delete Product",
              onClick: (event, rowData) => {
                window.confirm(
                  "Are you sure you want to delete on row with id: " +
                    rowData.id
                );
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            detailPanelIndex: -1,
            headerStyle: {
              backgroundColor: "#420000",
              color: "#FFF",
              zIndex: "1",
            },
            pageSize: 9,
          }}
          components={{
            Pagination: (props) => (
              <div style={{ backgroundColor: "#e8eaf5" }}>
                <Pagination />
              </div>
            ),
          }}
        />
      </div>
    </LayoutPrimary>
  );
}

function mapStateToProps(state) {
  return {
    users: state.getAllUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetUsers: () => dispatch(getAllUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersAdmin);