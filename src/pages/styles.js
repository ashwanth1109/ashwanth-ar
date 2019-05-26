// @flow

import styled, { keyframes } from "styled-components";
import { Page } from "styles";

export const HomePage = styled(Page)`
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const ContentPage = styled.div`
  margin-top: 76px;
`;

export const AboutPage = styled(ContentPage)`
  padding-top: 16px;
  display: flex;
`;

export const TechPage = styled(ContentPage)`
  padding-top: 16px;
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  flex-direction: column;
`;

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const Logo = styled.img`
  width: 20vw;
  height: 20vw;
  animation: ${rotate} 10s linear infinite;
`;

export const HomeMenuWrapper = styled.div`
  margin: 32px 0;
  width: 40vw;
  max-width: 305px;
`;
