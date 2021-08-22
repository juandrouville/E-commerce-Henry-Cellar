//REACT
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllproducts } from "../../actions/index";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";

import { useHistory } from "react-router-dom";

//import ProductsAdmin from "../productsAdmin/ProductsAdmin";

import Pagination from "components/pagination/pagination";
import LayoutPrimary from "layouts/layout-primary";
import Materialtable from "material-table";
import { forwardRef } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  ArrowDownward: forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
};

function AllProductsAdmin({ products, GetProducts }) {
  const history = useHistory();

  const columns = [
    { title: "Id", field: "id" },
    {
      title: "Image",
      field: "image",

      render: (rowData) => (
        <img src={rowData.image} style={{ width: 40, borderRadius: "50%" }} />
      ),
    },
    { title: "Name", field: "name" },
    // { title: "Description", field: "description" },
    { title: "Price", field: "price", type: "numeric" },
    { title: "Stock", field: "stock", type: "numeric" },
  ];

  useEffect(() => {
    GetProducts();
  }, [GetProducts]);

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
          title="All Products"
          columns={columns}
          data={products}
          icons={tableIcons}
          detailPanel={[
            {
              icon: ArrowDownward,
              tooltip: "Show description",

              render: (rowData) => {
                return (
                  <div
                    style={{
                      fontSize: 20,
                      textAlign: "center",
                      color: "white",

                      backgroundColor: "#420000",
                    }}
                  >
                    {rowData.description}
                  </div>
                );
              },
            },
          ]}
          actions={[
            {
              icon: Edit,
              tooltip: "Edit Product",
              onClick: (event, rowData) => {
                history.push(`/Edit/${rowData.id}`);
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
    products: state.getAllProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetProducts: () => dispatch(getAllproducts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsAdmin);
