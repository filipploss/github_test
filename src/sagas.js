import { call, put, takeEvery, all } from "redux-saga/effects";
const axios = require("axios");

function getData(company) {
  return axios.get(`https://api.github.com/orgs/${company}/repos`);
}

export function* searchStart({ payload }) {
  try {
    const response = yield call(() => getData(payload));
    if (response) {
      yield put({
        type: "FETCH_SUCCESS",
        payload: response.data,
      });
    }
  } catch (err) {
    yield put({
      type: "FETCH_FAILURE",
      payload: err.message,
    });
  }
}

export function* watchSearchStart() {
  yield takeEvery("FETCH_START", searchStart);
}

export default function* rootSaga() {
  yield all([watchSearchStart()]);
}
