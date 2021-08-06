const initialState = {
  prueba: [],
  getAllProducts: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_PRODUCTS") {
    return {
      ...state,
      getAllProducts: action.payload
    }
  }
  return state;
};

export default rootReducer;
