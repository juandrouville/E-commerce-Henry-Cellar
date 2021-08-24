//REACT
import React, { useEffect } from "react";
import { getAllproducts, removeProduct } from "../../actions/index";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

function AllProductsAdmin({ GetProducts, DeleteProduct }) {
  const products = useSelector(state => state.getAllProducts);
  const dispatch = useDispatch();
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
    dispatch(getAllproducts());
  }, [dispatch]);

  const handleDelete = async e => {
    try {
      dispatch(removeProduct(e));
      alert("Product deleted!");
      setTimeout(() => {
        dispatch(getAllproducts());
      }, 600);
    } catch (error) {
      console.log("delete product error", error);
    }
  };

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
              var answer = window.confirm(
                "Are you sure you want to delete the product: " +
                  rowData.name +
                  "?"
              );
              if (answer) {
                handleDelete(rowData.id);
              } else {
                return;
              }
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

export default AllProductsAdmin;
