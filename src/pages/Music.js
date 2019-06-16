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
import { musicVideos } from "data";

type Props = {
  width: Number
};

const Music = ({ width }: Props) => {
  const renderContent = () => (
    <>
      {musicVideos.map(video => (
        <VideoCellL key={video.id}>
          <VideoContentL>
            <Heading>{video.title}</Heading>
            <Youtube videoId={video.id} />
          </VideoContentL>
        </VideoCellL>
      ))}
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
        {musicVideos.map(video => (
          <VideoContentS key={video.id}>
            <Heading>{video.title}</Heading>
            <Youtube videoId={video.id} />
          </VideoContentS>
        ))}
      </Container>
    </MusicPage>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(Music);
