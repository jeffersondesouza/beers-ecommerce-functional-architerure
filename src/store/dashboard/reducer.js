import INITIAL_STATE from "./state";
import Types from "./constants";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_DASHBOARD_REQUEST:
      return {
        ...state,
        isLoadingDashboard: true
      };

    case Types.LOAD_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoadingDashboard: false
      };

    case Types.LOAD_DASHBOARD_FAILURE:
      return {
        ...state,
        isLoadingDashboard: false,
        error: { msg: "Nao foi possível carregar os detalhes", data: action }
      };

    case Types.SET_BEER_OF_MONTH:
      return {
        ...state,
        beerOfMoth: { ...action.payload }
      };

    case Types.SET_TIP:
      return {
        ...state,
        tip: action.payload.msg
      };

    default:
      return state;
  }
};

export default reducer;
