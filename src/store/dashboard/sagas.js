import { takeEvery, put, all, delay } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

function* loadDashboard() {
  try {
    const res = yield all([
      fetch("https://api.punkapi.com/v2/beers/random")
        .then(res => res.json())
        .then(res => res[0]),
      fetch("https://api.punkapi.com/v2/beers/random")
        .then(res => res.json())
        .then(res => res[0])
    ]);

    console.log("res:", res);

    yield put(action.loadDashboardSuccess());
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
