const Product = ({ stock, image, name, price }) => {
  return (
    <div className="product">
      <p>{stock}</p>
      <img src={image} alt="Henry" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Product;
