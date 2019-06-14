// @flow

import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import BlogPost from "./";
import configureStore from "reducers/configureStore";

const { act } = renderer;
const { store } = configureStore();

const article = {
  title: "Test",
  link: "www.google.com",
  date: "14 JUNE",
  description: "testing with jest",
  length: "3 min read"
};

test("BlogPost renders correctly", () => {
  let component;

  act(() => {
    component = renderer.create(
      <Provider store={store}>
        <BlogPost article={article} />
      </Provider>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
