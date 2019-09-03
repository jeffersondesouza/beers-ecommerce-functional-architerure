import { takeEvery, put, all } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

import HttpFetcher from "../../utils/services/http/HttpFetcher";
import BeersRepository from "../../models/controllers/repository/Beers";

function* loadBeers({ payload }) {
  try {
    const beersList = yield HttpFetcher.request(
      BeersRepository.loadBeers(payload)
    );

    yield put(action.loadBeersSuccess(beersList));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error:", error);
  }
}

function* loadSelectedBeer({ payload }) {
  try {
    const beer = yield HttpFetcher.request(BeersRepository.loadBeer(payload));

    yield put(action.loadBeerSuccess(beer));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error:", error);
  }
}

/* WATCHERS */
export function* watchLoad() {
  yield takeEvery(Types.LOAD_BEERS_REQUEST, loadBeers);
}

export function* watchLoadBeer() {
  yield takeEvery(Types.LOAD_BEER_REQUEST, loadSelectedBeer);
}

function* rootSaga() {
  yield all([watchLoad(), watchLoadBeer()]);
}

export default rootSaga;
/*);
const beersList = yield call(
  HttpFetcher.request,
  BeersRepository.loadBeers(1),
  BeersHttpMapper.fromLoadBeers
);
*/
