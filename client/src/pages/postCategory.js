import React from "react";
import { useDispatch } from "react-redux";
import { postCategory } from "../actions";
import { NavLink } from "react-router-dom";

export default function PostCategory(props) {
  const dispatch = useDispatch();
  //linkear categorias ???

  const [input, setInput] = React.useState({
    name: ""
  });

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  //handle categories ??

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      dispatch(postCategory(input));
      alert("Category successfully created!"); // ver como usar un toast que es mas estetico
      props.history.push("/home");
      console.log(input);
    } catch (err) {
      console.log("error en el submit de category", err);
    }
  };

  // const handleCategories = (e) => {
  //   if (category.length < 1) {
  //     if (!category.includes(e.target.value)) {
  //       setCategory([...category, e.target.value]);
  //     }
  //   }
  // };

  return (
    <div className="all_products_container">
      <div className="formPost">
        <div className="header">
          <h1>Create Category</h1>
          <NavLink to="/admin">
            <h3>Back to Panel</h3>
          </NavLink>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="table">
            <div className="form__inputs">
              <div>
                <label className="title_input">Category name</label>
                <input
                  className="checks"
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={input.name}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </form>
        <button onClick={handleSubmit} className="btn1" type="submit">
          Create!
        </button>
      </div>
    </div>
  );
}
