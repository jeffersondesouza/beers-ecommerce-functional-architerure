import Types from "./constants";

const loginRequest = ({ email, password }) => ({
  type: Types.LOGIN_REQUEST,
  payload: { email, password }
});

const loginSuccess = ({ email, token, userName }) => ({
  type: Types.LOGIN_SUCCESS,
  payload: { email, token, userName }
});

const loginFailure = error => ({
  type: Types.LOGIN_FAILURE,
  payload: error
});

const logoutRequest = ({ email, token }) => ({
  type: Types.LOGOUT_REQUEST,
  payload: { email, token }
});

const logoutSuccess = () => ({
  type: Types.LOGOUT_SUCCESS
});

const logoutFailure = error => ({
  type: Types.LOGOUT_FAILURE,
  payload: error
});

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure
};
