import INITIAL_STATE from "./state";
import Types from "./constants";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case Types.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload)
      };

    case Types.BUY_REQUEST:
      return {
        ...state,
        isBuying: true
      };

    case Types.BUY_SUCCESS:
      return {
        ...state,
        isBuying: false,
        products: [],
        error: INITIAL_STATE.error
      };

    case Types.BUY_FAILURE:
      return {
        ...state,
        isBuying: false
      };

    default:
      return state;
  }
};

export default reducer;
