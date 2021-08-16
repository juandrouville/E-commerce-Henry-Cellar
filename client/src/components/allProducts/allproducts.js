import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
                
                  <Product
                    name={<Link to={`/product-detail/${p.id}`} key={p.id}>{p.name}</Link>}
                    image={p.image}
                    price={p.price}
                    id={p.id}
                  />
                
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
