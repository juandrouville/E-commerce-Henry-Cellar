//REACT
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllproducts, addCart, addProductToDBCart, editFavorites } from "../../actions/index";
import Product from "../product/Product";
import Pagination from "components/pagination/pagination";
import cart2 from "../../assets/images/cart2.png";
import { useAuth0 } from "@auth0/auth0-react";

function AllProducts({ products, GetProducts, addCart }) {

  const {isAuthenticated,user}=useAuth0()

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
                    name={p.name}
                    image={p.image}
                    price={p.price}
                    id={p.id}
                    stock={p.stock}
                  />
                
                {/* <button onClick={() => addToCart(p.id)}>
                  <img src={cart2} alt="cartlogo" width="30" height="30" />
                </button>
                <button onClick={() => addFavourite(p.id)}>
                  Fav
                </button> */}
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
