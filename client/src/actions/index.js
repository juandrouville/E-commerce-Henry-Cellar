import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SORT_BY_PRECIO = "SORT_BY_PRECIO";
export const POST_PRODUCT = "POST_PRODUCT";
export const FILTRO_BODEGA = "FILTRO_BODEGA";
export const FILTRO_CATEGORIA = "FILTRO_CATEGORIA";
export const ASC = "Ascendant";
export const DESC = "Descendant";

export function getAllproducts() {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/allproducts");
    const V = res.data;

    dispatch({ type: GET_ALL_PRODUCTS, payload: V });
  };
}

export function sortByPrecio(order) {
  return function (dispatch) {
    axios
      .get(`"http://localhost:3001/allproducts?order=${order}`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroCategoria(categoria) {
  return function (dispatch) {
    axios
      .get(`"http://localhost:3001/allproducts?order=${categoria}`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroBodega(bodega) {
  return function (dispatch) {
    axios
      .get(`"http://localhost:3001/allproducts?order=${bodega}`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

//try catch para determinar si el error está en esta acción
export function postProduct(input) {
  return async (dispatch) => {
    try {
      const res = axios.post("hhtp://localhost:3001/allproductos", input);
      dispatch({ type: POST_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}
