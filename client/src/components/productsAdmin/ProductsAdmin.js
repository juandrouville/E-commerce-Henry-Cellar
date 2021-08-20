import { React, useEffect } from "react";
import { editProduct } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductAdmin = ({ image, name, price, id, stock, delFromFavourite }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const edit_Product = (id) => {
    console.log(id);
    dispatch(editProduct(id));
  };

  return (
    <div className="admin_product_container">
      
        
          <p>{id}</p>
          <p onClick={() => history.push(`/product-detail/${id}`)}>{name}</p>
          <img src={`${image}`} alt="Henry" width="50" height="50" />
          <p>${price}</p>

          <p>Stock : {stock} unidades</p>
          <button onClick={() => edit_Product(id)}>Edit Product</button>
          <button>Delete Product</button>
        
      
    </div>
  );
};

export default ProductAdmin;
