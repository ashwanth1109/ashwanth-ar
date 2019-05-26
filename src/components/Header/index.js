// @flow

import React from "react";
import Link from "redux-first-router-link";
import { connect } from "react-redux";

import { Header as StyledHeader, Logo, Menu, MenuOption } from "./styles";

import logo from "assets/logo.svg";
import { headerOptions } from "data";
import { string } from "utils";

type Props = {
  currentPage: string
};

const Header = ({ currentPage }: Props) => {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <Menu>
        {headerOptions.map((option, id) => (
          <Link
            key={id}
            to={{
              type: option.id,
              payload: {}
            }}
          >
            <MenuOption selected={option.id === currentPage}>
              {string.capitalizeString(option.id)}
            </MenuOption>
          </Link>
        ))}
      </Menu>
    </StyledHeader>
  );
};

const mapStateToProps = ({ location }) => ({
  currentPage: location.type
});

export default connect(mapStateToProps)(Header);
