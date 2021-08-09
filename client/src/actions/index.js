import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SORT_BY_PRECIO = "SORT_BY_PRECIO";
export const POST_PRODUCT = "POST_PRODUCT";
export const FILTRO_BODEGA = "FILTRO_BODEGA";
export const FILTRO_CATEGORIA = "FILTRO_CATEGORIA";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const SEARCH_PROCUCT_BY_NAME = "SEARCH_PROCUCT_BY_NAME";
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
export function getProductDetail(id) {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/product/" + id);
    const V = res.data;
    dispatch({ type: PRODUCT_DETAIL, payload: V });
  };
}
export function clearProductDetail() {
  return {
    type: PRODUCT_DETAIL,
    payload: [],
  };
}

//try catch para determinar si el error está en esta acción
export function postProduct(input) {
  return async (dispatch) => {
    try {
      const res = axios.post("http://localhost:3001/postproduct/", input);
      dispatch({ type: POST_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}

export function searchProductByName(name) {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `http://localhost:3001/productSearch?name=${name}`
      );
      dispatch({ type: SEARCH_PROCUCT_BY_NAME, payload: products.data });
    } catch (error) {
      console.log(error);
    }
  };
}
