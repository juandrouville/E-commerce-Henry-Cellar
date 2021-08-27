import React, { useEffect } from "react";
import {
  getAllproducts,
  getAllCategories,
  ASC,
  DESC,
  getAllWineries,
  setPagination,
  getAllPairing,
  filtroMaxMin
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { get } from "react-hook-form";

const Filtros = state => {
  const allPairing = useSelector(state => state.pairings);
  const allWineries = useSelector(state => state.wineries);
  const allCategories = useSelector(state => state.productCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllWineries());
    dispatch(getAllPairing());
    return function cleanup() {};
  }, [dispatch]);

  const handleChangeCategory = e => {
    dispatch(setPagination("categoria", e.target.value));
    if (e.target.value === "Categories") {
      dispatch(getAllproducts());
    } else {
      dispatch(getAllproducts(null, "categoria", e.target.value));
    }
  };
  const handleChangePairing = e => {
    dispatch(setPagination("maridaje", e.target.value));
    if (e.target.value === "Pairing") {
      dispatch(getAllproducts());
    } else {
      dispatch(getAllproducts(null, "maridaje", e.target.value));
    }
  };

  const handleChangeBodega = e => {
    dispatch(setPagination("bodega", e.target.value));
    if (e.target.value === "Wineries") {
      dispatch(getAllproducts());
    } else {
      dispatch(getAllproducts(null, "bodega", e.target.value));
    }
  };

  const handleChangePrecio = e => {
    if (e.target.value === "By Price") {
      dispatch(getAllproducts());
      dispatch(setPagination("precio", e.target.value));
    }
    if (e.target.value === ASC || e.target.value === DESC) {
      dispatch(getAllproducts(null, "precio", e.target.value));
      dispatch(setPagination("precio", e.target.value));
    }
    if (e.target.value === "menor500") {
      dispatch(getAllproducts(null, "maxmin", 0, 500));
      dispatch(setPagination("maxmin", 0, 500));
    }
    if (e.target.value === "500a1000") {
      dispatch(getAllproducts(null, "maxmin", 500, 1000));
      dispatch(setPagination("maxmin", 500, 1000));
    }
    if (e.target.value === "1000a1500") {
      dispatch(getAllproducts(null, "maxmin", 1000, 1500));
      dispatch(setPagination("maxmin", 1000, 1500));
    }
    if (e.target.value === "1500a2000") {
      dispatch(getAllproducts(null, "maxmin", 1500, 2000));
      dispatch(setPagination("maxmin", 1500, 2000));
    }
    if (e.target.value === "mayor2000") {
      dispatch(getAllproducts(null, "maxmin", 2000, 99999));
      dispatch(setPagination("maxmin", 2000, 99999));
    }
  };
  return (
    <div className="body-filtros">
      <div className="filters-container">
        <div className="one-filter">
          <select
            className="barSelect"
            defaultValue="Categories"
            onChange={e => handleChangeCategory(e)}
          >
            <option className="disabled" selected>
              Categories
            </option>
            {allCategories.length &&
              allCategories.map(category => (
                <option key={category.id}>{category.name}</option>
              ))}
          </select>
        </div>

        <div className="one-filter">
          <select className="barSelect" onChange={e => handleChangePrecio(e)}>
            <option className="disabled"> By Price </option>
            <option>Ascendant</option>
            <option>Descendant</option>
            <option value="menor500">$0 - $500</option>
            <option value="500a1000">$500 - $1000</option>
            <option value="1000a1500">$1000 - $1500</option>
            <option value="1500a2000">$1500 - $2000</option>
            <option value="mayor2000">Over $2000</option>
          </select>
        </div>

        <div className="one-filter">
          <select className="barSelect" onChange={e => handleChangeBodega(e)}>
            <option className="disabled" selected>
              Wineries
            </option>
            {allWineries &&
              allWineries.map(b => <option key={b.id}>{b.name}</option>)}
          </select>
        </div>
        <div className="one-filter">
          <select className="barSelect" onChange={e => handleChangePairing(e)}>
            <option className="disabled" selected>
              Pairing
            </option>
            {allPairing &&
              allPairing.map(b => <option key={b.id}>{b.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filtros;
