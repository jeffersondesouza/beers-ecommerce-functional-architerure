import { takeEvery, put, all } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";
import { BeersRepository } from "../../models/Beers";

import HttpFetcher from "../../utils/http/HttpFetcher";

function* buy({ payload }) {
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

/* WATCHERS */
export function* watchBuy() {
  yield takeEvery(Types.BUY_REQUEST, buy);
}

function* rootSaga() {
  yield all([watchBuy()]);
}

export default rootSaga;
/*);
const beersList = yield call(
  HttpFetcher.request,
  BeersRepository.loadBeers(1),
  BeersHttpMapper.fromLoadBeers
);
*/
