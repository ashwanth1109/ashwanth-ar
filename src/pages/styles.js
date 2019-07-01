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

export const MusicPage = styled.div`
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 32px;
`;

export const CredoPage = styled(ContentPage)`
  padding: 32px;
`;

export const MusicArticles = styled.div`
  width: 90vw;
  max-width: 1000px;
  margin: 90px auto 0 auto;
`;

export const VideoGridL = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 32px;
`;

export const VideoGridM = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const VideoCellL = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const VideoContentL = styled.div`
  width: 480px;
  iframe {
    width: 480px;
    height: 270px;
    margin-top: 16px;
  }
`;

export const VideoContentS = styled.div`
  width: 100vw;
  iframe {
    width: 100vw;
    height: 270px;
    margin-top: 16px;
  }
`;

export const MusicVideo = styled.div`
  display: flex;
  justify-content: center;
  div,
  video {
    max-width: 640px;
    width: 100vw;
    height: ${props => props.height};
  }
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
