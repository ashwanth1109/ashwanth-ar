// @flow

import styled, { keyframes } from "styled-components";

import { colors, fonts } from "styles/constants";

export const TypeWriter = styled.div`
  font-size: 2rem;
  color: ${colors.pureWhite};
  font-family: ${fonts.secondary};
  line-height: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
`;

const blink = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const Cursor = styled.div`
  height: 32px;
  width: 2px;
  background-color: ${colors.pureWhite};
  margin: 0 3px;
  animation: ${blink} 0.7s linear infinite;
`;
