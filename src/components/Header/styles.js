// @flow

import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

import { Logo as StyledLogo } from "pages/styles";
import { colors, fonts } from "styles/constants";

export const Header = styled.div`
  width: 100%;
  position: fixed;
  background: ${colors.darkNight};
`;

export const VisibleHeader = styled.div`
  height: 76px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 16px 24px;
`;

export const Logo = styled(StyledLogo)`
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
