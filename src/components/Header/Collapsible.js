// @flow

import React from "react";
import { connect } from "react-redux";
import Link from "redux-first-router-link";

import { CollapsibleMenu, HamburgerMenuOption } from "./styles";
import { headerOptions } from "data";
import { string } from "utils";

type Props = {
  currentPage: any,
  showMenu: boolean
};

const Collapsible = ({ currentPage, showMenu }: Props) => {
  return (
    <>
      <CollapsibleMenu showMenu={showMenu}>
        {headerOptions.map((option, id) => (
          <Link to={{ type: option.id, payload: {} }}>
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

export default connect(mapStateToProps)(Collapsible);
