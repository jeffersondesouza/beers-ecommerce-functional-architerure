import INITIAL_STATE from "./state";
import Types from "./constants";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        profile: INITIAL_STATE.profile,
        token: "",
        isLoggedIn: false,
        isLoggingIn: true
      };

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        token: action.payload.token,
        isLoggedIn: true,
        isLoggingIn: false
      };

    case Types.LOGIN_FAILURE:
      return {
        ...state,
        error: { msg: "Nao foi possível fazer login" },
        isLoggedIn: false,
        isLoggingIn: false
      };

    case Types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true
      };

    case Types.LOGOUT_SUCCESS:
      return {
        ...INITIAL_STATE
      };

    case Types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        error: { msg: "Nao foi possível fazer logout" }
      };

    default:
      return state;
  }
};

export default reducer;
