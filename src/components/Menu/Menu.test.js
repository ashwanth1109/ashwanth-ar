// @flow

import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import Menu from "./";
import configureStore from "reducers/configureStore";

const { act } = renderer;
const { store } = configureStore();

const options = [
  { id: "ABOUT", link: "/about" },
  { id: "TECH", link: "/tech" },
  { id: "MUSIC", link: "/music" },
  { id: "CREDO", link: "/credo" }
];

test("Menu renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <Menu options={options} />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
