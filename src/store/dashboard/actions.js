import Types from "./constants";

const loadDashboardRequest = payload => ({
  type: Types.LOAD_DASHBOARD_REQUEST,
  payload
});

const loadDashboardSuccess = payload => ({
  type: Types.LOAD_DASHBOARD_SUCCESS,
  payload
});

const loadDashboardFailure = error => ({
  type: Types.LOAD_DASHBOARD_FAILURE,
  payload: error
});

const setBeerOfMonth = beer => ({
  type: Types.SET_BEER_OF_MONTH,
  payload: beer
});

const setTip = tip => ({
  type: Types.SET_TIP,
  payload: tip
});

export default {
  loadDashboardRequest,
  loadDashboardSuccess,
  loadDashboardFailure,
  setBeerOfMonth,
  setTip
};
