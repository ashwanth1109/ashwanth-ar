// @flow

import styled from "styled-components";
import { prop, ifProp } from "styled-tools";
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
  align-items: center;
  font-family: ${fonts.primary};
  font-weight: bold;
  font-size: calc(10px + 1vw);
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

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
  letter-spacing: 0.05em;
  a {
    text-decoration: underline;
    color: ${colors.pureWhite};
  }
  li {
    margin: 10px 0;
    font-family: ${fonts.secondary};
  }
  h1 {
    width: 100%;
    background-color: ${colors.slabGray};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.secondary};
    font-weight: bold;
    font-size: ${ifProp("smallDevice", "24px", "32px")};
  }
  h2 {
    font-family: ${fonts.primary};
    font-size: 32px;
  }
  h3 {
    font-family: ${fonts.primary};
    color: ${colors.goldenYellow};
  }
  p {
    font-family: ${fonts.secondary};
    font-size: 16px;
    > code {
      color: ${colors.goldenYellow};
    }
  }
  img {
    display: block;
    width: 80%;
    object-fit: contain;
    max-height: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  pre {
    display: flex;
    border-left: 5px solid ${colors.goldenYellow};
  }
  code {
    padding: 16px;
    border-radius: 10px;
    width: 100%;
    font-family: "Fira Code", monospace;
  }
  blockquote {
    font-size: ${ifProp("smallDevice", "16px", "24px")};
  }
`;

export const Button = styled.div`
  width: 100%;
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

export const Quote = styled.span`
  font-style: oblique;
  margin-right: 16px;
`;
