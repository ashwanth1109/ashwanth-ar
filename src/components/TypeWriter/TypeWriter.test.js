// @flow

import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import TypeWriter from "./";
import configureStore from "reducers/configureStore";

const { act } = renderer;
const { store } = configureStore();

test("TypeWriter renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <TypeWriter
          words={["DEVELOPER", "PIANIST", "DESIGNER", "INTRAPRENEUR"]}
        />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
