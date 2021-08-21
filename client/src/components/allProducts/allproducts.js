//REACT
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllproducts, addCart, addProductToDBCart } from "../../actions/index";
import Product from "../product/Product";

function AllProducts({ products, GetProducts, addCart }) {


  const {user,isAuthenticated}=useAuth0()
   useEffect(() => {
    GetProducts();
  }, [GetProducts]);

  const addToCart = (id) => {
    if(isAuthenticated) addProductToDBCart(id,user.sub)
    else addCart(id);
  };


  return (
    <div>
      <div className="catalogo">
        {products ? (
          products.map((p) => {
            return (
              <div key={p.id}>
                
                  <Product
                  id={p.id}
                    name={p.name}
                    image={p.image}
                    price={p.price}
                    description={p.description}
                    stock={p.stock}
                  />
                
                
              </div>
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.getAllProducts,
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetProducts: () => dispatch(getAllproducts()),
    addCart: (id) => dispatch(addCart(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
