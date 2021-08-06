import ProductDetail from "components/productDetail/ProductDetail.js";
import NavBar from "../components/NavBar/NavBar.js";

const Catalogo = () => {
  return (
    <div className="welcome-screen">
      <div>
        <NavBar />
        <ProductDetail />
      </div>
    </div>
  );
};

export default Catalogo;
