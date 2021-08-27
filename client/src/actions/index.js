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
export const GET_USER = "GET_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const CLEAR_USER = "CLEAR_USER";
export const SET_PAGINATION = "SET_PAGINATION";
export const UNIFY_CARTS_DB_LOCALSTORAGE = "UNIFY_CARTS_DB_LOCALSTORAGE";
export const EDIT_FAVORITES = "EDIT_FAVORITES";
export const GET_FAVORITES = "GET_FAVORITES";
export const POST_REVIEW = "POST_REVIEW";
export const GET_DB_ORDERLINES = "GET_DB_ORDERLINES";
export const ADD_PRODUCT_TO_DB_CART = "ADD_PRODUCT_TO_DB_CART";
export const REMOVE_ORDERLINE_FROM_DB = "REMOVE_ORDERLINE_FROM_DB";
export const CLEAR_CART_OF_DB = "CLEAR_CART_OF_DB";
export const GET_DB_ORDER = "GET_DB_ORDER";
export const USER_ID = "USER_ID";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const GET_ALL_ORDERS="GET_ALL_ORDERS"
export const EDIT_ORDER="EDIT_ORDER"
export const EDIT_USER="EDIT_USER"
export const CLEAR_ALL_USERS="CLEAR_ALL_USERS"
export const CLEAR_ALL_ORDERS="CLEAR_ALL_ORDERS"
export const GET_ALL_PAIRING="GET_ALL_PAIRING"


export function sortByPrecio(page, order) {
  if (!page) {
    page = 0;
  }

  return function(dispatch) {
    axios
      .get(
        `/allproducts?precio=${order}&page=${page}` ||
          `http://localhost:3001/allproducts?precio=${order}&page=${page}`
      )
      .then(res => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function filtroCategoria(page, categoria) {
  if (!page) {
    page = 0;
  }
  return function(dispatch) {
    axios
      .get(
        `/allproducts?categoria=${categoria}&page=${page}` ||
          `http://localhost:3001/allproducts?categoria=${categoria}&page=${page}`
      )
      .then(res => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}
export function filtroMaxMin(page, min, max) {
  if (!page) {
    page = 0;
  }
  return function(dispatch) {
    axios
      .get(
        `allproducts?min=${min}&max=${max}&page=${page}` ||
          `http://localhost:3001/allproducts?min=${min}&max=${max}&page=${page}`
      )
      .then(res => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}
export function filtroMaridaje(page, maridaje) {
  if (!page) {
    page = 0;
  }
  return function(dispatch) {
    axios
      .get(
        `/allproducts?maridaje=${maridaje}&page=${page}` ||
          `http://localhost:3001/allproducts?maridaje=${maridaje}&page=${page}`
      )
      .then(res => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}
export function filtroBodega(page, bodega) {
  if (!page) {
    page = 0;
  }
  return function(dispatch) {
    axios
      .get(
        `/allproducts?bodega=${bodega}&page=${page}` ||
          `http://localhost:3001/allproducts?bodega=${bodega}&page=${page}`
      )
      .then(res => {
        dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
      });
  };
}

export function getAllproducts(page, filter, valuefilter,valuefilter2) {
  if (!page) {
    page = 0;
  }
  console.log(filter, valuefilter);
  if (filter === "precio") {
    return sortByPrecio(page, valuefilter);
  }
  if (filter === "categoria") {
    return filtroCategoria(page, valuefilter);
  }
  if (filter === "bodega") {
    return filtroBodega(page, valuefilter);
  }
  if (filter === "maridaje") {
    return filtroMaridaje(page, valuefilter);
  }
  if (filter === "maxmin") {
    return filtroMaxMin(page, valuefilter,valuefilter2);
  }
  if (!filter) {
    return async dispatch => {
      const res = await axios.get(
        `/allproducts?page=${page}` ||
          `http://localhost:3001/allproducts?page=${page}`
      );
      const V = res.data;
      dispatch({ type: GET_ALL_PRODUCTS, payload: V });
    };
  }
}

export function getAllUsers() {
  return async dispatch => {
    const res = await axios.get(
      `/getAllUsers` || `http://localhost:3001/getAllUsers`
    );
    const V = res.data;
    dispatch({ type: GET_ALL_USERS, payload: V });
  };
}

export function getAllCategories() {
  return async dispatch => {
    const res = await axios.get(
      `/categories` || `http://localhost:3001/categories`
    );
    dispatch({ type: GET_ALL_CATEGORIES, payload: res.data });
  };
}
export function getAllPairing() {
  return async dispatch => {
    const res = await axios.get(
      `/Pairing` || `http://localhost:3001/Pairing`
    );
    dispatch({ type: GET_ALL_PAIRING, payload: res.data });
  };
}
export function getAllWineries() {
  return async dispatch => {
    const res = await axios.get(
      `/wineries` || `http://localhost:3001/wineries`
    );
    dispatch({ type: GET_ALL_WINERIES, payload: res.data });
  };
}

export function getProductDetail(id) {
  return async dispatch => {
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
    payload: []
  };
}

//try catch para determinar si el error está en esta acción
export function postProduct(input) {
  return async dispatch => {
    try {
      const res = await axios.post(
        `/postproduct/` || `http://localhost:3001/postproduct/`,
        input
      );
      dispatch({ type: POST_PRODUCT, payload: res.data });
    } catch (err) {
      alert("HEMOSIDO TIMADO -error en post-");
    }
  };
}

export function editProduct(product) {
  return async dispatch => {
    try {
      const res = await axios.put(
        `/editProduct/${product.id}` ||
          `http://localhost:3001/editProduct/${product.id}`,
        product
      );
      dispatch({ type: EDIT_PRODUCT, payload: res.data });
    } catch (err) {
      alert("khe -error en edit product-");
    }
  };
}

export function searchProductByName(name) {
  return async dispatch => {
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
    payload: page
  };
}

export function prevPage(page) {
  return {
    type: PREVIUS_PAGE,
    payload: page
  };
}

export function addCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART
  };
}

export function removeOneProduct(id) {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id
  };
}

export function removeAllProduct(id) {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: id
  };
}

export function getUser(userData) {
  return async dispatch => {
    try {
      const res = await axios.post(
        `/getUser/${userData.sub}` ||
          `http://localhost:3001/getUser/${userData.sub}`,
        userData
      );
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      alert("Pero keapasao -error en get user-");
    }
  };
}

export function setPagination(filter, valueFilter,valueFilter2) {
  return {
    type: SET_PAGINATION,
    payload: {
      filter,
      valueFilter,
      valueFilter2,
    }
  };
}

export function unifyCarts(userId, localStorageCart) {
  return async dispatch => {
    try {
      const res = await axios.post(
        `/unifyCarts/${userId}` || `http://localhost:3001/unifyCarts/${userId}`,
        localStorageCart
      );
      dispatch({ type: UNIFY_CARTS_DB_LOCALSTORAGE, payload: res.data });
    } catch (err) {
      alert("Error epicardo -error en unify carts-");
    }
  };
}

export function editFavorites(productId, userId, remove = false) {
  return async dispatch => {
    try {
      const res = await axios.post(
        `/editFavorites/${userId}` ||
          `http://localhost:3001/editFavorites/${userId}`,
        { productId: productId, remove: remove }
      );
      dispatch({ type: EDIT_FAVORITES, payload: res.data });
    } catch (error) {
      alert("ERROR AL EDITAR PRODUCTOS FAVORITOS");
    }
  };
}

export function getFavorites(userId) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `/getFavorites/${userId}` ||
          `http://localhost:3001/getFavorites/${userId}`
      );
      dispatch({ type: GET_FAVORITES, payload: res.data });
    } catch (error) {
      alert("ERROR AL OBTENER PRODUCTOS FAVORITOS");
    }
  };
}

export function addProductToDBCart(productId, userId) {
  return async dispatch => {
    try {
      const res = await axios.post(
        `/addProductToDBCart/${userId}` ||
          `http://localhost:3001/addProductToDBCart/${userId}`,
        { productId: productId }
      );
      dispatch({ type: ADD_PRODUCT_TO_DB_CART, payload: res.data });
    } catch (error) {
      alert("ERROR EN AGREGAR PRODUCTO A LA DB");
    }
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER
  };
}

export function postReview(review) {
  return dispatch => {
    axios
      .post(`/postReview` || `http://localhost:3001/postReview`, { ...review })
      .then(res => {
        dispatch({ type: POST_REVIEW, payload: res.data });
      })
      .catch(error => {
        alert("ERROR AL CREAR REVIEW");
      });
  };
}

export function getOrderlines(cartId) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `/getOrderlines/${cartId}` ||
          `http://localhost:3001/getOrderlines/${cartId}`
      );
      dispatch({ type: GET_DB_ORDERLINES, payload: res.data });
    } catch (error) {
      alert("ERROR EN OBTENER LAS ORDERLINES DE LA DB");
    }
  };
}

export function removeOrderline(orderlineId, deleteAll = false) {
  return async dispatch => {
    try {
      const res = await axios.delete(
        `/removeOrderline/${orderlineId}?all=${deleteAll}` ||
          `http://localhost:3001/removeOrderline/${orderlineId}?all=${deleteAll}`
      );
      dispatch({ type: REMOVE_ORDERLINE_FROM_DB, payload: res.data });
    } catch (error) {
      alert("ERROR AL ELIMNAR LA ORDERLINE DE LA DB");
    }
  };
}
let id=1

export function clearCartOfDB(orderId) {
  return async dispatch => {
    try {
      const res = await axios.delete(
        `/clearCart/${orderId}` || `http://localhost:3001/clearCart/${orderId}`
      );
      dispatch({ type: CLEAR_CART_OF_DB, payload: id++});
    } catch (error) {
      alert("ERROR AL LIMPIAR EL CARRITO EN LA BASE DE DATOS");
    }
  };
}

export function getDbOrder(id) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `/getorder/` + id || `http://localhost:3001/getorder/` + id
      );
      

      dispatch({ type: GET_DB_ORDER, payload: res.data });
    } catch (error) {
      alert("ERROR AL OBTENER TODAS LAS ORDENES");
    }
  };
}

export function userid() {
  return {
    type: USER_ID
  };
}

export function removeProduct(id) {
  return async dispatch => {
    try {
      const res = await axios.delete(
        `/removeProduct/${id}` || `http://localhost:3001/removeProduct/${id}`
      );
      dispatch({ type: REMOVE_PRODUCT, payload: res.data });
    } catch (error) {
      alert("Se chingó el sistema -remove product error-");
    }
  };
}

export function getAllOrders() {
  return async dispatch => {
    try {
      const res = await axios.get(
        `/getAllOrders` || `http://localhost:3001/getAllOrders`
      );
      dispatch({ type: GET_ALL_ORDERS, payload: res.data });
    } catch (error) {
      alert("ERROR AL OBTENER TODAS LAS ORDENES");
    }
  };
}

export function editOrder(orderId, newValue) {
  return async dispatch => {
    try {
      const res = await axios.put(
        `/editOrder/${orderId}` || `http://localhost:3001/editOrder/${orderId}`,
        { state: newValue.state,
          shippingMethod:newValue.shippingMethod,
          paymentMethod:newValue.paymentMethod,
        }

      );
      dispatch({ type: EDIT_ORDER, payload: res.data });
    } catch (error) {
      alert("ERROR AL EDITAR LA ORDER");
    }
  };
}
export function editUser(userId,newValue){
  return async dispatch => {
    try {
      const res = await axios.put(
        `/editUser/${userId}` || `http://localhost:3001/editUser/${userId}`,
        newValue
      );
      dispatch({ type: EDIT_USER, payload: res.data });
    } catch (error) {
      alert("ERROR AL EDITAR EL USUARIO");
    }
  };
}

export function clearAllUsers(){
  return {
    type:CLEAR_ALL_USERS
  }
}
export function clearAllOrders(){
  return {
    type:CLEAR_ALL_ORDERS
  }
}

