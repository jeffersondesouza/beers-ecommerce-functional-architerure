import { takeEvery, put, all, delay } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

import HttpFetcher from "../../utils/http/HttpFetcher";
import { BeerMothAPI } from "./../../models/BeerMoth";
import { BeerTipAPI } from "./../../models/BeerTip";

function* loadDashboard() {
  try {
    const [beer, tip] = yield all([
      HttpFetcher.request(BeerMothAPI.load()),
      HttpFetcher.request(BeerTipAPI.load())
    ]);

    yield put(action.loadDashboardSuccess());

    if (beer) {
      yield put(action.setBeerOfMonth(beer));
    }

    if (tip) {
      yield put(action.setTip(tip));
    }
    
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
