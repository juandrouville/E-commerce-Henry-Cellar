import {
  GET_ALL_PRODUCTS,
  SORT_BY_PRECIO,
  PRODUCT_DETAIL,
  POST_PRODUCT,
  SEARCH_PROCUCT_BY_NAME,
  GET_ALL_CATEGORIES
} from "../actions/index";

const initialState = {
  prueba: [],
  getAllProducts: [],
  productDetail: [],
  searchProductByName: [],
  createdProduct: [],
  allCategories:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        getAllProducts: action.payload,
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
    case SEARCH_PROCUCT_BY_NAME: {
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }
    case GET_ALL_CATEGORIES:{
      return {
        ...state,
        allCategories:action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
