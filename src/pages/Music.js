// @flow

import React from "react";
import { connect } from "react-redux";
import Youtube from "react-youtube";

import {
  MusicPage,
  VideoGridL,
  VideoCellL,
  VideoContentL,
  VideoGridM,
  VideoContentS
} from "./styles";

import { Heading, Container } from "styles";

type Props = {
  width: Number
};

const Music = ({ width }: Props) => {
  console.log(width);
  const renderContent = () => (
    <>
      <VideoCellL>
        <VideoContentL>
          <Heading>River flows in you - Yiruma</Heading>
          <Youtube videoId="O4mouZ35z7U" />
        </VideoContentL>
      </VideoCellL>
      <VideoCellL>
        <VideoContentL>
          <Heading>Light of the seven - Ramin Djawadi</Heading>
          <Youtube videoId="zIJf9nQ50-Q" />
        </VideoContentL>
      </VideoCellL>
    </>
  );

  if (width > 1000) {
    return (
      <MusicPage>
        <VideoGridL>{renderContent()}</VideoGridL>
      </MusicPage>
    );
  } else if (width > 600) {
    return (
      <MusicPage>
        <VideoGridM>{renderContent()}</VideoGridM>
      </MusicPage>
    );
  }
  return (
    <MusicPage>
      <Container flex="column">
        <VideoContentS>
          <Heading>River flows in you - Yiruma</Heading>
          <Youtube videoId="O4mouZ35z7U" />
        </VideoContentS>
        <VideoContentS>
          <Heading>Light of the seven - Ramin Djawadi</Heading>
          <Youtube videoId="zIJf9nQ50-Q" />
        </VideoContentS>
      </Container>
    </MusicPage>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(Music);
