import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import CardFavorite from "../cardFavorite/cardFavorite";
import { Link } from "react-router-dom";
import {
  editFavorites,
  getFavorites
} from "../../actions/index";
import { useAuth0 } from "@auth0/auth0-react";
//actualizacion
const Carousel = () => {
  const { user, isAuthenticated } = useAuth0();

  let productsFavourite = useSelector(state => state.productFavourite);
  const editFavoritesState=useSelector(state=>state.editFavorites)

  const dispatch = useDispatch();

  const delFromFavourite = id => {
    dispatch(editFavorites(id, user.sub, true));
  };

  useEffect(()=>{if(isAuthenticated)dispatch(getFavorites(user.sub))},[editFavoritesState])

  const settings = {
    dots: true,
    infinite: true,   
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel_container">
      <div className="carousel">
        <div className="carousel-inner">
          {productsFavourite.length !== 0 ? <h1>Favourites</h1> : null}
        </div>
        <Slider className="show" {...settings}>
          {
            productsFavourite ? (
              productsFavourite.map(p => {
                return (
                  <div key={p.id} className="containerCarousel">
                    <div>
                      <CardFavorite
                        name={
                          <Link to={`/product-detail/${p.id}`} key={p.id}>
                            {p.name}
                          </Link>
                        }
                        image={p.image}
                        price={p.price}
                        id={p.id}
                        delFromFavourite={delFromFavourite}
                        stock={p.stock}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Cargando...</p>
            )
         }
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
