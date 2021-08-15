//REACT
import React from "react";
import { useEffect } from "react";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

//LAYOUT
import Layout from "layouts/layout-primary";

//COMPONENTS
import SimpleForm from "../components/SimpleForm/SimpleForm";
import Pagination from "components/pagination/pagination";
import Filtros from "../components/FIltros/filtros";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";
import AllProducts from "../components/allProducts/allproducts";

//ACTIONS
import { getUser } from "actions";

//BACKGROUND
import background from "assets/images/vendimia.jpeg";

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) dispatch(getUser(user));
  }, [isAuthenticated, dispatch, user]);

  const userDB = useSelector((state) => state.user);

  return (
    <Layout>
      <div
        className="catalogo__container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1>we have more than 90 varieties of wines</h1>
          <div className="arrow">
            <p>check out</p>
            <a href="#catalogo"></a>
          </div>
        </div>
      </div>
      <div id="catalogo">
        <h1 className="catalogo__title">Catalog</h1>
        <div>
          <Filtros />
          <SimpleForm />
        </div>
        <AllProducts />
      </div>
      <div>
        <Pagination />
      </div>
    </Layout>
  );
};

export default Home;
