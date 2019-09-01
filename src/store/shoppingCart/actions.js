import Types from "./constants";

const addProduct = payload => ({
  type: Types.ADD_PRODUCT,
  payload
});

const removeProduct = id => ({
  type: Types.REMOVE_PRODUCT,
  payload: id
});

const increaseProduct = (id, total = 1) => ({
  type: Types.INCREASE_PRODUCT,
  payload: { id, total }
});

const decreaseProduct = (id, total = 1) => ({
  type: Types.DECREASE_PRODUCT,
  payload: { id, total }
});

const buyRequest = payload => ({
  type: Types.BUY_REQUEST,
  payload
});

const buySuccess = payload => ({
  type: Types.BUY_SUCCESS,
  payload
});

const buyFailure = error => ({
  type: Types.BUY_FAILURE,
  payload: error
});

export default {
  addProduct,
  removeProduct,
  increaseProduct,
  decreaseProduct,
  buyRequest,
  buySuccess,
  buyFailure
};
