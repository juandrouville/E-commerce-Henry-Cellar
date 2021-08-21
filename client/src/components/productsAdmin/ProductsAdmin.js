import { React, useEffect } from "react";
import { editProduct } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductAdmin = ({ image, name, price, id, stock, description, delFromFavourite }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const edit_Product = (id) => {
    console.log(id);
    dispatch(editProduct(id));
  };

  return (
    <div >
      <table className="admin_product_container">
        
<tr>
          <td>{id}</td>
          <td><p onClick={() => history.push(`/product-detail/${id}`)}>{name}</p></td>
          <td><img src={`${image}`} alt="Henry" width="50" height="50" /></td>
          <td>{description}</td>
          <td>${price}</td>

          <td>{stock} unidades</td>
          <td><button onClick={() => edit_Product(id)}>Edit Product</button></td>
          <td><button>Delete Product</button></td>
          </tr>    
      </table>
    </div>
  );
};

export default ProductAdmin;
