import {
  GET_ALL_PRODUCTS,
  SORT_BY_PRECIO,
  POST_PRODUCT,
} from "../actions/index";
//fixed import
const initialState = {
  prueba: [],
  getAllProducts: [],
  createdProduct: [],
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
  }
};

export default rootReducer;
