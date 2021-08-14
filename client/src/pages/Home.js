import AllProducts from "../components/allProducts/allproducts";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";

import React from "react";
import Layout from "layouts/layout-primary";

import Filtros from "../components/Filtros/filtros";
import background from "../assets/images/background-definitivo.jpeg"

import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { getUser } from "actions";
import SimpleForm from "../components/SimpleForm/SimpleForm";
import Pagination from "components/pagination/pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();


  useEffect(() => {
    if (isAuthenticated) dispatch(getUser(user));
  }, [isAuthenticated, dispatch, user]);

  const userDB = useSelector((state) => state.user);
  console.log(userDB);
  return (
    <Layout>
      <div className="catalogo__container">
        {/* <img src={background} alt="Henry" /> */}
        <a className="icon" href="#catalogo">
          <div className="arrow">
            <Arrow />
          </div>
        </a>
        <h1>Find the perfect wine for you.</h1>
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
