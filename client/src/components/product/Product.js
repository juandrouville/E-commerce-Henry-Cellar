import { React, useEffect } from "react";
import {
  addCart,
  addProductToDBCart,
  addToFavourite,
} from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const Product = ({ image, name, price, id, stock, delFromFavourite }) => {
  let productsFavourite = useSelector((state) => state.productFavourite);

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();
  let history = useHistory();

  const addToCart = (id) => {
    if (isAuthenticated) dispatch(addProductToDBCart(id, user.sub));
    else dispatch(addCart(id));
    toast.success(`One product was added to your cart !`);
  };

  const addFavourite = (id) => {
    dispatch(addToFavourite(id));
    toast.success(`One product was added to your favorites list !`);
  };

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(productsFavourite));
  }, [productsFavourite]);

  return (
    <div className="row center">
      <div key={name} className="product">
        <img src={`${image}`} alt="Henry" width="246" height="246" />
        <div className="product__data">
          <h3 onClick={() => history.push(`/product-detail/${id}`)}>{name}</h3>
          <br />
          <p>${price}</p>
          <br />
          {stock > 0 ? (
            <p className="product__stock">Stock : {stock} unidades</p>
          ) : (
            <p className="product_nostock">No stock</p>
          )}

          {isAuthenticated &&
          (user.sub === "google-oauth2|102669847324725021364" ||
            user.sub === "google-oauth2|109028710743016612481" ||
            user.sub === "google-oauth2|110496112430074927748") ? (
            <div className="cartButton">
              <button>Edit Product</button>
              <button>Delete Product</button>
            </div>
          ) : (
            <div className="cartButton">
              <button onClick={() => addFavourite(id)}>
                Fav <FaStar className="star" color="#ffc107" size={15} />
              </button>
              <pre> </pre>
              <button onClick={() => addToCart(id)}>
                <img src={cart2} alt="cartlogo" width="30" height="30" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
