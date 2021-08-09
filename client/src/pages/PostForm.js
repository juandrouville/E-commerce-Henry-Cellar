import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postProduct, getAllCategories } from "../actions";
import wineimage from "assets/images/create-wine-image.jpeg";
import NavBar from "components/NavBar/NavBar.js";
import { validation } from "../components/validation/validation.js";

export default function PostProduct() {
  const dispatch = useDispatch();
  const productCategories = useSelector((state) => state.productCategories);
  //linkear categorias ???

  const [input, setInput] = React.useState({
    name: "",
    image: wineimage,
    description: "",
    bodega: "",
    price: "",
    stock: "",
    categoria: "",
  });

  const [category, setCategory] = React.useState([]);

  const [errors, setErrors] = React.useState({});

  useEffect(() => {
    dispatch(getAllCategories(category));
  }, []);

  useEffect(() => {
    setInput({ ...input, categoria: category.toString() });
  }, [category]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  //handle categories ??

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Item successfully created!");
      dispatch(postProduct(input));
      console.log(input);
    } catch (err) {
      console.log("error en el submit", err);
    }
  };

  const handleCategories = (e) => {
    if (category.length < 1) {
      if (!category.includes(e.target.value)) {
        setCategory([...category, e.target.value]);
      }
    }
  };

  return (
    <div className="form__container">
      <NavBar />
      <Link to={`/`}>
        <button>home</button>
      </Link>
      <div className="form">
        <img src={wineimage} alt="post photo" width="50%" />
        <form className="table" onSubmit={handleSubmit}>
          <div className="form__inputs">
            <div>
              <label>Product name</label>
              <input
                className={errors.name && "danger"}
                type="text"
                name="name"
                onChange={handleInputChange}
                value={input.name}
              />
              {errors.name && <p className="danger">{errors.name}</p>}
            </div>
            <div>
              <label>Categoría</label>
              <select onChange={(e) => handleCategories(e)}>
                {productCategories &&
                  productCategories.map((category, i) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            {errors.categoria && <p className="danger">{errors.categoria}</p>}
            <div>
              <label>Bodega</label>
              <input
                className={errors.bodega && "danger"}
                type="text"
                name="bodega"
                onChange={handleInputChange}
                value={input.bodega}
              />{" "}
              {errors.bodega && <p className="danger">{errors.bodega}</p>}
            </div>
            <div>
              <label>Precio</label>
              <input
                className={errors.price && "danger"}
                type="number"
                name="price"
                onChange={handleInputChange}
                value={input.price}
              />
              {errors.price && <p className="danger">{errors.price}</p>}
            </div>
            <div>
              <label>Descripción</label>
              <input
                className={errors.description && "danger"}
                type="text"
                name="description"
                onChange={handleInputChange}
                value={input.description}
              />
              {errors.description && (
                <p className="danger">{errors.description}</p>
              )}
            </div>
            <div>
              <label>Stock</label>
              <input
                className={errors.stock && "danger"}
                type="number"
                name="stock"
                onChange={handleInputChange}
                value={input.stock}
              />
              {errors.stock && <p className="danger">{errors.stock}</p>}
            </div>
          </div>
          <button className="btn1" type="submit">
            Create!
          </button>
        </form>
      </div>
    </div>
  );
}
