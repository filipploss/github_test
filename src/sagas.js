import { call, put, takeEvery, all } from "redux-saga/effects";
// import { searchSuccess } from "./actions";
const axios = require("axios");

function getData() {
  return axios.get("https://api.github.com/orgs/adidas/repos");
}

export function* searchStart() {
  try {
    const response = yield call(getData);
    console.log(response)
    if (response) {
      yield put({
        type: "FETCH_SUCCESS",
        payload: response.data,
      });
    }
  } catch (err) {
    yield put({
      type: "FETCH_FAILURE",
    });
  }
}

export function* watchSearchStart() {
  yield takeEvery("FETCH_START", searchStart);
}

export default function* rootSaga() {
  yield all([watchSearchStart()]);
}
