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
  length: "5 min read",
  content: require("articles/DevOps-vs-SRE.md")
};

const reactInternals1 = {
  title: "React Internals Part 1 - A deep dive into React's source code",
  link: "react-internals",
  date: "June 16, 2019",
  description: "My notes on the react repo's source code",
  length: "XX min read",
  content: require("articles/ReactInternals1.md")
};

const reactInternals2 = {
  title: "React Internals Part 2 - A deep dive into React's source code",
  link: "part-2",
  date: "June 16, 2019",
  description: "My notes on the react repo's source code",
  length: "XX min read"
};

const cicd = {
  title: "Continuous Integration and Deployment: Automation through CircleCI",
  link: "cicd-circleci",
  date: "June 16, 2019",
  description: "Setting up a React Firebase App for CICD using CircleCI",
  length: "XX min read",
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
  length: "10 min read",
  content: require("articles/Slideshow-Carousel.md")
};

// BUILDING BLOCKS

const introToCS = {
  title: "Introduction to Computer Science (using python)",
  link: "intro-to-cs-using-python",
  date: "June 23, 2019",
  description: "Lecture Material from MIT OCW",
  length: "XX min read",
  content: require("articles/Lectures/IntroToCS/IntroToCS.md")
};

export const bigPicturePosts = [reactInternals1, cicd, devOpsVsSRE];

export const codePosts = [automaticSlideshow];

export const reactInternalsPosts = [reactInternals2];

export const buildingBlocks = [introToCS];

export const techArticles = {
  "dev-ops-vs-sre": devOpsVsSRE,
  "automatic-slideshow-carousel-with-hooks": automaticSlideshow,
  "cicd-circleci": cicd,
  "react-internals": reactInternals1,
  "react-internals-2": reactInternals2,
  "intro-to-cs-using-python": introToCS
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
