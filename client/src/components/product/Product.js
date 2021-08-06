import React from "react";

const Product = ({ image, name, price }) => {
  return (
    <div className="product">
      <img
        src={`${image}`}
        alt="Henry"
        width="246"
        height="246"
      />
      <div className="product__data">
        <h3>{name}</h3>
        <br />
        <p>{price}</p>
        <br />
        <p className="product__stock">Stock</p>
      </div>
    </div>
  );
};

export default Product;
