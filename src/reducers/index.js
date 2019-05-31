// @flow

import { combineReducers } from "redux";

const viewport = (state = { width: 0, height: 0 }, { type, payload }) => {
  switch (type) {
    case "SET_APP_DIMENSIONS":
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ viewport });
