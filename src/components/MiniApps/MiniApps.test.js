// @flow

import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import MiniApps from "./";
import Project from "./Project";
import configureStore from "reducers/configureStore";

const { act } = renderer;
const { store } = configureStore();

test("MiniApps renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <MiniApps />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Project renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <Project
          app={{
            name: "CHECKERS",
            image: "checkers.png",
            github: "",
            live: ""
          }}
        />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
