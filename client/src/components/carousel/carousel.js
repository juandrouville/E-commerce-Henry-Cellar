import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import CardFavorite from "../cardFavorite/cardFavorite";
import { Link } from "react-router-dom";
import { addCart, removeToFavourite } from "../../actions/index";

const Carousel = () => {

    let productsFavourite = useSelector((state) => state.productFavourite);

    const dispatch = useDispatch();

    const delFromFavourite = (id) => {

        dispatch(removeToFavourite(id));
    };

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (

        <div >
            <h2> Fav Prodcuts</h2>
            <Slider className="catalogo" {...settings}>
                
                    {productsFavourite.length !== 0 ?
                        productsFavourite ? (
                            productsFavourite.map((p) => {
                                return (
                                    <div>

                                        <CardFavorite
                                            name={<Link to={`/product-detail/${p.id}`} key={p.id}>{p.name}</Link>}
                                            image={p.image}
                                            price={p.price}
                                            id={p.id}
                                            delFromFavourite={delFromFavourite}
                                        />


                                    </div>
                                );
                            })
                        ) : (
                            <p>Cargando...</p>
                        ) : (<h2>There are no items in favorites</h2>)}
               
            </Slider>
        </div>
    )
}

export default Carousel;