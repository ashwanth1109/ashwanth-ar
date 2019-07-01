// @flow

import queryString from "query-string";
import restoreScroll from "redux-first-router-restore-scroll";

const routesMap = {
  HOME: "/",
  ABOUT: "/about",
  TECH: "/tech",
  REACT_INTERNALS: "/react-internals/:article",
  TECH_ARTICLES: "/tech/:article",
  MUSIC: "/music",
  MUSIC_ARTICLES: "/music/:article",
  CREDO: "/credo"
};

const options = {
  querySerializer: queryString,
  queryParser: queryString.parse,
  initialDispatch: false,
  restoreScroll: restoreScroll()
};

export { routesMap, options };
