import { takeEvery, put, all } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

import HttpFetcher from "../../utils/services/http/HttpFetcher";
import BeerMothRepository from "../../models/controllers/repository/BeerMoth";
import BeerTipRepository from "../../models/controllers/repository/BeerTip";

import BeerMothMapper from "../../models/controllers/http-mapper/BeerMoth";
import BeerTipMapper from "../../models/controllers/http-mapper/BeerTip";

function* loadDashboard() {
  try {
    const [beer, tip] = yield all([
      HttpFetcher.request(
        BeerMothRepository.load(),
        BeerMothMapper.fromLoadBeer
        ),
        HttpFetcher.request(BeerTipRepository.load(), BeerTipMapper.fromLoadTip)
      ]);

    yield put(action.loadDashboardSuccess());

    if (beer) {
      yield put(action.updateBeerOfMonth(beer));
    }

    if (tip) {
      yield put(action.updateTip(tip));
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
