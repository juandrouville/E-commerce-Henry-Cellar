import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFavorite from "../cardFavorite/cardFavorite";
import { Link } from "react-router-dom";
import { addCart, removeToFavourite } from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";

const ProductFavourite = () => {
    let productsFavourite = useSelector((state) => state.productFavourite);

  const dispatch = useDispatch();

    const addToCart = (id) => {
        dispatch(addCart(id));
    };

    const delFromFavourite = (id) => {

        dispatch(removeToFavourite(id));
    };
   useEffect(() => {
        localStorage.setItem("favourite", JSON.stringify(productsFavourite));
      }, [productsFavourite]);

 console.log(productsFavourite);
    // useEffect(() => {
    //     productsFavourite();
    // }, [productsFavourite]);

    return (
        <div>
            <h2>.</h2>
            <div className="catalogo">
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
                ) : (<h2>There are no items in favorites</h2>) }
            </div>
        </div>
    );
};

export default ProductFavourite;