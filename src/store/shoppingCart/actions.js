import Action from "./../utils/types/Action";

import Types from "./constants";

const addProduct = (payload): Action => ({
  type: Types.ADD_PRODUCT,
  payload
});

const removeProduct = (id): Action => ({
  type: Types.REMOVE_PRODUCT,
  payload: id
});

const increaseProduct = (id, total = 1): Action => ({
  type: Types.INCREASE_PRODUCT,
  payload: { id, total }
});

const decreaseProduct = (id, total = 1): Action => ({
  type: Types.DECREASE_PRODUCT,
  payload: { id, total }
});

const buyRequest = (payload): Action => ({
  type: Types.BUY_REQUEST,
  payload
});

const buySuccess = (payload): Action => ({
  type: Types.BUY_SUCCESS,
  payload
});

const buyFailure = (error: { msg: string }): Action => ({
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
