import ProductDetail from "components/productDetail/ProductDetail.js";
import NavBar from "../components/NavBar/NavBar.js";
import AllProducts from "../components/allProducts/allproducts"

const Catalogo = () => {
  return (
    <div className="welcome-screen">
      <div>
        <NavBar />
        <ProductDetail />
        <AllProducts />

      </div>
    </div>
  );
};

export default Catalogo;
