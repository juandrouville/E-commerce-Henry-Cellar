//REACT
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//REDUX
import { connect } from "react-redux";

//COMPONENTS
import { getAllproducts, addCart, addToFavourite } from "../../actions/index";
import Product from "../product/Product";
import cart2 from "../../assets/images/cart2.png";

function AllProducts({ products, GetProducts, addCart, addToFavourite }) {
  useEffect(() => {
    GetProducts();
  }, [GetProducts]);

  const addToCart = (id) => {
    addCart(id);
  };

  const addFavourite = (id) =>{
    addToFavourite(id);
  };

  return (
    <div>
      <div className="catalogo">
        {products ? (
          products.map((p) => {
            return (
              <div>
                
                  <Product
                    name={<Link to={`/product-detail/${p.id}`} key={p.id}>{p.name}</Link>}
                    image={p.image}
                    price={p.price}
                    id={p.id}
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
    addToFavourite: (id) => dispatch(addToFavourite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
