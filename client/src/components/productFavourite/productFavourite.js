import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../product/Product";
import { Link } from "react-router-dom";
import {addCart} from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";

const ProductFavourite = () => {
    let productsFavourite = useSelector((state) => state.productFavourite);
    const dispatch = useDispatch();

    const addToCart = (id) => {
        dispatch(addCart(id));
      };

    // useEffect(() => {
    //     productsFavourite();
    // }, [productsFavourite]);

    return (
        <div>
            <h2>Fav Products</h2>
            <div className="catalogo">
                {productsFavourite ? (
                    productsFavourite.map((p) => {
                        return (
                            <div>
                                
                                    <Product
                                        name={<Link to={`/product-detail/${p.id}`} key={p.id}>{p.name}</Link>}
                                        image={p.image}
                                        price={p.price}
                                        id={p.id}
                                    />
                                
                                
                            </div>
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};

export default ProductFavourite;