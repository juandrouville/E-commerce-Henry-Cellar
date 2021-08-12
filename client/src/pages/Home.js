import AllProducts from "../components/allProducts/allproducts";

import Pagination from "../components/pagination/pagination";
import React from 'react';
import Wine from "assets/images/backgrond-wine.jpeg";
import Layout from "layouts/layout-primary";
import Filtros from "components/Filtros/filtros";
import background from "assets/images/background-definitivo.jpeg";

const Home = () => {
  
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
    </Layout>
  );
};

export default Home;
