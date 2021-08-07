import {
  GET_ALL_PRODUCTS,
  SORT_BY_PRECIO,
  PRODUCT_DETAIL,
  POST_PRODUCT,
  SEARCH_PROCUCT_BY_NAME,
} from "../actions/index";

const initialState = {
  prueba: [],
  getAllProducts: [],
  productDetail: [],
  searchProductByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case GET_ALL_PRODUCTS:{
      return {
        ...state,
        getAllProducts: action.payload,
      };
    }
    case SORT_BY_PRECIO:{
      return {
        ...state,
        getAllProducts: action.payload,
        };
      }
    case POST_PRODUCT:{
      return {
        ...state,
        createdProduct: state.createdProduct.concat(action.payload),
        };
      }
    case PRODUCT_DETAIL:{
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
  }
};


export default rootReducer;
