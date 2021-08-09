import AllProducts from "../components/allProducts/allproducts";
import Pagination from "../components/pagination/pagination";

import Wine from "assets/images/backgrond-wine.jpeg";
import Layout from "layouts/layout-primary";

const Home = () => {
  return (
    <Layout>
      <div className="catalogo__container">
        <img src={Wine} alt="Henry" width="100%" />
        <div>
          <h1 className="catalogo__title">Catalogo</h1>
          <AllProducts />
        </div>
        <Pagination/>
      </div>
    </Layout>
  );
};

export default Home;
