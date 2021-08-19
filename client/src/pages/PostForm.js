import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postProduct, getAllCategories } from "../actions";
import wineimage from "assets/images/create-wine-image.jpeg";
import { validation } from "../components/validation/validation.js";
import LayoutPrimary from "../layouts/layout-primary.js";

export default function PostProduct(props) {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.productCategories);
  //linkear categorias ???

  const [input, setInput] = React.useState({
    name: "",
    image: wineimage,
    description: "",
    winery: "",
    price: "",
    stock: "",
    categories: [],
  });

  const [errors, setErrors] = React.useState({});

  useEffect(() => {
    dispatch(getAllCategories());
    return function cleanup() {};
  }, [dispatch]);

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
      dispatch(postProduct(input));
      alert("Item successfully created!"); // ver como usar un toast que es mas estetico
      props.history.push("/");
      console.log(input);
    } catch (err) {
      console.log("error en el submit", err);
    }
  };

  // const handleCategories = (e) => {
  //   if (category.length < 1) {
  //     if (!category.includes(e.target.value)) {
  //       setCategory([...category, e.target.value]);
  //     }
  //   }
  // };

  const handleSelections = (e) => {
    if (input.categories.includes(e.target.value)) {
      let oldCategories = input.categories;
      let newCategories = oldCategories.filter(
        (category) => category !== e.target.value
      );
      setInput({ ...input, categories: newCategories });
      setErrors(validation({ ...input, categories: newCategories }));
    } else {
      let newCategories = input.categories;
      newCategories.push(e.target.value);
      setInput({ ...input, categories: newCategories });
      setErrors(validation({ ...input, categories: newCategories }));
    }
  };

  return (
    <LayoutPrimary>
      <div >
      
        <div className="form">
          <img src={wineimage} alt="post wine" width="50%" />
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
                <label>Winery</label>
                <input
                  className={errors.winery && "danger"}
                  type="text"
                  name="winery"
                  onChange={handleInputChange}
                  value={input.winery}
                />{" "}
                {errors.winery && <p className="danger">{errors.winery}</p>}
              </div>
              <div>
                <label>Price</label>
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
                <label>Description</label>
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
                  min={0}
                  max={255}
                />
                {errors.stock && <p className="danger">{errors.stock}</p>}
              </div>
              <div>
                <label>Categories</label>
                {allCategories.length &&
                  allCategories.map((category) => (
                    <div key={category.id}>
                      <label>{category.name}</label>
                      <input
                        type="checkbox"
                        value={category.name}
                        onClick={handleSelections}
                      ></input>
                    </div>
                  ))}
                {/* <select onChange={(e) => handleCategories(e)}>
                      {productCategories &&
                        productCategories.map((category, i) => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                    </select> */}
                {errors.categories && (
                  <p className="danger">{errors.categories}</p>
                )}
              </div>
            </div>
            <button
              className="btn1"
              type="submit"
              disabled={Object.values(errors).length > 0 ? true : false}
            >
              Create!
            </button>
          </form>
        </div>
      </div>
    </LayoutPrimary>
  );
}
