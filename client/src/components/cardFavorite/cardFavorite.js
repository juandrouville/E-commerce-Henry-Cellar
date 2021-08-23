import React from "react";
import { addCart, addToFavourite } from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import { useDispatch } from "react-redux";


const CardFavorite = ({ image, name, price, id,stock, delFromFavourite }) => {

  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addCart(id));
  };


  return (
    <div>
       
      <div key={name} className="product">
        <img src={`${image}`} alt="Henry"/>
        <div className="product__data">
          <h3>{name}</h3>
          <br />
          <p>${price}</p>
          <br />
          <p className="product__stock">Stock : {stock} unidades</p>
          <div className="cartButton">
            <button onClick={() => addToCart(id)}>
              <img src={cart2} alt="cartlogo" width="30" height="30" />
            </button>
            <button onClick={() => delFromFavourite(id)}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFavorite;