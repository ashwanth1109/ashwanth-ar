// @flow

import React, { useCallback } from "react";

import { Menu as StyledMenu, Option } from "./styles";

import { Container } from "styles";

type Props = {
  options: Array<string>
};

const Menu = ({ options }: Props) => {
  const changeRoute = useCallback(link => {
    window.location.href = link;
  }, []);

  return (
    <StyledMenu>
      {options.map(option => (
        <Container key={option.id}>
          <Option onClick={() => changeRoute(option.link)}>{option.id}</Option>
        </Container>
      ))}
    </StyledMenu>
  );
};

export default Menu;
