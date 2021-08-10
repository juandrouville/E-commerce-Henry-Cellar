import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  clearProductDetail,
  // getAllproducts,
} from "../../actions/index";
import NavBar from "../NavBar/NavBar";

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

  // function onClickFiltro() {
  //   dispatch(getAllproducts());
  // }

  return (
    <div>
      <NavBar />
      {/* <Link to={`/`}>
        <buttom onClick={(e) => onClickFiltro(e)}>home</buttom>
      </Link> */}
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
