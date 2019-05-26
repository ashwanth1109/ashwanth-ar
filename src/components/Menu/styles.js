// @flow

import styled from "styled-components";
import { colors, fonts } from "styles/constants";

export const Menu = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 7px;
`;

export const Option = styled.div`
  width: 150px;
  height: 50px;
  background-color: ${colors.slabGray};
  color: ${colors.goldenYellow};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.primary};
  font-size: 1.5rem;
  transition: 0.4s ease-in-out;
  :hover {
    background-color: ${colors.goldenYellow};
    cursor: pointer;
    color: ${colors.slabGray};
  }
`;
