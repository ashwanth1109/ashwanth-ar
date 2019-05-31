// @flow

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";

import page from "./pageReducer";

import app from "reducers";

const routesMap = {
  HOME: "/",
  ABOUT: "/about",
  TECH: "/tech",
  TECH_ARTICLES: "/tech/:article",
  MUSIC: "/music",
  PHILOSOPHY: "/philosophy"
};

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const rootReducer = combineReducers({ page, location: reducer, app });
  const middlewares = applyMiddleware(middleware);

  // For devtools extension
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancers = composeEnhancers(enhancer, middlewares);

  const store = createStore(rootReducer, preloadedState, enhancers);

  return { store };
}
