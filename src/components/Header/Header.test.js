// @flow

import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import Header from "./";
import Collapsible from "./Collapsible";
import ContactDetails from "./ContactDetails";

import configureStore from "reducers/configureStore";

const { act } = renderer;
const { store } = configureStore();

test("Header renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Collapsible renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <Collapsible currentPage="TEST" />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("ContactDetails renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <ContactDetails show={true} />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
