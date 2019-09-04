// @flow
import INITIAL_STATE from "./state";
import Types from "./constants";

const addProductsState = (state, action) => {
  const productsExists = state.products.find(
    item => item.id === action.payload.id
  );

  let newProducts = [];

  if (!productsExists) {
    newProducts = [...state.products, { ...action.payload, quantity: 1 }];
  } else {
    newProducts = state.products.map(item => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }

  return newProducts;
};

const reducer = (state: Object = INITIAL_STATE, action: Object) => {
  switch (action.type) {
    case Types.UPDATE_PRODUCT:
      return {
        ...state,
        products: addProductsState(state, action)
      };

    case Types.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload)
      };

    case Types.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.total
            };
          }
          return item;
        })
      };

    case Types.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - action.payload.total
                  : item.quantity
            };
          }
          return item;
        })
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
