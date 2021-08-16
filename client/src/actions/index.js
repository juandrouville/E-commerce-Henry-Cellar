import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_ALL_WINERIES = "GET_ALL_WINERIES";
export const SORT_BY_PRECIO = "SORT_BY_PRECIO";
export const POST_PRODUCT = "POST_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const FILTRO_BODEGA = "FILTRO_BODEGA";
export const FILTRO_CATEGORIA = "FILTRO_CATEGORIA";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const SEARCH_PRODUCT_BY_NAME = "SEARCH_PRODUCT_BY_NAME";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIUS_PAGE = "PREVIUS_PAGE";
export const ASC = "Ascendant";
export const DESC = "Descendant";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_USER="GET_USER";
export const SET_PAGINATION = "SET_PAGINATION";
export const UNIFY_CARTS_DB_LOCALSTORAGE="UNIFY_CARTS_DB_LOCALSTORAGE"
export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE";
export const REMOVE_TO_FAVOURITE="REMOVE_TO_FAVOURITE"



export function sortByPrecio( page, order) {
  if (!page) {
    page = 0;
  };

  return function (dispatch) {
    axios
      .get(
        `/allproducts?precio=${order}&page=${page}` ||
          `http://localhost:3001/allproducts?precio=${order}&page=${page}`
      )
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroCategoria(page,categoria) {
  if (!page) {
    page = 0;
  };
  return function (dispatch) {
    axios
      .get(
        `/allproducts?categoria=${categoria}&page=${page}` ||
          `http://localhost:3001/allproducts?categoria=${categoria}&page=${page}`
      )
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
};

export function filtroBodega(page,bodega) {
  if (!page) {
    page = 0;
  }
  return function (dispatch) {
    axios
      .get(
        `/allproducts?bodega=${bodega}&page=${page}` ||
          `http://localhost:3001/allproducts?bodega=${bodega}&page=${page}`
      )
      .then((res) => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
};

export function getAllproducts(page,filter,valuefilter) {
  if (!page) {
    page = 0;
  }
  console.log(filter,valuefilter);
  if (filter === 'precio'){
    return sortByPrecio(page, valuefilter);
  };
  if (filter === 'categoria'){
    return filtroCategoria(page,valuefilter);
  };
  if (filter === 'bodega'){
    return filtroBodega(page,valuefilter);
  }
  if(!filter){
    return async (dispatch) => {
      const res = await axios.get(
        `/allproducts?page=${page}` ||
          `http://localhost:3001/allproducts?page=${page}`
      );
      const V = res.data;
      dispatch({ type: GET_ALL_PRODUCTS, payload: V });
    };
  }
};


export function getAllCategories() {
  return async (dispatch) => {
    const res = await axios.get(
      `/categories` || `http://localhost:3001/categories`
    );
    dispatch({ type: GET_ALL_CATEGORIES, payload: res.data });
  };
}
export function getAllWineries() {
  return async (dispatch) => {
    const res = await axios.get(
      `/wineries` || `http://localhost:3001/wineries`
    );
    dispatch({ type: GET_ALL_WINERIES, payload: res.data });
  };
}

export function getProductDetail(id) {
  return async (dispatch) => {
    const res = await axios.get(
      `/product/` + id || `http://localhost:3001/product/` + id
    );
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
      const res = await axios.post(
        `/postproduct/`,
        input || `http://localhost:3001/postproduct/`,
        input
      );
      dispatch({ type: POST_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}

export function editProduct(product) {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `/editProduct/${product.id}`,
        product || `http://localhost:3001/editProduct/${product.id}`,
        product
      );
      dispatch({ type: EDIT_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}

export function searchProductByName(name) {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `/productSearch?name=${name}` ||
          `http://localhost:3001/productSearch?name=${name}`
      );
      dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: products.data });
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

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export function removeOneProduct(id) {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  };
}

export function removeAllProduct(id) {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: id,
  };
}

export function getUser(userData){
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `/getUser/${userData.sub}`|| `http://localhost:3001/getUser/${userData.sub}`,userData
      );
      await dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}

export function setPagination(filter,valueFilter){
  return {
    type: SET_PAGINATION,
    payload:{
      filter,
      valueFilter,
    },
  };
};

export function unifyCarts(userId,localStorageCart){
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `/unifyCarts/${userId}`|| `http://localhost:3001/unifyCarts/${userId}`,localStorageCart
      );
      dispatch({ type: UNIFY_CARTS_DB_LOCALSTORAGE, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}

export function addToFavourite(id){
  return{
    type: ADD_TO_FAVOURITE, 
    payload: id
  };
}

export function removeToFavourite(payload){
  return{
    type: REMOVE_TO_FAVOURITE, payload
  };
}


export async function addProductToDBCart(productId,userId){
    try {
      await axios.post(
        `/addProductToDBCart/${userId}`|| `http://localhost:3001/addProductToDBCart/${userId}`,{productId:productId})
      
    } catch (error) {
      alert('ERROR EN AGREGAR PRODUCTO A LA DB')
    }
}