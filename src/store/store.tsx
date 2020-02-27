import { createStore } from "redux";
import homeModule from "../scenes/Home/modules";
import { combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { HomeSagas } from "../scenes/Home/modules";
import { all } from "redux-saga/effects";

const rootReducers = combineReducers({
  homeModule
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(sagaMiddleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function* rootSaga() {
  yield all([HomeSagas()]);
}
sagaMiddleware.run(rootSaga);

export default store;
