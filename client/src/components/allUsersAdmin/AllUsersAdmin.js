import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { clearAllUsers, editUser, getAllUsers } from "../../actions/index";
import Pagination from "components/pagination/pagination";
import Materialtable from "material-table";
import { forwardRef } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import toast from "react-hot-toast";

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  ArrowDownward: forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  ))
};

function AllUsersAdmin({ allUsers, GetUsers }) {
  const dispatch = useDispatch();

  const handleBlockSelect = e => {
    dispatch(editUser(e.target.id, { [e.target.name]: e.target.value }));
    toast.success(
      `The user ${e.target.id} changed its ${e.target.name} status`
    );
  };

  const columns = [
    { title: "User Name", field: "userName" },
    { title: "E-mail", field: "email" },
    { title: "Address", field: "adress" },
    // { title: "Phone", field: "phone" },
    {
      title: "Admin",
      field: "admin",

      render: rowData => (
        <select
          defaultValue={rowData.admin}
          id={rowData.id}
          name="admin"
          onChange={handleBlockSelect}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      )
    },

    { title: "Subscribed", field: "subscribed" },
    {
      title: "Blocked",
      field: "blocked",
      render: rowData => (
        <select
          defaultValue={rowData.blocked}
          onChange={handleBlockSelect}
          id={rowData.id}
          name="blocked"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      )
    }
  ];

  useEffect(() => {
    GetUsers();
    return () => {
      dispatch(clearAllUsers());
    };
  }, [GetUsers]);

  return (
    <div className="container_tables_admin">
      <Materialtable
        title="Users"
        columns={columns}
        data={allUsers}
        icons={tableIcons}
        detailPanel={[
          {
            icon: ArrowDownward,
            tooltip: "Show Name",

            render: rowData => {
              return (
                <div
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",

                    backgroundColor: "#8c2121"
                  }}
                >
                  {rowData.firstName} {rowData.lastName}
                </div>
              );
            }
          }
        ]}
        // actions={[
        //   {
        //     icon: Edit,
        //     tooltip: "Edit User",
        //     onClick: (event, rowData) => {
        //       alert("You clicked edit on row with id: " + rowData.id);

        //     },
        //   },

        // ]}
        options={{
          actionsColumnIndex: -1,
          detailPanelIndex: -1,
          headerStyle: {
            backgroundColor: "#8c2121",
            color: "#FFF",
            zIndex: "1"
          },
          pageSize: 9
        }}
        components={{
          Pagination: props => (
            <div>
              <Pagination />
            </div>
          )
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetUsers: () => dispatch(getAllUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersAdmin);
