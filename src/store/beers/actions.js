import Types from "./constants";

const loadBeersRequest = payload => ({
  type: Types.LOAD_BEERS_REQUEST,
  payload
});

const loadBeersSuccess = payload => ({
  type: Types.LOAD_BEERS_SUCCESS,
  payload
});

const loadBeersFailure = payload => ({
  type: Types.LOAD_BEERS_FAILURE,
  payload
});

export default {
  loadBeersRequest,
  loadBeersSuccess,
  loadBeersFailure
};
