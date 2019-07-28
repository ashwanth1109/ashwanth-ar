// @flow

import React, { useRef } from "react";
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
import SheetMusic from "components/SheetMusic";
import BlogPost from "components/BlogPost";
import { Heading, Container } from "styles";
import { musicVideos, classicalPosts } from "data";

type Props = {
  width: Number
};

const Music = ({ width }: Props) => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  const renderPageContent = () => (
    <MusicArticles>
      <h1>MUSIC</h1>

      <blockquote>
        Silence can be a very <strong>powerful tool</strong>. Sometimes it's
        more powerful to leave you with nothing. -{" "}
        <span className="highlight">Ramin Djawadi</span>
      </blockquote>

      <p>
        I am a hardcore <span className="highlight">Beatlemaniac</span> and I
        consider <span className="highlight">Ramin Djawadi's</span> music my
        bible for music theory. Of late, I've really gotten into listening to
        classical music. Composers whose music has had a transcendental effect
        on me include <span className="highlight">Ramin Djawadi</span> (if its
        not obvious enough yet), <span className="highlight">Yiruma</span> (Lee
        Ru-ma), <span className="highlight">Ludwig Van Beethoven</span>,{" "}
        <span className="highlight">Hans Zimmer</span>,{" "}
        <span className="highlight">Johann Sebastian Bach</span>,{" "}
        <span className="highlight">Yann Tiersen</span>,{" "}
        <span className="highlight">Ludovico Einaudi</span> and{" "}
        <span className="highlight">Johann Pachelbel</span>.
      </p>

      <p>
        As someone learning the piano on my own by watching youtube videos, my
        progress was limited to me coming up with a definitive path to improve.
        There were several times that I would despair at the miniscule progress
        I'd made after hours of going at it. I've been fortunate to have run
        into people whose principles inspire me to stay on track in my journey
        as a musician. I owe my progress thus far to{" "}
        <span className="highlight">Gautam Bhat</span>,{" "}
        <span className="highlight">Vinith Johnson</span>,{" "}
        <span className="highlight">Ayush Singh</span>,{" "}
        <span className="highlight">Abhinav Raina</span> and{" "}
        <span className="highlight">Aradhana Mathews</span>. Their thoughts and
        actions have influenced my own, in terms of what I expect from this
        journey.
      </p>

      <p>This page is categorized into three sections.</p>

      <p>
        The first section{" "}
        <span
          className="link"
          onClick={() =>
            section1.current.scrollIntoView({
              behavior: "smooth",
              block: "center"
            })
          }
        >
          Score Renderer
        </span>{" "}
        contains a renderer I've been working on to render sheet music notated
        in ABC format and can simulate audio from it. The second section{" "}
        <span
          className="link"
          onClick={() =>
            section2.current.scrollIntoView({
              behavior: "smooth",
              block: "center"
            })
          }
        >
          Lessons
        </span>{" "}
        contain my notes on musical patterns and progressions of pieces I'm
        covering. The third section{" "}
        <span
          className="link"
          onClick={() =>
            section3.current.scrollIntoView({
              behavior: "smooth",
              block: "center"
            })
          }
        >
          Covers
        </span>{" "}
        contain my piano covers of songs that I have recently learnt.
      </p>
      <br />
      <hr />
      <h2 ref={section1}>SECTION 1: SCORE RENDERER</h2>
      <hr />
      <p>
        This is meant to be a POC for the tool I actually want to build. There's
        still a long way to go before it works the way I envision it in my head.{" "}
        <span className="highlight">
          It currently uses a library called abcjs which I have customized using
          the 'animate' callback that the library provides access to.
        </span>{" "}
        I hope to develop this as a tool that can help one learn sheet music.
        <br />
        <br />
        <span className="highlight">FULL DISCLAIMER</span>, I have learnt how to
        read sheet music only in parts. The following piece was notated through
        trial and error, where I'd listen to how it sounds before changing the
        notes in the sequence. So it probably does not resemble how sheet music
        for Bach's Prelude in C Major actually looks. Also, it doesn't account
        for the specific nuances that come along when playing this.
        <br />
        <br />
        <span className="highlight">IMPORTANT NOTE: </span>Clicking the play
        button should animate the notes as the audio is being rendered. It might
        take a little while to load, so please be patient while waiting to see
        how the renderer works.
      </p>
      <SheetMusic />

      <br />
      <hr />
      <h2 ref={section2}>SECTION 2: LESSONS</h2>
      <hr />
      <br />
      <Accordion title="CLASSICAL LESSONS">
        {classicalPosts.map((article, id) => (
          <BlogPost key={id} article={article} route="MUSIC_ARTICLES" />
        ))}
      </Accordion>
      <br />
      <hr />
      <h2 ref={section3}>SECTION 3: COVERS</h2>
      <hr />
      <br />
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
        {renderPageContent()}
        <MusicPage>
          <VideoGridL>{renderContent()}</VideoGridL>
        </MusicPage>
      </>
    );
  } else if (width > 600) {
    return (
      <>
        {renderPageContent()}
        <MusicPage>
          <VideoGridM>{renderContent()}</VideoGridM>
        </MusicPage>
      </>
    );
  }
  return (
    <>
      {renderPageContent()}
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
