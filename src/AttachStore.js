// @flow

import React from "react";
import { Provider } from "react-redux";

import App from "./App";
import configureStore from "reducers/configureStore";

const { store } = configureStore();

const AttachStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AttachStore;
