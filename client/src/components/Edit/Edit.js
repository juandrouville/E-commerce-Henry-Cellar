import {
  clearProductDetail,
  editProduct,
  getAllCategories,
  getProductDetail,
} from "actions";
import { validation } from "components/validation/validation";
import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../layouts/layout-primary";

export default function Edit({ id }) {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const allCategories = useSelector((state) => state.productCategories);
  const [state, setState] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    image: "",
    harvest: undefined,
    categories: [],
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
      productDetail.categories.map((category) => arr.push(category.name));
    setState({
      name: productDetail.name,
      price: productDetail.price,
      description: productDetail.description,
      stock: productDetail.stock,
      image: productDetail.image,
      harvest: productDetail.harvest,
      categories: arr,
    });
  }, [productDetail]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setErrors(
      validation({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelections = (e) => {
    if (state.categories.includes(e.target.value)) {
      let oldCategories = state.categories;
      let newCategories = oldCategories.filter(
        (category) => category !== e.target.value
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct({ ...state, id: id }));
    alert("Product edited!");
  };

  let key = 1;

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit} className="form__container">
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={productDetail.name}
              onChange={handleChange}
            />
            {errors.name && <p className="danger">{errors.name}</p>}
          </div>
          <div>
            <label>Description:</label>
            <textarea
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
            <label>Price:</label>
            <input
              type="number"
              min={0}
              name="price"
              defaultValue={productDetail.price}
              onChange={handleChange}
            />
            {errors.price && <p className="danger">{errors.price}</p>}
          </div>
          <div>
            <label>Image(URL):</label>
            <input
              type="text"
              name="image"
              defaultValue={productDetail.image}
              onChange={handleChange}
            />
            {errors.image && <p className="danger">{errors.image}</p>}
          </div>
          <div>
            <label>Stock:</label>
            <input
              type="number"
              min={0}
              name="stock"
              defaultValue={productDetail.stock}
              onChange={handleChange}
            />
            {errors.stock && <p className="danger">{errors.stock}</p>}
          </div>
          <div>
            {state.categories.length && allCategories.length ? (
              <label>
                Categories:
                {allCategories.map((category) => (
                  <div key={key++}>
                    <label>{category.name}</label>
                    <input
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
              </label>
            ) : (
              <label>
                Categories:
                {allCategories.map((category) => (
                  <div key={key++}>
                    <label>{category.name}</label>
                    <input
                      type="checkbox"
                      value={category.name}
                      onClick={handleSelections}
                    ></input>
                  </div>
                ))}
              </label>
            )}

            {errors.categories && <p className="danger">{errors.categories}</p>}
          </div>
          <input
            type="submit"
            value="Edit"
            disabled={Object.values(errors).length > 0 ? true : false}
          />
        </form>
      </div>
    </Layout>
  );
}
