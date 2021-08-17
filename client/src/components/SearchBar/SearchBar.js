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
    if (name === "") alert("You have to type something!");
    else dispatch(searchProductByName(name));
  };

  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Search for products"
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={(e) => handleClick(e)}>Find</button>
    </div>
  );
};

export default SearchBar;
