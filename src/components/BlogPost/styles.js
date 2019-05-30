// @flow

import styled from "styled-components";

import { colors, fonts } from "styles/constants";

export const Post = styled.div`
  margin: 16px;
`;

export const Title = styled.h1`
  font-family: ${fonts.primary};
  color: ${colors.pureWhite};
  margin: 0px;
  display: flex;
`;

export const Date = styled.div`
  font-family: ${fonts.secondary};
  font-weight: bold;
  color: ${colors.goldenYellow};
`;

export const Clock = styled.img`
  height: 24px;
  margin: 0 4px 0 8px;
`;

export const Length = styled.div`
  font-family: ${fonts.primary};
`;

export const Desc = styled.div`
  font-family: ${fonts.secondary};
`;
