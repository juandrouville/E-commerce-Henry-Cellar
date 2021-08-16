//REACT
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//REDUX
import { connect } from "react-redux";

//COMPONENTS
import { getAllproducts, addCart } from "../../actions/index";
import Product from "../product/Product";
import cart2 from "../../assets/images/cart2.png";

function AllProducts({ products, GetProducts, addCart }) {
  useEffect(() => {
    GetProducts();
  }, [GetProducts]);

  const addToCart = (id) => {
    addCart(id);
  };
  return (
    <div>
      <div className="catalogo">
        {products ? (
          products.map((p) => {
            return (
              <div>
                <Link to={`/product-detail/${p.id}`} key={p.id}>
                  <Product
                    name={p.name}
                    image={p.image}
                    price={p.price}
                    id={p.id}
                  />
                </Link>
                <button onClick={() => addToCart(p.id)}>
                  <img src={cart2} alt="cartlogo" width="30" height="30" />
                </button>
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
