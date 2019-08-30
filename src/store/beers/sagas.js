import { takeEvery, put, all, select, call } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";
import { BeersRepository, BeersHttpMapper } from "../../models/Beers";

import HttpFetcher from "../../utils/http/HttpFetcher";

function* loadBeers() {
  try {
    /*     const beers = yield HttpFetcher.request(
      BeersRepository.loadBeers,
      BeersHttpMapper.fromLoadBeers
    );
 */
    const beers = yield call(
      HttpFetcher.request,
      BeersRepository.loadBeers(1),
      BeersHttpMapper.fromLoadBeers
    );

    console.log("beers:", beers);
    const state = yield select(state => state);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error:", error);
  }
}

/* WATCHERS */
export function* watchLoad() {
  yield takeEvery(Types.LOAD_BEERS_REQUEST, loadBeers);
}

function* rootSaga() {
  yield all([watchLoad()]);
}

export default rootSaga;
