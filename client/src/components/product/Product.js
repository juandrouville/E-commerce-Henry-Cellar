const Product = ({ image, name, price }) => {
  return (
    <div className="product">
      <img
        src="https://cepadevinos.com/wp-content/uploads/2016/09/Paradigma-Blend.jpg"
        alt="Henry"
        width="246"
        height="246"
      />
      <div className="product__data">
        <h3>Paradigma Blend</h3>
        <br />
        <p>$500</p>
        <br />
        <p className="product__stock">Stock</p>
      </div>
    </div>
  );
};

export default Product;
