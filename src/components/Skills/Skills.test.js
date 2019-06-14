// @flow

import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import Skills from "./";
import configureStore from "reducers/configureStore";

const { act } = renderer;
const { store } = configureStore();

test("Skills renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
