import { takeEvery, put, all, delay } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

function* loadDashboard() {
  try {
    yield delay(1000);

    yield put(action.loadBeerOfMonthSuccess());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error:", error);
  }
}

/* WATCHERS */
export function* watchLoadDashboard() {
  yield takeEvery(Types.LOAD_DASHBOARD_REQUEST, loadDashboard);
}

function* rootSaga() {
  yield all([watchLoadDashboard()]);
}

export default rootSaga;
