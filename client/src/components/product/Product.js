import React from "react";

const Product = ({ image, name, price, stock }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Product;
