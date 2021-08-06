import (GET_ALL_PRODUCTS, SORT_BY_PRECIO)
const initialState = {
  prueba: [],
  getAllProducts: [],
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
  return state;
};


export default rootReducer;
