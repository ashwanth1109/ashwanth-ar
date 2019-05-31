// @flow

import React, { useState } from "react";
import Link from "redux-first-router-link";

import { HamburgerMenu, CollapsibleMenu, HamburgerMenuOption } from "./styles";
import menu from "assets/menu.svg";
import { headerOptions } from "data";
import { string } from "utils";

type Props = {
  currentPage: any
};

const Collapsible = ({ currentPage }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <HamburgerMenu src={menu} onClick={() => setShowMenu(prev => !prev)} />
      {showMenu && (
        <CollapsibleMenu>
          {headerOptions.map((option, id) => (
            <Link to={{ type: option.id, payload: {} }}>
              <HamburgerMenuOption selected={option.id === currentPage}>
                {string.capitalizeString(option.id)}
              </HamburgerMenuOption>
            </Link>
          ))}
        </CollapsibleMenu>
      )}
    </>
  );
};

export default Collapsible;
