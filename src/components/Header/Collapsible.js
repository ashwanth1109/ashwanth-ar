// @flow

import React from "react";
import { connect } from "react-redux";
import Link from "redux-first-router-link";

import { CollapsibleMenu, HamburgerMenuOption } from "./styles";
import { headerOptions } from "data";
import { string } from "utils";
import { toggleCollapsibleMenu } from "actions/ui";

type Props = {
  currentPage: any,
  showMenu: boolean,
  toggleMenu: Function
};

const Collapsible = ({ currentPage, showMenu, toggleMenu }: Props) => {
  return (
    <>
      <CollapsibleMenu showMenu={showMenu}>
        {headerOptions.map((option, id) => (
          <Link
            key={id}
            to={{ type: option.id, payload: {} }}
            onClick={toggleMenu}
          >
            <HamburgerMenuOption selected={option.id === currentPage}>
              {string.capitalizeString(option.id)}
            </HamburgerMenuOption>
          </Link>
        ))}
      </CollapsibleMenu>
    </>
  );
};

const mapStateToProps = ({ app }) => ({
  showMenu: app.ui.collapsibleMenu
});

export default connect(
  mapStateToProps,
  { toggleMenu: toggleCollapsibleMenu }
)(Collapsible);
