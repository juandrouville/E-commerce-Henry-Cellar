import {
  GET_ALL_PRODUCTS,
  SORT_BY_PRECIO,
  PRODUCT_DETAIL,
  POST_PRODUCT,
  SEARCH_PRODUCT_BY_NAME,
  NEXT_PAGE,
  PREVIUS_PAGE,
  GET_ALL_CATEGORIES,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  CLEAR_USER,
  GET_ALL_WINERIES,
  GET_USER,
  SET_PAGINATION,
  UNIFY_CARTS_DB_LOCALSTORAGE,
  ADD_TO_FAVOURITE,
  REMOVE_TO_FAVOURITE,
  POST_REVIEW,
  GET_DB_ORDERLINES,
  ADD_PRODUCT_TO_DB_CART,
  REMOVE_ORDERLINE_FROM_DB,
  CLEAR_CART_OF_DB,
  GET_DB_ORDER,
} from "../actions/index";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const favouriteFromLocalStorage = JSON.parse(
  localStorage.getItem("productsFavourite") || "[]"
);

const initialState = {
  productCategories: [],
  getAllProducts: [],
  productDetail: [],
  // searchProductByName: [],
  createdProduct: [],
  page: 0,
  user: undefined,
  productFavourite: favouriteFromLocalStorage,

  setPagination: {
    filter: "",
    valueFilter: "",
  },
  cart: cartFromLocalStorage,
  orderlines: [],
  addProductToDB: undefined,
  orderlineRemoved: undefined,
  clearCartOfDB: 0,
  order: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }
    case GET_ALL_CATEGORIES: {
      return {
        ...state,
        productCategories: action.payload,
      };
    }
    case GET_ALL_WINERIES: {
      return {
        ...state,
        wineries: action.payload,
      };
    }
    case SORT_BY_PRECIO: {
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }
    case POST_PRODUCT: {
      return {
        ...state,
        createdProduct: state.createdProduct.concat(action.payload),
      };
    }
    case PRODUCT_DETAIL: {
      return {
        ...state,
        productDetail: action.payload,
      };
    }
    case POST_REVIEW: {
      return {
        ...state,
        productDetail: action.payload,
      };
    }
    case SEARCH_PRODUCT_BY_NAME: {
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }

    case NEXT_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case PREVIUS_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case SET_PAGINATION: {
      return {
        ...state,
        setPagination: action.payload,
      };
    }
    case ADD_TO_CART: {
      let newItem = state.getAllProducts.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case UNIFY_CARTS_DB_LOCALSTORAGE: {
      return {
        ...state,
        cartDB: action.payload,
      };
    }
    case ADD_TO_FAVOURITE: {
      let newItem = state.getAllProducts.find(
        (product) => product.id === action.payload
      );
      let itemInFavourites = state.productFavourite.find(
        (item) => item.id === newItem.id
      );

      if (itemInFavourites) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          productFavourite: [...state.productFavourite, { ...newItem }],
        };
      }
    }
    case REMOVE_TO_FAVOURITE: {
      return {
        ...state,
        productFavourite: state.productFavourite.filter(
          (p) => p.id !== action.payload
        ),
      };
    }
    case CLEAR_USER: {
      return {
        ...state,
        user: undefined,
      };
    }
    case GET_DB_ORDERLINES: {
      return {
        ...state,
        orderlines: action.payload,
      };
    }
    case ADD_PRODUCT_TO_DB_CART: {
      return {
        ...state,
        addProductToDB: action.payload,
      };
    }
    case REMOVE_ORDERLINE_FROM_DB: {
      return {
        ...state,
        orderlineRemoved: action.payload,
      };
    }
    case CLEAR_CART_OF_DB: {
      return {
        ...state,
        clearCartOfDB: state.clearCartOfDB + 1,
      };
    }
    case GET_DB_ORDER: {
      return {
        ...state,
        order: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
