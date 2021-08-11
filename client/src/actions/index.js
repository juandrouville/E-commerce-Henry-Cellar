import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const SORT_BY_PRECIO = "SORT_BY_PRECIO";
export const POST_PRODUCT = "POST_PRODUCT";
export const FILTRO_BODEGA = "FILTRO_BODEGA";
export const FILTRO_CATEGORIA = "FILTRO_CATEGORIA";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const SEARCH_PROCUCT_BY_NAME = "SEARCH_PROCUCT_BY_NAME";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIUS_PAGE = "PREVIUS_PAGE";
export const ASC = "Ascendant";
export const DESC = "Descendant";

export function getAllproducts(page) {
  if (!page) {
    page = 0;
  }
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/allproducts?page=${page}`);
    const response = res.data;
    dispatch({ type: GET_ALL_PRODUCTS, payload: response });
  };
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5d5277301b46c2b81df689e170805b7a0a791fa0
export function getAllCategories() {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/categories`);
    dispatch({ type: GET_ALL_CATEGORIES, payload: res.data });
  };
}

<<<<<<< HEAD
export function sortByPrecio(order) {
=======
export function sortByPrecio(precio) {
>>>>>>> Lopez
=======

export function sortByPrecio(order,page) {
  if(!page){page = 0}
>>>>>>> 5d5277301b46c2b81df689e170805b7a0a791fa0
  return function (dispatch) {
    axios
      .get(`"http://localhost:3001/allproducts?order=${order}&page=${page}`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroCategoria(categoria) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/allproducts?order=${categoria}`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroBodega(bodega) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/allproducts?order=${bodega}`)
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
      const res = await axios.post("http://localhost:3001/postproduct/", input);
      dispatch({ type: POST_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}

export function searchProductByName(name,page) {
  if (!page){page = 0 }
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `http://localhost:3001/productSearch?name=${name}&page=${page}`
      );
      dispatch({ type: SEARCH_PROCUCT_BY_NAME, payload: products.data });
    } catch (error) {
      console.log(error);
    }
  };
}

//Paginado ?page=${page}

export function nextPage(page) {
  return {
    type: NEXT_PAGE,
    payload: page,
  };
}

export function prevPage(page) {
  return {
    type: PREVIUS_PAGE,
    payload: page,
  };
}
