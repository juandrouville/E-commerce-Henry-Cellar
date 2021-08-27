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
  getOrderlines,
} from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import Review from "../Review/Review";
import { FaStar } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "layouts/layout-primary";
import toast, { Toaster } from "react-hot-toast";
import PostReview from "components/PostReview/PostReview";
import { TiShoppingCart } from "react-icons/ti";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const addProductLogged=useSelector(state=>state.addProductToDB)
  const userDB=useSelector(state=>state.user)

  const { id } = useParams();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (isAuthenticated && userDB) {
      dispatch(getOrderlines(userDB.order.id));
    }
  }, [ addProductLogged]);

  const addFavourite = (id) => {
    dispatch(editFavorites(id, user.sub, false));
    toast.success(`The Product ${productDetail.name} was added to your favorites !`)

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
                  <button  disabled={productDetail.stock<1? true : false} onClick={() => addToCart(productDetail.id)}>
                    <TiShoppingCart size={30}   disabled={productDetail.stock <1 ? true : false}/>
                  </button>
                  {/* {isAuthenticated ? ( */}
                    <button  onClick={(e) => {addFavourite(productDetail.id);e.target.disabled=true}}>
                      Fav <FaStar className="star" color="#ffc107" size={15} />
                    </button>
                  {/* ) : null} */}

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
          <PostReview productId={productDetail.id}/>
      </div>
    </Layout>
  );
}




