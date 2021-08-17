import { React, useEffect } from "react";
import { addCart, addToFavourite } from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";


const Product = ({ image, name, price, id, delFromFavourite }) => {
  let productsFavourite = useSelector((state) => state.productFavourite);

  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addCart(id));
  };
  const addFavourite = (id) => {
    dispatch(addToFavourite(id));
  };
  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(productsFavourite));
  }, [productsFavourite]);

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
            <button onClick={() => addFavourite(id)}>
              Fav <FaStar
                className="star"
                color="#ffc107"

                size={15}
              />
            </button>
            
            <button onClick={() => addToCart(id)}>
              <img src={cart2} alt="cartlogo" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
