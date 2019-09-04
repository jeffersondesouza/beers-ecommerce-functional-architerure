import { takeEvery, put, all, delay } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

import HttpFetcher from "../../utils/services/http/HttpFetcher";
import BeersRepository from "../../models/controllers/repository/Beers";
import BeersMapper from "../../models/controllers/http-mapper/Beers";

function* addBeerToCart({ payload }) {
  try {
    yield delay(1000);

    const beer = yield HttpFetcher.request(
      BeersRepository.loadBeer(payload.id),
      BeersMapper.fromLoadBeer
    );
    console.log('beer:', beer)

    yield put(action.updateProduct(beer));

  } catch (error) {
    console.log("error:", error);
  }
}

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

export function* watchAddBeerToCart() {
  yield takeEvery(Types.ADD_PRODUCT, addBeerToCart);
}

function* rootSaga() {
  yield all([watchBuy(), watchAddBeerToCart()]);
}

export default rootSaga;
/*);
const beersList = yield call(
  HttpFetcher.request,
  BeersRepository.loadBeers(1),
  BeersHttpMapper.fromLoadBeers
);
*/
