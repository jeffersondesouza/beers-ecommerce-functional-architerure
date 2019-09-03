import { takeEvery, put, all } from "redux-saga/effects";
import Types from "./constants";
import action from "./actions";

import UserRepository from "../../models/controllers/repository/User";

import HttpFetcher from "../../utils/services/http/HttpFetcher";

function* login({ payload }) {
  try {
    yield HttpFetcher.request(UserRepository.logout(payload));
    const userFound = USERS.find(
      user => user.email === payload.email && user.password === payload.password
    );

    if (userFound) {
      yield put(
        action.loginSuccess({ profile: userFound, token: userFound.token })
      );
    } else {
      yield put(action.loginFailure());
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error:", error);
  }
}

function* logout({ payload }) {
  try {
    yield HttpFetcher.request(UserRepository.logout(payload));
    const userFound = USERS.find(
      user => user.email === payload.email && user.password === payload.password
    );

    if (userFound) {
      yield put(
        action.loginSuccess({ profile: userFound, token: userFound.token })
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error:", error);
  }
}

/* WATCHERS */
export function* watchLogin() {
  yield takeEvery(Types.LOGIN_REQUEST, login);
}

export function* watchLogout() {
  yield takeEvery(Types.LOGOUT_REQUEST, logout);
}

function* rootSaga() {
  yield all([watchLogin(), watchLogout()]);
}

export default rootSaga;
/*);
const beersList = yield call(
  HttpFetcher.request,
  BeersRepository.loadBeers(1),
  BeersHttpMapper.fromLoadBeers
);
*/

const USERS = [
  {
    token: "12345",
    email: "kojuliboj@mail-pro.info",
    userName: "kojuliboj",
    password: "123"
  },
  {
    token: "12345",
    email: "arthurhubner@hotmail.com",
    userName: "arthur",
    password: "aaa"
  }
];
