// @flow

import styled from "styled-components";
import { prop, ifProp } from "styled-tools";

import { colors, fonts } from "styles/constants";

export const Slide = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: ${prop("position")};
  transition: ${ifProp({ transition: true }, "1s ease-in-out left", null)};
`;

export const Carousel = styled.div`
  width: 100%;
  height: 60vh;
  border: 2px solid ${colors.goldenYellow};
  overflow: hidden;
  position: relative;
`;

export const LoadingInfo = styled.div`
  font-family: ${fonts.secondary};
  font-size: 24px;
  margin: 16px;
  text-align: center;
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  background: ${colors.slabGray + "80"};
  height: 24px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  width: ${ifProp("selected", "12px", "6px")};
  height: ${ifProp("selected", "12px", "6px")};
  border-radius: ${ifProp("selected", "6px", "3px")};
  transition: 1s ease-in-out;
  background: ${colors.pureWhite};
  margin: 0 4px;
`;
