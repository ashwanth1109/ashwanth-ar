// @flow

import styled from "styled-components";
import { ifProp } from "styled-tools";

import { colors } from "styles/constants";

export const ColorWheelContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: ${ifProp("smallDevice", "column")};
`;

export const ColorWheel = styled.img`
  width: 40vw;
  height: 40vw;
  max-width: 400px;
  max-height: 400px;
  min-width: 200px;
  min-height: 200px;
`;

export const HSLGenerator = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const DisplayColor = styled.div`
  width: 70%;
  height: 10vw;
  background: hsl(
    ${props => props.hue},
    ${props => props.sat}%,
    ${props => props.light}%
  );
  border: 2px solid ${colors.pureWhite};
`;

export const HSLInputs = styled.div`
  > div {
    margin: 16px 0;
  }
`;

export const HSLLabel = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
`;

export const HSLInput = styled.input.attrs(props => ({
  type: "number"
}))``;
