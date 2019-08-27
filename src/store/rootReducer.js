import { combineReducers } from "redux";

import beersReducer from "./beers/reducer";

const appReducer = combineReducers({
  beers: beersReducer
});

const rootReducer = (state, action) => {
  if (action.type === "auth:LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
