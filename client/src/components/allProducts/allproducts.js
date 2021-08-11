import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllproducts, addCart } from "../../actions/index";
import Product from "../product/Product";

function AllProducts({ products, GetProducts, addCart }) {
  useEffect(() => {
    GetProducts();
  }, [GetProducts]);

  const addToCart = (id) =>{
    
    addCart(id)
  }

  return (
    <div>
      <div className="catalogo">
        {products ? (
          products.map((p) => {
            return (
              <Link to={`/product-detail/${p.id}`} key={p.id}>
                <div>
                  <Product name={p.name} image={p.image} price={p.price} addToCart={addToCart} id={p.id}/>
                </div>
              </Link>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    GetProducts: () => dispatch(getAllproducts()),
    addCart: (id) => dispatch(addCart(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
