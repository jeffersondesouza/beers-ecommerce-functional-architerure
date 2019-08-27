import { takeEvery, put, all, select } from "redux-saga/effects";
import action from "./actions";

function* loadBeers() {
  try {
    yield select(state => state.auth.token);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error:", error);
    yield put(action.loadFriendsFailure({ error }));
  }
}

/* WATCHERS */
export function* watchLoad() {
  yield takeEvery("LOAD_FRIENDS_REQUEST", loadBeers);
}

function* rootSaga() {
  yield all([watchLoad()]);
}

export default rootSaga;
