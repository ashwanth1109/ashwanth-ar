// @flow

import styled from "styled-components";
import { prop, switchProp } from "styled-tools";
import { colors } from "styles/constants";

export const Title = styled.h1`
  font-family: "Patrick Hand", cursive;
  font-size: 2rem;
  color: ${colors.pureWhite};
  font-weight: normal;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${prop("flex", "row")};
  flex: ${prop("flexValue", "initial")};
  width: ${prop("width", "100%")};
  height: ${prop("height", "100%")};
  justify-content: ${switchProp(prop("justify", "center"), {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly"
  })};
  align-items: ${switchProp(prop("align", "center"), {
    center: "center",
    initial: "initial"
  })};
`;

export const Page = styled.div`
  background-color: ${colors.darkNight};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${colors.pureWhite};
`;
