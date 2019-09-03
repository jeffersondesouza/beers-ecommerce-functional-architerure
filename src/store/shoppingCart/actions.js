import type { ActionType } from "../../models/types/ActionType";

import Types from "./constants";

const addProduct = (payload): ActionType => ({
  type: Types.ADD_PRODUCT,
  payload
});

const removeProduct = (id): ActionType => ({
  type: Types.REMOVE_PRODUCT,
  payload: id
});

const increaseProduct = (id, total = 1): ActionType => ({
  type: Types.INCREASE_PRODUCT,
  payload: { id, total }
});

const decreaseProduct = (id, total = 1): ActionType => ({
  type: Types.DECREASE_PRODUCT,
  payload: { id, total }
});

const buyRequest = (payload): ActionType => ({
  type: Types.BUY_REQUEST,
  payload
});

const buySuccess = (payload): ActionType => ({
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
