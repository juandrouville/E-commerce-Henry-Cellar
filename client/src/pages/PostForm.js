import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postProduct, getAllCategories } from "../actions";
import wineimage from "assets/images/create-wine-image.jpeg";
import { validation } from "../components/validation/validation.js";
import LayoutPrimary from "../layouts/layout-primary.js";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";

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
  
      <div className="all_products_container">
        <div className="formPost">
          <h1>Create Product</h1>
          <form onSubmit={handleSubmit}>
          <div className="table" >
            <img src={wineimage} alt="Loading..."/>
            <div className="form__inputs">
              <div>
                <label className="title_input">Product name</label>
                <input
                  className="checks"
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={input.name}
                  autoComplete="off"
                />
                {errors.name && <p className="danger">{errors.name}</p>}
              </div>
              <div>
                <label className="title_input" >Winery</label>
                <input
                  className="checks"
                  type="text"
                  name="winery"
                  onChange={handleInputChange}
                  value={input.winery}
                  autoComplete="off"
                />{" "}
                {errors.winery && <p className="danger">{errors.winery}</p>}
              </div>
              <div>
                <label className="title_input" >Price</label>
                <input
                  className="checks"
                  type="number"
                  name="price"
                  onChange={handleInputChange}
                  value={input.price}
                />
                {errors.price && <p className="danger">{errors.price}</p>}
              </div>
              <div>
                <label className="title_input">Description</label>
                <textarea
                  className="checks"
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
                <label className="title_input">Stock</label>
                <input
                  className="checks"
                  type="number"
                  name="stock"
                  onChange={handleInputChange}
                  value={input.stock}
                />
                {errors.stock && <p className="danger">{errors.stock}</p>}
              </div>
              </div>
              <div className="checkbox">
                <label className="title">Categories</label>
                {allCategories.length &&
                  allCategories.map((category) => (
                    <div key={category.id} className="items-label" >
                      <label >{category.name}</label>
                      <input
                        type="checkbox"
                        value={category.name}
                        onClick={handleSelections}
                        className="items-inputs"
                      ></input>
                    </div>
                  ))}
                {errors.categories && (
                  <p className="danger">{errors.categories}</p>
                )}
              </div>
            </div>
          </form>
            <button
                className="btn1"
                type="submit"
                disabled={Object.values(errors).length > 0 ? true : false} >
                Create!
              </button>
        </div>
      </div>
  );
}
              
            
