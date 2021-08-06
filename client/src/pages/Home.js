import NavBar from "../components/NavBar/NavBar.js";
import AllProducts from "../components/allProducts/allproducts"

const Catalogo = () => {
  return (
    <div className="welcome-screen">
      <div>
        <NavBar />
        <AllProducts />
      </div>
    </div>
  );
};

export default Catalogo;
