import { takeEvery, put, all } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

import HttpFetcher from "../../utils/http/HttpFetcher";
import BeerMothRepository from '../../models/controllers/repository/BeerMoth'
import BeerTipRepository from '../../models/controllers/repository/BeerTip'

function* loadDashboard() {
  try {
    const [beer, tip] = yield all([
      HttpFetcher.request(BeerMothRepository.load()),
      HttpFetcher.request(BeerTipRepository.load())
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
