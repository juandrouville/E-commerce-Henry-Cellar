<<<<<<< HEAD
import React from "react";
import { validation } from "../components/validation/validation.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { postProduct } from "../actions";
import Layout from "layouts/layout-primary";
=======
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postProduct, getAllCategories } from "../actions";
import wineimage from "assets/images/create-wine-image.jpeg";
import NavBar from "components/NavBar/NavBar.js";
import { validation } from "../components/validation/validation.js";
>>>>>>> Lighuen

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
      console.log(input);
      dispatch(postProduct(input));
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
    <Layout>
      <div>
        <Link to={`/`}>
          <button>home</button>
        </Link>
        <div className="form">
          <img
            src="https://previews.123rf.com/images/sakmeniko/sakmeniko2007/sakmeniko200700116/150774024-water-bottle-icon-vector-design-template.jpg"
            alt="post bottle"
          />
          <form className="table" onSubmit={handleSubmit}>
            <div>
              <label>Product name:</label>
              <input
                className={errors.name && "danger"}
                type="text"
                name="name"
                onChange={handleInputChange}
                value={input.name}
              />
              {errors.name && <p className="danger">{errors.name}</p>}
              <div>
                <label>Categoría:</label>
                <input
                  className={errors.categoria && "danger"}
                  type="text"
                  name="categoria"
                  onChange={handleInputChange}
                  value={input.categoria}
                />
                {errors.categoria && (
                  <p className="danger">{errors.categoria}</p>
                )}
                <div>
                  <label>Bodega:</label>
                  <input
                    className={errors.bodega && "danger"}
                    type="text"
                    name="bodega"
                    onChange={handleInputChange}
                    value={input.bodega}
                  />
                  {errors.bodega && <p className="danger">{errors.bodega}</p>}
                  <div>
                    <label>Cosecha:</label>
                    <input
                      className={errors.harvest && "danger"}
                      type="text"
                      name="harvest"
                      onChange={handleInputChange}
                      value={input.harvest}
                    />
                    {errors.harvest && (
                      <p className="danger">{errors.harvest}</p>
                    )}
                    <div>
                      <label>Precio:</label>
                      <input
                        className={errors.price && "danger"}
                        type="number"
                        name="price"
                        onChange={handleInputChange}
                        value={input.price}
                      />
                      {errors.price && <p className="danger">{errors.price}</p>}
                      <div>
                        <label>Descripción:</label>
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
                        <div>
                          <label>Stock:</label>
                          <input
                            className={errors.stock && "danger"}
                            type="number"
                            name="stock"
                            onChange={handleInputChange}
                            value={input.stock}
                          />
                          {errors.stock && (
                            <p className="danger">{errors.stock}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <button className="btn1" type="submit">
              Create!
            </button>
          </form>
        </div>
=======
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
>>>>>>> Lighuen
      </div>
    </Layout>
  );
}
