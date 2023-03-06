import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_SERVICE_REQUEST } from "./serviceTypes";
import {
  fetchService,
  fetchServiceFailure,
  fetchServiceSuccess,
} from "./serviceActions";

function* handleGetServices() {
  try {
    const services = yield call(fetchService);
    yield put(fetchServiceSuccess(services));
  } catch (error) {
    yield put(fetchServiceFailure("Error on fetching data"));
  }
}

export default function* watcherServicesSaga() {
  yield takeEvery(FETCH_SERVICE_REQUEST, handleGetServices);
}
