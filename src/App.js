import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/InputForm";
import List from "./components/List";
import reducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputForm />
        <List />
      </div>
    </Provider>
  );
}

export default App;
