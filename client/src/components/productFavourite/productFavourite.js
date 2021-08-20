import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFavorite from "../cardFavorite/cardFavorite";
import { Link } from "react-router-dom";
import { addCart, editFavorites, getFavorites } from "../../actions/index";
import cart2 from "../../assets/images/cart2.png";
import { useAuth0 } from "@auth0/auth0-react";

const ProductFavourite = () => {
    let productsFavourite = useSelector((state) => state.productFavourite);

    const {user,isAuthenticated}=useAuth0()

  const dispatch = useDispatch();
  const editFavoritesState=useSelector(state=>state.editFavorites)
  
  useEffect(()=>{if(isAuthenticated)dispatch(getFavorites(user.sub))},[editFavoritesState])

    const delFromFavourite = (id) => {
        dispatch(editFavorites(id,user.sub,true));
    };
    
    useEffect(()=>{},[])


    return (
        <div>
            
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