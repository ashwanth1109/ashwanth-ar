// @flow

import { combineReducers } from "redux";

const collapsibleMenu = (state = false, { type, payload }) => {
  switch (type) {
    case "SET_COLLAPSIBLE_MENU":
      return payload;
    case "TOGGLE_COLLAPSIBLE_MENU":
      return !state;
    default:
      return state;
  }
};

const ui = combineReducers({ collapsibleMenu });

export default ui;
