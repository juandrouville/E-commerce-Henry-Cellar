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
      <div >
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
      </div>
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