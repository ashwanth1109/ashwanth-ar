// @flow

import React from "react";
import { connect } from "react-redux";
import Youtube from "react-youtube";
import { MusicVideo } from "./styles";

type Props = {
  width: number,
  videoId: string
};

const YoutubeVideo = ({ width, videoId }: Props) => {
  let calcHeight;
  if (width < 640) {
    calcHeight = "initial";
  } else {
    calcHeight = (width * 360) / 640;
  }
  return (
    <MusicVideo height={calcHeight}>
      <Youtube videoId={videoId} />
    </MusicVideo>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(YoutubeVideo);
