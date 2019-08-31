import { all } from "redux-saga/effects";

import beersSagas from "./beers/sagas";
import userSagas from "./user/sagas";

export default function* rootSaga() {
  yield all([beersSagas(), userSagas()]);
}
