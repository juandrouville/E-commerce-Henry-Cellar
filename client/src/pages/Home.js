import NavBar from "../components/NavBar/NavBar.js";
import AllProducts from "../components/allProducts/allproducts";
import Wine from "assets/images/backgrond-wine.jpeg";

const Catalogo = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container">
        <AllProducts />
      </div>
    </div>
  );
};

export default Catalogo;
