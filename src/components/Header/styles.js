// @flow

import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

import { Logo as StyledLogo } from "pages/styles";
import { colors, fonts } from "styles/constants";

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 24px;
  margin-top: 16px;
`;

export const Logo = styled(StyledLogo)`
  width: 60px;
  height: 60px;
`;

export const Menu = styled.div`
  display: flex;
  height: 40px;
`;

export const MenuOption = styled.div`
  padding: 0 3vw;
  display: flex;
  color: ${colors.pureWhite};
  font-family: ${fonts.secondary};
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
