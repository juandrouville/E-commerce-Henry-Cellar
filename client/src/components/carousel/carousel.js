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

        
        <div>
            {productsFavourite.length !== 0 ? <h1>FAVORITES</h1> : null}
            <Slider className="catalogo" {...settings}>
                
                    {productsFavourite.length !== 0 ?
                        productsFavourite ? (
                            productsFavourite.map((p) => {
                                return (
                                    <div >

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
                        ) : null}
               
            </Slider>
        </div>
    )
}

export default Carousel;