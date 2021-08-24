import { React, useEffect } from "react";
import {
  addCart,
  addProductToDBCart,
  editFavorites,
  editProduct,
} from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

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
    if(isAuthenticated){
      dispatch(editFavorites(id,user.sub,false));
      toast.success(`One product was added to your favorites list !`);
}
  };

  // useEffect(() => {
  //   localStorage.setItem("favourite", JSON.stringify(productsFavourite));
  // }, [productsFavourite]);

  const edit_Product = (id) => {
    console.log(id);
    dispatch(editProduct(id));
  };

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

          
            <div className="cartButton">
              {isAuthenticated ? (<button onClick={() => addFavourite(id)}>
                Fav <FaStar className="star" color="#ffc107" size={15} />
              </button>) : null}
              
              <pre> </pre>
              
              <button onClick={() => addToCart(id)}>
                <TiShoppingCart size={30} />
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
