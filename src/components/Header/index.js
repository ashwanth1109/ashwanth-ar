// @flow

import React, { useState } from "react";
import Link from "redux-first-router-link";
import { connect } from "react-redux";

import {
  Header as StyledHeader,
  VisibleHeader,
  Logo,
  Menu,
  MenuOption,
  HamburgerMenu
} from "./styles";

import logo from "assets/logo.svg";
import menu from "assets/menu.svg";
import { toggleCollapsibleMenu } from "actions/ui";

import { headerOptions } from "data";
import { string } from "utils";
import ContactDetails from "./ContactDetails";
import Collapsible from "./Collapsible";

type Props = {
  currentPage: string,
  width: Number,
  toggleShowMenu: Function
};

const Header = ({ currentPage, width, toggleShowMenu }: Props) => {
  const [contactMenu, setContactMenu] = useState(false);
  console.log(width);

  return (
    <>
      <StyledHeader>
        <ContactDetails show={contactMenu} />
        <Logo src={logo} onClick={() => setContactMenu(prev => !prev)} />
        <VisibleHeader>
          {width > 500 && (
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
          )}
          <HamburgerMenu src={menu} onClick={toggleShowMenu} />
        </VisibleHeader>
        {width <= 500 && <Collapsible currentPage={currentPage} />}
      </StyledHeader>
    </>
  );
};

const mapStateToProps = ({ location, app }) => ({
  currentPage: location.type,
  width: app.viewport.w
});

export default connect(
  mapStateToProps,
  { toggleShowMenu: toggleCollapsibleMenu }
)(Header);
