// @flow

import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

import { Logo as StyledLogo } from "pages/styles";
import { colors, fonts } from "styles/constants";

export const Header = styled.div`
  width: 100%;
  position: fixed;
  background: ${colors.darkNight};
  z-index: 1;
`;

export const VisibleHeader = styled.div`
  position: relative;
  z-index: 1;
  background: ${colors.darkNight};
  height: 76px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 16px 24px;
`;

export const Logo = styled(StyledLogo)`
  z-index: 2;
  width: 60px;
  height: 60px;
  margin-top: 8px;
  position: absolute;
  left: 16px;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  height: 40px;
`;

export const MenuOption = styled.div`
  padding: 0 3vw;
  display: flex;
  color: ${colors.pureWhite};
  font-family: ${fonts.primary};
  font-size: 20px;
  border-bottom: 5px solid
    ${ifProp("selected", colors.goldenYellow, colors.slabGray)};
  align-items: center;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${ifProp("selected", colors.slabGray, "")};
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    ${ifProp(
      "selected",
      null,
      css`
        border-color: ${colors.pureWhite};
      `
    )}
  }
`;

export const Contact = styled.div`
  height: ${ifProp("show", "60px", "0px")};
  width: 100vw;
  transition: 0.5s ease-in-out height;
  position: relative;
`;

export const Tray = styled.div`
  background-color: ${colors.slabGray};
  position: absolute;
  width: 100vw;
  height: 60px;
  top: ${ifProp("show", "0px", "-60px")};
  transition: 0.5s ease-in-out top;
  font-size: 32px;
  font-family: ${fonts.primary};
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 40px;
  margin-right: 16px;
`;

export const IconTitle = styled.div`
  text-decoration: underline;
`;

export const HamburgerMenu = styled.img`
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 16px;
  z-index: 2;
`;

export const CollapsibleMenu = styled.div`
  position: absolute;
  z-index: 0;
  top: 76px;
  right: 0px;
  width: 200px;
  height: 300px;
  background: ${colors.darkNight};
  border: 2px solid ${colors.pureWhite};
`;

export const HamburgerMenuOption = styled(MenuOption)`
  width: 100%;
  height: 60px;
  border-bottom: 0px;
  color: ${ifProp("selected", colors.goldenYellow, colors.pureWhite)};
  :hover {
    background-color: ${colors.slabGray};
  }
`;
