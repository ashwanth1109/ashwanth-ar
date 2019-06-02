// @flow

import styled from "styled-components";
import { prop, ifProp } from "styled-tools";

import { colors } from "styles/constants";

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
