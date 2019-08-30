import INITIAL_STATE from "./state";
import Types from "./constants";

const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
        loadingBeersFailure: false,
        beersList: [...action.payload.beersList],
        total: action.payload.total
      };

    case Types.LOAD_BEERS_FAILURE:
      return {
        ...state,
        isLoadingBeers: false,
        loadingBeersSuccess: false,
        loadingBeersFailure: true
      };

    default:
      return state;
  }
};

export default beersReducer;
