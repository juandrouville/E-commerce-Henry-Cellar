import React, { useEffect } from "react";
import {
  getAllproducts,
  getAllCategories,
  ASC,
  DESC,
  getAllWineries,
  setPagination,
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

export const Filtros = (state) => {
  const allWineries = useSelector((state) => state.wineries);
  const allCategories = useSelector((state) => state.productCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllWineries());
    return function cleanup() {};
  }, [dispatch]);

  const handleChangeCategory = (e) => {
    dispatch(setPagination("categoria", e.target.value));
    if (e.target.value === "All") {
      dispatch(getAllproducts());
    } else {
      dispatch(getAllproducts(null, "categoria", e.target.value));
    }
  };
  const handleChangeBodega = (e) => {
    dispatch(setPagination("bodega", e.target.value));
    if (e.target.value === "All") {
      dispatch(getAllproducts());
    } else {
      dispatch(getAllproducts(null, "bodega", e.target.value));
    }
  };
  const handleChangePrecio = (e) => {
    dispatch(setPagination("precio", e.target.value));
    if (e.target.value === "Select") {
      dispatch(getAllproducts());
    }
    if (e.target.value === ASC || e.target.value === DESC) {
      dispatch(getAllproducts(null, "precio", e.target.value));
    }
  };

  return (
    <div className="filtros">
      <ul className="filtros__container">
        <li className="filters">
          Filter by Category
          <select className="hide" onChange={(e) => handleChangeCategory(e)}>
            <option className="filter"></option>
            {allCategories.length &&
              allCategories.map((category) => <option>{category.name}</option>)}
          </select>
        </li>
        <li className="filters">
          Filter X price
          <select className="hide" onChange={(e) => handleChangePrecio(e)}>
            <option className="filter">Select</option>
            <option className="filter">Ascendant</option>
            <option className="filter">Descendant</option>
          </select>
        </li>
        <li className="filters">
          Filter by Wineries
          <select className="hide" onChange={(e) => handleChangeBodega(e)}>
            <option className="filter"></option>
            {allWineries && allWineries.map((b) => <option>{b.name}</option>)}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Filtros;
