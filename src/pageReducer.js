import { NOT_FOUND } from "redux-first-router";

const components = {
  HOME: "Home",
  ABOUT: "About",
  TECH: "Tech",
  MUSIC: "Music",
  BOOKS: "Books",
  [NOT_FOUND]: "NotFound"
};

export default (state = "HOME", action = {}) =>
  components[action.type] || state;