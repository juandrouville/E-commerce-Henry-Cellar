import React from "react";
import { addCart, addProductToDBCart, addToFavourite } from "../../actions/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";


const CardFavorite = ({ image, name, price, id,stock, delFromFavourite }) => {

  const {isAuthenticated,user}=useAuth0()

  const dispatch = useDispatch();

  const addToCart = (id) => {
    if(isAuthenticated){dispatch(addProductToDBCart(id,user.sub))}
    else dispatch(addCart(id));
    toast.success(`${name} was added to your cart !`)
  };


  return (
    <div >
       
      <div key={name} className="card_favorite">
        <img src={`${image}`} alt="Henry"/>
        <div className="data_favorite">
          <Link to={`/product-detail/${id}`} className="link_detail">
            {name}
          </Link>
          <br />
          <p>${price}</p>
          <br />
          <h3>Stock : {stock} unidades</h3>
          <div className="button_card_favorite">
          {stock>0 ? 
            <button onClick={() => addToCart(id)}>
            <TiShoppingCart size={26} />
            </button> : null}
            
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