import { NOT_FOUND } from "redux-first-router";

const components = {
  HOME: "Home",
  ABOUT: "About",
  TECH: "Tech",
  MUSIC: "Music",
  CREDO: "Credo",
  TECH_ARTICLES: "TechArticles",
  MUSIC_ARTICLES: "MusicArticles",
  REACT_INTERNALS: "ReactInternals",
  [NOT_FOUND]: "NotFound"
};

export default (state = "HOME", action = {}) =>
  components[action.type] || state;
