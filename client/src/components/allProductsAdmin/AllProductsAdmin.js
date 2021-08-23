//REACT
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllproducts, removeProduct } from "../../actions/index";
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
  ))
};

function AllProductsAdmin({ products, GetProducts, DeleteProduct }) {
  const history = useHistory();

  const columns = [
    { title: "Id", field: "id" },
    {
      title: "Image",
      field: "image",

      render: rowData => (
        <img src={rowData.image} style={{ width: 40, borderRadius: "50%" }} />
      )
    },
    { title: "Name", field: "name" },
    // { title: "Description", field: "description" },
    { title: "Price", field: "price", type: "numeric" },
    { title: "Stock", field: "stock", type: "numeric" }
  ];

  useEffect(() => {
    GetProducts();
  }, [products]);

  useEffect(() => {
    DeleteProduct();
  }, [DeleteProduct]);

  return (
    <div className="all_products_container">
      <Materialtable
        title="All Products"
        columns={columns}
        data={products}
        icons={tableIcons}
        detailPanel={[
          {
            icon: ArrowDownward,
            tooltip: "Show description",

            render: rowData => {
              return (
                <div
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",

                    backgroundColor: "#420000"
                  }}
                >
                  {rowData.description}
                </div>
              );
            }
          }
        ]}
        actions={[
          {
            icon: Edit,
            tooltip: "Edit Product",
            onClick: (event, rowData) => {
              history.push(`/editProduct/${rowData.id}`);
            }
          },
          {
            icon: DeleteOutline,
            tooltip: "Delete Product",
            onClick: (event, rowData) => {
              window.confirm(
                "Are you sure you want to delete on row with id: " + rowData.id
              );
              DeleteProduct(rowData.id);
              alert("Delete successfull!");
            }
          }
        ]}
        options={{
          actionsColumnIndex: -1,
          detailPanelIndex: -1,
          headerStyle: {
            backgroundColor: "#420000",
            color: "#FFF",
            zIndex: "1"
          },

          pageSize: 9
        }}
        components={{
          Pagination: props => (
            <div style={{ backgroundColor: "#e8eaf5" }}>
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
    products: state.getAllProducts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetProducts: () => dispatch(getAllproducts()),
    DeleteProduct: id => dispatch(removeProduct(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsAdmin);
