// @flow

import React from "react";
import Youtube from "react-youtube";

import { MusicPage, VideoGrid, VideoCell } from "./styles";
import { Heading, SubHeading } from "styles";

// type Props = {
//   //
// };

const opts = {
  width: "400",
  height: "240"
};

const Music = () => {
  return (
    <MusicPage>
      <Heading>River Flows In You - Yiruma</Heading>
      <VideoGrid>
        <VideoCell>
          <SubHeading>Iteration 1</SubHeading>
          <Youtube opts={opts} videoId="hHANuNDUAo8" />
        </VideoCell>
        <VideoCell>
          <SubHeading>Iteration 2</SubHeading>
          <Youtube opts={opts} videoId="ZLwcfGW1Dow" />
        </VideoCell>
        <VideoCell>
          <SubHeading>Iteration 3</SubHeading>
          <Youtube opts={opts} videoId="jNQBEcAj0Do" />
        </VideoCell>
      </VideoGrid>
    </MusicPage>
  );
};

export default Music;
