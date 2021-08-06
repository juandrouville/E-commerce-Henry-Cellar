import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getProductDetail, clearProductDetail } from "../../actions/index"

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);


  return (
    <div>
      <Link to={`/`} >
      <buttom>home</buttom>
      </Link>
      <div className="product__detail">
        <img
          src={productDetail.image}
          alt="Henry"
          width="40%"
        />

        <div className="product__data">
          <div className="name__price">
            <h1>{productDetail.name}</h1>
            <h1>{productDetail.price}</h1>
          </div>
          <p className="data__description"> {productDetail.description} </p>
          <p>{productDetail.stock}</p>
        </div>
      </div>
    </div>
  );
};
