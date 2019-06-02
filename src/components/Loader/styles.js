// @flow

import styled from "styled-components";
import { prop } from "styled-tools";

import { colors } from "styles/constants";

export const Dot = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${colors.pureWhite};
  border-radius: 8px;
  margin: 8px 4px;
  animation: loadingDot 1s ${prop("delay")}s infinite;
`;
