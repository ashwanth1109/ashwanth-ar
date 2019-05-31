// @flow

import React, { useCallback } from "react";
import Link from "redux-first-router-link";

import { Menu as StyledMenu, Option } from "./styles";

import { Container } from "styles";

type Props = {
  options: Array<string>
};

const Menu = ({ options }: Props) => {
  // const changeRoute = useCallback(link => {
  //   window.location.href = link;
  // }, []);

  return (
    <StyledMenu>
      {options.map(option => (
        <Container key={option.id}>
          <Link
            to={{
              type: option.id,
              payload: {}
            }}
          >
            <Option>{option.id}</Option>
          </Link>
        </Container>
      ))}
    </StyledMenu>
  );
};

export default Menu;
