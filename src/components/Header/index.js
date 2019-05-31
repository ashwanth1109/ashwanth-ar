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
import Collapsible from "./Collapsible";

type Props = {
  currentPage: string,
  width: Number
};

const Header = ({ currentPage, width }: Props) => {
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

export default connect(mapStateToProps)(Header);
