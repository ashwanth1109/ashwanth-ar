// @flow

import styled from "styled-components";
import { prop } from "styled-tools";
import { colors, fonts } from "styles/constants";

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
  justify-content: ${prop("justify", "center")};
  align-items: ${prop("align", "center")};
  margin: ${prop("margin", "0px")};
`;

export const Page = styled.div`
  background-color: ${colors.darkNight};
  display: flex;
  flex-direction: column;
  color: ${colors.pureWhite};
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const App = styled(Page)`
  overflow-y: hidden;
`;

export const Heading = styled.div`
  width: 100%;
  background-color: ${colors.slabGray};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.secondary};
  font-weight: bold;
`;

export const Spacer = styled.div`
  width: ${prop("width", "100%")};
  height: ${prop("height", "100%")};
`;

export const SubHeading = styled.div`
  font-family: ${fonts.primary};
  font-size: 32px;
`;

export const Para = styled.p`
  font-family: ${fonts.secondary};
  font-size: 16px;
`;

export const BlogImage = styled.img`
  width: ${prop("width", "100%")};
`;
