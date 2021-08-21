//REACT
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllproducts } from "../../actions/index";
import ProductsAdmin from "../productsAdmin/ProductsAdmin";
import Pagination from "components/pagination/pagination";
import LayoutPrimary from "layouts/layout-primary";


function AllProductsAdmin({ products, GetProducts }) {

  useEffect(() => {
    GetProducts();
  }, [GetProducts]);

  return (
    <LayoutPrimary>
    <div className="all_products_container">
      
    <table>
        <tr>
          <th scope="row">ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {products ? (
          products.map((p) => {
            return (
              <div key={p.id}>
                
                  <ProductsAdmin
                    id={p.id}
                    name={p.name}
                    image={p.image}
                    description={p.description}
                    price={p.price}
                    stock={p.stock}
                  />
                
               
              </div>
            
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
      </table>
      <Pagination />
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