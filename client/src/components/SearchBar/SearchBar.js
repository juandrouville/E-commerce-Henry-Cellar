import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductByName } from "../../actions/index";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(searchProductByName(name));
  };

  return (
    <div className="search-box">
      <input
        className="search-txt"
        type="search"
        placeholder="Search for products"
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={(e) => handleClick(e)}>Find</button>
    </div>
  );
};

export default SearchBar;
