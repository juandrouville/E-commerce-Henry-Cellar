import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  clearProductDetail,
  addCart
} from "../../actions/index";
import NavBar from "../NavBar/NavBar";
import cart2 from "../../assets/images/cart2.png";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);

  const addToCart = (id) =>{  
    dispatch(addCart(id))
  }

 

  return (
    <div>
      <NavBar />
     
      {productDetail ? (
        <div className="product__detail">
          <img src={productDetail.image} alt="Loading..." width="40%" />

          <div className="product__data">
            <div className="name__price">
              <h1>{productDetail.name}</h1>
              <h1>$ {productDetail.price}</h1>
            </div>
            <p className="data__description"> {productDetail.description} </p>
            <p>Stock: {productDetail.stock} unidades</p>
          </div>
          
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
