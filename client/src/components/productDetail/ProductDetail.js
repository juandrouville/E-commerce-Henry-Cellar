import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  clearProductDetail,
  addCart,
  addProductToDBCart,
  addToFavourite,
  editFavorites,
} from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import Review from "../Review/Review";
import { FaStar } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "layouts/layout-primary";
import toast, { Toaster } from "react-hot-toast";

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
    dispatch(editFavorites(id, user.sub, false));
  };

  const addToCart = (id) => {
    if (isAuthenticated) dispatch(addProductToDBCart(id, user.sub));
    else dispatch(addCart(id));
    toast.success(`The Product ${productDetail.name} was added to your cart !`)
  };
  return (
    <Layout>
      <div><Toaster /></div>
      <div className="page_productDetail">
        {productDetail ? (
          <>
            <div className="product__detail">
              <img src={productDetail.image} alt="Loading..." className="productImage" />
              <div className="product__data">
                <div className="name__price">
                  <h1 className="productName">{productDetail.name}</h1>
                  <p className="stock">Stock: {productDetail.stock} unidades</p>
                  <h1 className="productPrice">$ {productDetail.price}</h1>
                </div>
                <div className="containerDescription">
                  <h2>Description : </h2>
                  <p className="data__description">
                    {" "}
                    {productDetail.description}{" "}
                  </p>
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
              </div>

            </div>
          </>
        ) : (
          <p>Cargando...</p>
        )}


        {productDetail.reviews ?
          productDetail.reviews.map(ele => {
            return (
              <Review review={{ ...ele }} />
            )
          }) : (
            <div className="sinComentarios">
              <p>No reviews </p>
            </div>
          )}
      </div>
    </Layout>
  );
}




