// @flow

import queryString from "query-string";
import restoreScroll from "redux-first-router-restore-scroll";

const routesMap = {
  HOME: "/",
  ABOUT: "/about",
  TECH: "/tech",
  MUSIC: "/music",
  BOOKS: "/books"
};

const options = {
  querySerializer: queryString,
  queryParser: queryString.parse,
  initialDispatch: false,
  restoreScroll: restoreScroll()
};

export { routesMap, options };
