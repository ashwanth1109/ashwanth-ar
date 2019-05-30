// @flow

import queryString from "query-string";
import restoreScroll from "redux-first-router-restore-scroll";

const routesMap = {
  HOME: "/",
  ABOUT: "/about",
  TECH: "/tech",
  TECH_ARTICLES: "/tech/:article",
  MUSIC: "/music",
  PHILOSOPHY: "/philosophy"
};

const options = {
  querySerializer: queryString,
  queryParser: queryString.parse,
  initialDispatch: false,
  restoreScroll: restoreScroll()
};

export { routesMap, options };
