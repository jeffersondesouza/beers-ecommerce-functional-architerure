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

const loadBeerRequest = payload => ({
  type: Types.LOAD_BEER_REQUEST,
  payload
});

const loadBeerSuccess = payload => ({
  type: Types.LOAD_BEER_SUCCESS,
  payload
});

const loadBeerFailure = payload => ({
  type: Types.LOAD_BEER_FAILURE,
  payload
});

export default {
  loadBeersRequest,
  loadBeersSuccess,
  loadBeersFailure,
  loadBeerRequest,
  loadBeerSuccess,
  loadBeerFailure
};
