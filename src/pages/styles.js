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
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  flex-direction: column;
  max-width: 1000px;
  width: 90vw;
`;

export const TechArticlePage = styled(ContentPage)`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

export const MusicPage = styled(ContentPage)`
  display: flex;
  flex-direction: column;
`;

export const PhilosophyPage = styled(ContentPage)`
  padding: 32px;
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 16px;
`;

export const VideoCell = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
