import React from "react";
import { addCart, addToFavourite } from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";

const Product = ({ image, name, price, stock }) => {
  const addToCart = (id) => {
    addCart(id);
  };
  const addFavourite = (id) =>{
    addToFavourite(id);
  };

  return (
    <div className="row center">
      <div key={name} className="product">
        <img src={`${image}`} alt="Henry" width="246" height="246" />
        <div className="product__data">
          <h3>{name}</h3>
          <br />
          <p>${price}</p>
          <br />
          <p className="product__stock">Stock</p>
          <div>
            <button onClick={() => addToCart()}>
              <img src={cart2} alt="cartlogo" width="30" height="30" />
            </button>
            <button onClick={() => addFavourite()}>
                  Fav
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
