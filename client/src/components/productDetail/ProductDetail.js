import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  clearProductDetail,
  addCart,
  addProductToDBCart,
  addToFavourite,
} from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import Review from "../Review/Review";
import { FaStar } from "react-icons/fa";
import PostReview from "components/PostReview/PostReview";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "layouts/layout-primary";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);

  const addFavourite = (id) => {
    dispatch(addToFavourite(id));
  };

  const addToCart = (id) => {
    if (isAuthenticated) dispatch(addProductToDBCart(id, user.sub));
    else dispatch(addCart(id));
  };
  return (
    <Layout>
      <div>
        {productDetail ? (
          <>
            <div className="product__detail">
              <img src={productDetail.image} alt="Loading..." width="40%" />
              <div className="product__data">
                <div className="name__price">
                  <h1>{productDetail.name}</h1>
                  <h1>$ {productDetail.price}</h1>
                </div>
                <p className="data__description">
                  {" "}
                  {productDetail.description}{" "}
                </p>
                <p>Stock: {productDetail.stock} unidades</p>
              </div>
            </div>
            <div className="buyFavButtons">
            <button onClick={() => addToCart(productDetail.id)}>
              <img src={cart2} alt="cartlogo" width="30" height="30" />
            </button>
            {isAuthenticated ? (
              <button onClick={() => addFavourite(productDetail.id)}>
                Fav <FaStar className="star" color="#ffc107" size={15} />
              </button>
            ) : null}
            </div>
          </>
        ) : (
          <p>Cargando...</p>
        )}

        {productDetail.reviews ? (
          productDetail.reviews.map((ele) => {
            return <Review review={{ ...ele }} />;
          })
        ) : (
          <p>Sin Comentarios </p>
        )}

        <PostReview productId={productDetail.id} />
      </div>
    </Layout>
  );
}
