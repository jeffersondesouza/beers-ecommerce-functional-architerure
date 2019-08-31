import { takeEvery, put, all, delay } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

function* buy({ payload }) {
  try {
    yield delay(1000);

    yield put(action.buySuccess());
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
