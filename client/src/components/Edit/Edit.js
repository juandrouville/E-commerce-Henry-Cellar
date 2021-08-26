import {
  clearProductDetail,
  editProduct,
  getAllCategories,
  getProductDetail
} from "actions";
import { validation } from "components/validation/validation";
import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function EditProduct({ id }) {
  const dispatch = useDispatch();
  const productDetail = useSelector(state => state.productDetail);
  const allCategories = useSelector(state => state.productCategories);
  const [state, setState] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    image: "",
    harvest: undefined,
    categories: [],
    winery: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getAllCategories());
    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    let arr = [];
    if (productDetail.categories)
      productDetail.categories.map(category => arr.push(category.name));
    if (productDetail.winery?.name) {
      setState({
        name: productDetail.name,
        price: productDetail.price,
        description: productDetail.description,
        stock: productDetail.stock,
        image: productDetail.image,
        harvest: productDetail.harvest,
        categories: arr,
        winery: productDetail.winery.name
      });
    }
  }, [productDetail]);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
    setErrors(
      validation({
        ...state,
        [e.target.name]: e.target.value
      })
    );
  };

  const handleSelections = e => {
    if (state.categories.includes(e.target.value)) {
      let oldCategories = state.categories;
      let newCategories = oldCategories.filter(
        category => category !== e.target.value
      );
      setState({ ...state, categories: newCategories });
      setErrors(validation({ ...state, categories: newCategories }));
    } else {
      let newCategories = state.categories;
      newCategories.push(e.target.value);
      setState({ ...state, categories: newCategories });
      setErrors(validation({ ...state, categories: newCategories }));
    }
  };

  // onSubmit este form hace un PUT a la ruta editProduct con los valores que cambio

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editProduct({ ...state, id: id }));
    alert("Product edited!");
  };

  let key = 1;

  return (
    <div className="all_products_container">
      <div className="formPost">
        <div className="header">
          <h1>Edit Product</h1>
          <NavLink to="/admin/products">
            <h3>Back to Products</h3>
          </NavLink>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="table">
            <div className="form__inputs">
              <div>
                <label className="title_input">Product Name:</label>
                <input
                  className="checks"
                  type="text"
                  name="name"
                  defaultValue={productDetail.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="danger">{errors.name}</p>}
              </div>
              <div>
                <label className="title_input">Description:</label>
                <textarea
                  className="checks"
                  type="text"
                  name="description"
                  defaultValue={productDetail.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <p className="danger">{errors.description}</p>
                )}
              </div>
              <div>
                <label className="title_input">Price:</label>
                <input
                  className="checks"
                  type="number"
                  min={0}
                  name="price"
                  defaultValue={productDetail.price}
                  onChange={handleChange}
                />
                {errors.price && <p className="danger">{errors.price}</p>}
              </div>
              <div>
                <label className="title_input">Image(URL):</label>
                <input
                  className="checks"
                  type="text"
                  name="image"
                  defaultValue={productDetail.image}
                  onChange={handleChange}
                />
                {errors.image && <p className="danger">{errors.image}</p>}
              </div>
              <div>
                <label className="title_input">Stock:</label>
                <input
                  className="checks"
                  type="number"
                  min={0}
                  name="stock"
                  defaultValue={productDetail.stock}
                  onChange={handleChange}
                />
                {errors.stock && <p className="danger">{errors.stock}</p>}
              </div>

              {state.categories.length && allCategories.length ? (
                <div className="checkbox">
                  <label className="title">Categories: </label>
                  {allCategories.map(category => (
                    <div className="items-label" key={key++}>
                      <label>{category.name}</label>
                      <input
                        className="items-inputs"
                        type="checkbox"
                        value={category.name}
                        defaultChecked={
                          state.categories &&
                          state.categories.includes(category.name)
                        }
                        onClick={handleSelections}
                      ></input>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="checkbox">
                  <label className="title">Categories: </label>
                  {allCategories.map(category => (
                    <div className="items-label" key={key++}>
                      <label>{category.name}</label>
                      <input
                        className="items-inputs"
                        type="checkbox"
                        value={category.name}
                        onClick={handleSelections}
                      ></input>
                    </div>
                  ))}
                </div>
              )}

              {errors.categories && (
                <p className="danger">{errors.categories}</p>
              )}
            </div>
          </div>
        </form>
        <button
          className="btn1"
          type="submit"
          disabled={Object.values(errors).length > 0 ? true : false}
        >
          Edit!
        </button>
      </div>
    </div>
  );
}
