import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductByName, getAllproducts } from "../../actions/index";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = event => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name === "") dispatch(getAllproducts());
    else {
      dispatch(searchProductByName(name));
      setName("");
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="search"
          placeholder="Search for products"
          onChange={e => handleInputChange(e)}
        />
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

export default SearchBar;
