import INITIAL_STATE from "./state";
import Types from "./actionTypes";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_BEERS:
      return {
        ...state,
        beersList: [...action.payload],
        total: action.payload.length
      };

    case Types.LOAD_BEERS_REQUEST:
      return {
        ...state,
        isLoadingBeers: true,
        loadingBeersSuccess: false,
        loadingBeersFailure: false
      };

    case Types.LOAD_BEERS_SUCCESS:
      return {
        ...state,
        isLoadingBeers: false,
        loadingBeersSuccess: true,
        loadingBeersFailure: false
      };

    case Types.LOAD_BEERS_FAILURE:
      return {
        ...state,
        isLoadingBeers: false,
        loadingBeersSuccess: false,
        loadingBeersFailure: true
      };

    case Types.LOAD_BEER_REQUEST:
      return {
        ...state,
        isLoadingSelectedBeer: true,
        loadingSelectedBeerSuccess: false,
        loadingSelectedBeerFailure: false,
        selectedBeer: {}
      };

    case Types.LOAD_BEER_SUCCESS:
      return {
        ...state,
        isLoadingSelectedBeer: false,
        loadingSelectedBeerSuccess: true,
        loadingSelectedBeerFailure: false
      };

    case Types.UPDATE_BEER:
      return {
        ...state,
        selectedBeer: { ...action.payload }
      };

    case Types.LOAD_BEER_FAILURE:
      return {
        ...state,
        isLoadingSelectedBeer: false,
        loadingSelectedBeerSuccess: false,
        loadingSelectedBeerFailure: true
      };

    default:
      return state;
  }
};

export default reducer;
