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
  VideoContentS,
  MusicArticles
} from "./styles";

import Accordion from "components/Accordion";
import BlogPost from "components/BlogPost";
import { Heading, Container } from "styles";
import { musicVideos, classicalPosts } from "data";

type Props = {
  width: Number
};

const Music = ({ width }: Props) => {
  const renderArticles = () => (
    <MusicArticles>
      <Accordion title="CLASSICAL LESSONS">
        {classicalPosts.map((article, id) => (
          <BlogPost key={id} article={article} route="MUSIC_ARTICLES" />
        ))}
      </Accordion>
    </MusicArticles>
  );

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
      <>
        {renderArticles()}
        <MusicPage>
          <VideoGridL>{renderContent()}</VideoGridL>
        </MusicPage>
      </>
    );
  } else if (width > 600) {
    return (
      <>
        {renderArticles()}
        <MusicPage>
          <VideoGridM>{renderContent()}</VideoGridM>
        </MusicPage>
      </>
    );
  }
  return (
    <>
      {renderArticles()}
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
    </>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(Music);
