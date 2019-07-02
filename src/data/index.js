// @flow

import React from "react";

import jlChat from "assets/projects/jlChat.png";
import checkers from "assets/projects/checkers.png";
import taskIt from "assets/projects/taskIt.png";
import slider from "assets/projects/slider.png";
import greflash from "assets/projects/greflash.png";
import gitSearch from "assets/projects/gitSearch.png";
import hashdocket from "assets/projects/hashdocket.png";
import eventful from "assets/projects/eventful.png";

// COMPONENTS
import Slideshow from "components/SlideshowCarousel";
import HSLColorWheel from "components/HSLColorWheel";

export const titleText = "Hello, I'm Ashwanth";

export const typewriter = ["DEVELOPER", "PIANIST", "DESIGNER", "INTRAPRENEUR"];

export const menuOptions = [
  {
    id: "ABOUT",
    link: "/about"
  },
  {
    id: "TECH",
    link: "/tech"
  },
  {
    id: "MUSIC",
    link: "/music"
  },
  {
    id: "CREDO",
    link: "/credo"
  }
];

export const headerOptions = [
  {
    id: "HOME",
    link: "/"
  },
  ...menuOptions
];

export const miniApps = [
  {
    name: "REALTIME CHAT",
    image: jlChat,
    github: "https://github.com/ashwanth1109/react-test-1",
    live: "https://jl-chat-app.herokuapp.com/"
  },
  {
    name: "CHECKERS",
    image: checkers,
    github: "https://github.com/ashwanth1109/CheckersApp",
    live: "https://ashwanth1109.github.io/CheckersApp/"
  },
  {
    name: "TO DO APP",
    image: taskIt,
    github: "https://github.com/ashwanth1109/task-it",
    live: "https://task-it-now.herokuapp.com/"
  },
  {
    name: "SLIDER",
    image: slider,
    github: "https://github.com/ashwanth1109/showcase-slider",
    live: "https://showcase-slider.herokuapp.com/"
  },
  {
    name: "FLASH CARDS",
    image: greflash,
    github: "https://github.com/ashwanth1109/GREFlashCards",
    live: "https://greflash.herokuapp.com/"
  },
  {
    name: "REPO SEARCH",
    image: gitSearch,
    github: "https://github.com/ashwanth1109/react-test",
    live: "https://ashwanth1109.github.io/react-test/"
  },
  {
    name: "HASH DOCKET",
    image: hashdocket,
    github: "https://github.com/ashwanth1109/HashDocket",
    live: "https://hashdocket.herokuapp.com/"
  },
  {
    name: "EVENTFUL",
    image: eventful,
    github: "https://github.com/ashwanth1109/EventfulRails",
    live: "https://eventful-rails.herokuapp.com/"
  }
];

// CREDO
export const credo = require("articles/Credo.md");

// THE BIGGER PICTURE

const devOpsVsSRE = {
  title: "DEV OPS VS SRE: Competing Standards?",
  link: "dev-ops-vs-sre",
  date: "May 30, 2019",
  description: "To build, maintain and run production systems at scale",
  length: "10 min read",
  content: require("articles/DevOps-vs-SRE.md")
};

const reactInternals1 = {
  title: "React Internals Part 1 - React Base Classes",
  link: "react-internals",
  date: "June 16, 2019",
  description: "A deep dive into react's source code: Component, PureComponent",
  length: "10 min read",
  content: require("articles/React/ReactInternals1.md")
};

const reactInternals2 = {
  title: "React Internals Part 2 - A deep dive into React's source code",
  link: "react-internals-2",
  date: "July 3, 2019",
  description:
    "A deep dive into react's source code: createRef, ReactCreateEventComponent, React Children",
  length: "xx min read",
  content: require("articles/React/ReactInternals2.md")
};

const cicd = {
  title: "Continuous Integration and Deployment: Automation through CircleCI",
  link: "cicd-circleci",
  date: "June 16, 2019",
  description: "Setting up a React Firebase App for CICD using CircleCI",
  length: "5 min read",
  content: require("articles/CICD.md")
};

// THE DEVIL IS IN THE DETAILS

const automaticSlideshow = {
  component: () => <Slideshow />,
  title: "Mastering React Hooks with an Automatic Slideshow Carousel",
  link: "automatic-slideshow-carousel-with-hooks",
  date: "June 1, 2019",
  description:
    "A step by step code article that explains how I built an automatic slideshow carousel component using several commonly used hooks and a custom hook ",
  length: "20 min read",
  content: require("articles/Slideshow-Carousel.md")
};

const simpleColorHash = {
  component: () => <HSLColorWheel />,
  title: "Simple Color Hash - My first npm package",
  link: "simple-color-hash",
  date: "June 29, 2019",
  description: "An intro into color theory and publishing npm packages",
  length: "10 min read",
  content: require("articles/ColorHash.md")
};

// BUILDING BLOCKS

const introToCS = {
  title: "Introduction to Computer Science (using python)",
  link: "intro-to-cs-using-python",
  date: "June 23, 2019",
  description: "Lecture Material from MIT OCW",
  length: "20 min read",
  content: require("articles/Lectures/IntroToCS/IntroToCS.md")
};

export const bigPicturePosts = [cicd, devOpsVsSRE];

export const codePosts = [simpleColorHash, automaticSlideshow];

export const reactInternalsPosts = [reactInternals1, reactInternals2];

export const buildingBlocks = [introToCS];

export const techArticles = {
  "dev-ops-vs-sre": devOpsVsSRE,
  "automatic-slideshow-carousel-with-hooks": automaticSlideshow,
  "cicd-circleci": cicd,
  "react-internals": reactInternals1,
  "react-internals-2": reactInternals2,
  "intro-to-cs-using-python": introToCS,
  "simple-color-hash": simpleColorHash
};
// MUSIC ARTICLES

const preludeCMajor = {
  title: "Prelude in C Major - Johann Sebastian Bach",
  link: "prelude-in-c-major",
  date: "July 1, 2019",
  description: "Chord progressions and musical patterns in Prelude in C Major",
  length: "xx min read",
  content: require("articles/Music/PreludeCMajor.md")
};

export const classicalPosts = [preludeCMajor];

export const musicArticles = {
  "prelude-in-c-major": preludeCMajor
};
// MUSIC VIDEOS

export const musicVideos = [
  {
    title: "River flows in you - Yiruma",
    id: "6JkbpphdFak"
  },
  {
    title: "Light of the Seven - Ramin Djawadi",
    id: "zIJf9nQ50-Q"
  },
  {
    title: "Westworld Theme - Ramin Djawadi",
    id: "QD4a8V3LKTI"
  },
  {
    title: "Canon in D - Pachelbel",
    id: "RdW2qAqSXQY"
  }
];
