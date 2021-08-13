import AllProducts from "../components/allProducts/allproducts";

import Pagination from "../components/pagination/pagination";
import React from 'react';
import Wine from "assets/images/backgrond-wine.jpeg";
import Layout from "layouts/layout-primary";
import Filtros from "../components/FIltros/filtros";
import background from "assets/images/background-definitivo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { getUser } from "actions";

const Home = () => {

  const dispatch=useDispatch()
  const {user,isAuthenticated}=useAuth0()


  useEffect(() => {
    if(isAuthenticated) dispatch(getUser(user))
  }, [isAuthenticated,dispatch,user])

  const userDB=useSelector(state=>state.user)
  console.log(userDB)
  return (
    <Layout>
      <div className="catalogo__container">
        <img src={background} alt="Henry" />
        <a className="link" href="#catalogo">
          Shop now
        </a>
        <h1>Find the perfect wine for you.</h1>
      </div>
      <div id="catalogo">
        <h1 className="catalogo__title">Catalogo</h1>
        <div>
          <Filtros />
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
