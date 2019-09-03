import { takeEvery, put, all } from "redux-saga/effects";
import Types from "./actionTypes";
import action from "./actions";

import HttpFetcher from "../../utils/services/http/HttpFetcher";
import BeersRepository from "../../models/controllers/repository/Beers";
import BeersMapper from "../../models/controllers/http-mapper/Beers";

function* loadBeers({ payload }) {
  try {
    const beersList = yield HttpFetcher.request(
      BeersRepository.loadBeers(payload),
      BeersMapper.fromLoadBeers
    );

    yield put(action.loadBeersSuccess());
    yield put(action.updateBeers(beersList));
  } catch (error) {
    console.log("error:", error);
  }
}

function* loadSelectedBeer({ payload }) {
  try {
    const beer = yield HttpFetcher.request(
      BeersRepository.loadBeer(payload),
      BeersMapper.fromLoadBeer
    );

    yield put(action.loadBeerSuccess());
    yield put(action.updateBeer(beer));
  } catch (error) {
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
