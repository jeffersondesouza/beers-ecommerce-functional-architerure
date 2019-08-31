import { all } from "redux-saga/effects";

import beersSagas from "./beers/sagas";
import userSagas from "./user/sagas";
import shoppingCartSagas from "./shoppingCart/sagas";
import dashboardSagas from "./dashboard/sagas";

export default function* rootSaga() {
  yield all([beersSagas(), userSagas(), shoppingCartSagas(), dashboardSagas()]);
}
