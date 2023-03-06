import { applyMiddleware, combineReducers, createStore } from "redux";
import { serviceReducer } from "./service/serviceReducers";
import { all } from "redux-saga/effects";
import watcherServicesSaga from "./service/serviceSagas";
import createSagaMiddleware from "redux-saga";

// root reducers
const rootReducers = combineReducers({
  services: serviceReducer,
});

// root saga
function* rootSaga() {
  yield all([watcherServicesSaga()]);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(rootReducers, applyMiddleware(...middleware));

// run the saga
sagaMiddleware.run(rootSaga);
