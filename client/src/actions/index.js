import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_ALL_WINERIES = "GET_ALL_WINERIES";
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
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";



export function getAllproducts(page) {
  if (!page) {
    page = 0;
  }
  return async (dispatch) => {
    const res = await axios.get(`/allproducts?page=${page}`|| `http://localhost:3001/allproducts?page=${page}`);
    const V = res.data;
    dispatch({ type: GET_ALL_PRODUCTS, payload: V });
  };
}


export function getAllCategories() {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/categories`);
    dispatch({ type: GET_ALL_CATEGORIES, payload: res.data });
  };
}
export function getAllWineries() {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/wineries`);
    dispatch({ type: GET_ALL_WINERIES, payload: res.data });
  };
}
export function sortByPrecio(precio,page) {
  if(!page){page = 0}

  return function (dispatch) {
    axios
      .get(`http://localhost:3001/allproducts?precio=${precio}`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroCategoria(categoria) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/allproducts?categoria=${categoria}`)
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroBodega(bodega) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/allproducts?bodega=${bodega}`)
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

export function addCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}