import { takeEvery, put, all, select, call } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";
import { BeersRepository, BeersHttpMapper } from "../../models/Beers";

import HttpFetcher from "../../utils/http/HttpFetcher";

function* loadBeers({ payload }) {
  try {
    BeersHttpMapper.fromLoadBeer = () => 1;

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
  console.log("payload:", payload);
  try {
    const beer = yield HttpFetcher.request(
      BeersRepository.loadBeer(payload),
      BeersHttpMapper.fromLoadBeer
    );

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
