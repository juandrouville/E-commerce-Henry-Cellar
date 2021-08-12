import AllProducts from "../components/allProducts/allproducts";
import Pagination from "../components/pagination/pagination";

import Wine from "assets/images/backgrond-wine.jpeg";
import Layout from "layouts/layout-primary";
import Filtros from "components/FIltros/filtros";
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
        <img src={Wine} alt="Henry" width="100%" />
        <div>
          <h1 className="catalogo__title">Catalogo</h1>
          <Filtros/>
          <AllProducts />
        </div>
        <Pagination/>
      </div>
    </Layout>
  );
};

export default Home;
