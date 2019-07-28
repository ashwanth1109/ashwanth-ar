// @flow

import React, { useRef } from "react";

import { TechPage } from "./styles";

import Accordion from "components/Accordion";
import MiniApps from "components/MiniApps";
import BlogPost from "components/BlogPost";

import {
  bigPicturePosts,
  codePosts,
  reactInternalsPosts,
  buildingBlocks
} from "data";

const Tech = () => {
  const section1 = useRef();
  const section2 = useRef();
  return (
    <TechPage>
      <h1>TECHNOLOGY</h1>
      <blockquote>
        What lies behind us and what lies before us are nothing compared to{" "}
        <strong>what lies within us</strong>. -{" "}
        <span className="highlight">Ralph Waldo Emerson</span>
      </blockquote>
      <p>
        Hello world! (How cliche'd right?). I am currently working as a{" "}
        <span className="highlight">Software Engineer</span> in a startup called{" "}
        <span className="highlight">Unifize</span>. Unifize is one among 10
        startups that was in the inaugural batch of the{" "}
        <span className="highlight">Techstars India Accelerator</span>.
        <br />
        <br />
        We develop an{" "}
        <span className="highlight">
          industrial grade chat application
        </span>{" "}
        that empowers mid to large scale engineering and manufacturing companies
        reduce their process cycle times. We achieve this by enabling teams to
        rapidly form and disband around micro objectives using process
        templates. Templates guide otherwise unstructured conversations,
        allowing people, data and processes to interact painlessly and to
        seamlessly generate insights for business managers. You can read more
        about it{" "}
        <a href="/tech/unifize-chat" className="highlight underline">
          here
        </a>
        .
        <br />
        <br />I am one of two web developers who are entrusted with building our
        web app. I work in close collaboration with the backend, mobile and
        design team, developing features using{" "}
        <span className="highlight">
          React, Redux, Saga, Firebase, Styled Components, and Flow
        </span>{" "}
        with a functional programming approach.
        <br />
        <br />
        You can find links to my{" "}
        <span className="highlight">LinkedIn and Github page</span> by clicking
        the rotating logo on the top left corner. Before you browse the rest of
        the page, I would recommend reading the following intro.
        <br />
        <br />
        This page is categorized into two sections. <br />
        <br />
        The first section called{" "}
        <a
          href="#content-and-code"
          onClick={() =>
            section1.current
              ? section1.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                })
              : null
          }
          className="highlight underline"
        >
          Content and Code
        </a>{" "}
        comprises of articles grouped into a particular theme based on topics I
        have been recently exploring. You can click on the theme in order to see
        articles inside each theme. <br />
        <br />
        The second section called{" "}
        <a
          href="#mini-apps"
          onClick={() =>
            section2.current
              ? section2.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                })
              : null
          }
          className="highlight underline"
        >
          Mini Apps
        </a>{" "}
        is a collection of mini projects I worked on over the course of my
        learning journey back in the initial days. Nothing fancy, but it holds a
        ton of sentimental value to me and is a constant reminder of how many
        hours seemlessly passed by when I worked on them.
      </p>
      <br />

      <hr />
      <h2 ref={section1}>SECTION 1: CONTENT AND CODE</h2>
      <hr />
      <br />

      {/** THE DEVIL IS IN THE DETAILS */}
      <h3>1. THE DEVIL IS IN THE DETAILS</h3>
      <p>
        This theme deals with articles where I build something or accomplish a
        task and try to explain how I built or accomplished said thing or task.
        Could this be any clearer?{" "}
        <span role="img" aria-label="winking face emoji">
          😉
        </span>
      </p>
      <Accordion title="THE DEVIL IS IN THE DETAILS">
        {codePosts.map((article, id) => (
          <BlogPost key={id} article={article} route="TECH_ARTICLES" />
        ))}
      </Accordion>

      {/** THE BIGGER PICTURE */}
      <h3>2. THE BIGGER PICTURE</h3>
      <p>
        This theme deals with articles where I hope to coagulate my foundation
        on the bigger picture of the development process with things such as
        deployment, automation, architecture{" "}
        <span role="img" aria-label="building emoji">
          🏛️
        </span>
        , patterns etc.
      </p>
      <Accordion title="THE BIGGER PICTURE">
        {bigPicturePosts.map((article, id) => (
          <BlogPost key={id} article={article} route="TECH_ARTICLES" />
        ))}
      </Accordion>

      {/** REACT INTERNALS */}
      <h3>3. REACT INTERNALS</h3>
      <p>
        This theme deals with articles where I attempt to unearth{" "}
        <span role="img" aria-label="pickaxe emoji">
          ⛏️
        </span>{" "}
        the source code of react in order to better understand a framework that
        means the world to me.
      </p>
      <Accordion title="REACT INTERNALS">
        {reactInternalsPosts.map((article, id) => (
          <BlogPost key={id} article={article} route="TECH_ARTICLES" />
        ))}
      </Accordion>

      {/** BUILDING BLOCKS */}
      <h3>4. BUILDING BLOCKS</h3>
      <p>
        This theme deals with my notes on the basics of computer science{" "}
        <span role="img" aria-label="computer emoji">
          💻
        </span>{" "}
        which I distill from lectures from ivy leagues when I feel bored. I take
        these classes in python which provides me an opportunity to dabble with
        the language.
      </p>
      <Accordion title="BUILDING BLOCKS - MIT OCW LECTURE NOTES">
        {buildingBlocks.map((article, id) => (
          <BlogPost key={id} article={article} route="TECH_ARTICLES" />
        ))}
      </Accordion>

      <br />
      <hr />
      <h2 ref={section2}>SECTION 2: MINI APPS</h2>
      <hr />
      <MiniApps />
      <hr />
    </TechPage>
  );
};

export default Tech;
