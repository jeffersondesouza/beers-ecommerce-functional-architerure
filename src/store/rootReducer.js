import { combineReducers } from "redux";

import beersReducer from "./beers/reducer";
import userReducer from "./user/reducer";
import shoppingCartReducer from "./shoppingCart/reducer";
import dashboardReducer from "./dashboard/reducer";

const appReducer = combineReducers({
  beers: beersReducer,
  user: userReducer,
  shoppingCart: shoppingCartReducer,
  dashboard: dashboardReducer
});

const rootReducer = (state, action) => {
  if (action.type === "user:LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
