import { GET_ALL_PRODUCTS, SORT_BY_PRECIO, PRODUCT_DETAIL } from "../actions/index";
//fixed import
const initialState = {
  prueba: [],
  getAllProducts: [],
  productDetail: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      getAllProducts: action.payload
    }
  }
  if (action.type === "SORT_BY_PRECIO") {
    return {
      ...state,
      getAllProducts: action.payload
    }
  }
  if (action.type === PRODUCT_DETAIL) {

    return {
      ...state,
      productDetail: action.payload
    }

  }
  return state;
};


export default rootReducer;
