import React, { useEffect } from "react";
import {
  getAllproducts,
  getAllCategories,
  setPagination
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const ReverseFilter = state => {
  const allCategories = useSelector(state => state.productCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    return function cleanup() {};
  }, [dispatch]);

  const handleChangeCategory = e => {
    dispatch(setPagination("categoria", e.target.value));
    if (e.target.value === "All") {
      dispatch(getAllproducts());
    } else {
      dispatch(getAllproducts(null, "categoria", e.target.value));
    }
  };

  return (
    <div className="filtros">
      <ul className="filtros__container">
        <li className="filters">
          Filter by Category
          <select className="hide" onChange={e => handleChangeCategory(e)}>
            <option className="filter"></option>
            {allCategories.length &&
              allCategories.map(category => <option>{category.name}</option>)}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default ReverseFilter;
