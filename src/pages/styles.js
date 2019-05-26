// @flow

import styled, { keyframes } from "styled-components";
import { Page } from "styles";

export const HomePage = styled(Page)`
  justify-content: center;
  align-items: center;
`;

export const ContentPage = styled.div`
  min-height: calc(100vh - 76px);
  width: 100vw;
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
