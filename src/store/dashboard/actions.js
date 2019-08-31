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

export default {
  loadDashboardRequest,
  loadDashboardSuccess,
  loadDashboardFailure
};
