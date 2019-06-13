// @flow
"use-strict";

import React from "react";
import Link from "./Link";
import renderer from "react-test-renderer";

const { act } = renderer;

test("Link changes the status when hovered", () => {
  let component;
  act(() => {
    component = renderer.create(
      <Link page="http://ashwanth-ar.web.app">Ashwanth's Site</Link>
    );
  });

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
