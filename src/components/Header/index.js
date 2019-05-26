// @flow

import React, { useState } from "react";
import Link from "redux-first-router-link";
import { connect } from "react-redux";

import {
  Header as StyledHeader,
  VisibleHeader,
  Logo,
  Menu,
  MenuOption
} from "./styles";

import logo from "assets/logo.svg";
import { headerOptions } from "data";
import { string } from "utils";
import ContactDetails from "./ContactDetails";

type Props = {
  currentPage: string
};

const Header = ({ currentPage }: Props) => {
  const [contactMenu, setContactMenu] = useState(false);
  return (
    <>
      <StyledHeader>
        <ContactDetails show={contactMenu} />
        <Logo src={logo} onClick={() => setContactMenu(prev => !prev)} />
        <VisibleHeader>
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
        </VisibleHeader>
      </StyledHeader>
    </>
  );
};

const mapStateToProps = ({ location }) => ({
  currentPage: location.type
});

export default connect(mapStateToProps)(Header);
