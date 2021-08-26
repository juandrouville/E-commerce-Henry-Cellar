import React, { useEffect } from "react";
import {
  getAllproducts,
  getAllCategories,
  ASC,
  DESC,
  getAllWineries,
  setPagination,
  getAllPairing
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const Filtros = (state) => {
  const allPairing = useSelector((state) => state.pairings)
  const allWineries = useSelector((state) => state.wineries);
  const allCategories = useSelector((state) => state.productCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllWineries());
    dispatch(getAllPairing())
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
  const handleChangePairing = (e) => {
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
    dispatch(setPagination("precio", e.target.value));
    if (e.target.value === "By Price") {
      dispatch(getAllproducts());
    }
    if (e.target.value === ASC || e.target.value === DESC) {
      dispatch(getAllproducts(null, "precio", e.target.value));
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
          </select>
        </div>

          <div className="one-filter">
            <select className="barSelect" onChange={(e) => handleChangeBodega(e)}>
              <option className="disabled" selected>Wineries</option>
              {allWineries && allWineries.map((b) =>
              <option key={b.id}>{b.name}</option>)}
            </select>
          </div>
          <div className="one-filter">
            <select className="barSelect" onChange={(e) => handleChangePairing(e)}>
              <option className="disabled" selected>Pairing</option>
              {allPairing && allPairing.map((b) =>
              <option key={b.id}>{b.name}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtros;
