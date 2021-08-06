import {
  GET_ALL_PRODUCTS,
  SORT_BY_PRECIO,
  PRODUCT_DETAIL,
  POST_PRODUCT,
} from "../actions/index";
//fixed import
const initialState = {
  prueba: [],
  getAllProducts: [],
  productDetail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getAllProducts: action.payload,
      };
    case SORT_BY_PRECIO:
      return {
        ...state,
        getAllProducts: action.payload,
      };
      return state;
    case POST_PRODUCT:
      return {
        ...state,
        createdProduct: state.createdProduct.concat(action.payload),
      };
    case SORT_BY_PRECIO:
      return {
        ...state,
        getAllProducts: action.payload,
      };
    case PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
  }
  return state;
};
export default rootReducer;
