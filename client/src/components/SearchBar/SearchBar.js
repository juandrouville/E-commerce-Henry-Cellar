import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductByName, getAllproducts } from "../../actions/index";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

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
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          value={name}
          type="search"
          placeholder="Search product"
          onChange={e => handleInputChange(e)}
        />
        <div className="btn">
          <button type="submit"><AiIcons.AiOutlineSearch size={36}/></button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
