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
    github: "",
    live: ""
  },
  {
    name: "CHECKERS",
    image: checkers,
    github: "",
    live: ""
  },
  {
    name: "TO DO APP",
    image: taskIt,
    github: "",
    live: ""
  },
  {
    name: "SLIDER",
    image: slider,
    github: "",
    live: ""
  },
  {
    name: "FLASH CARDS",
    image: greflash,
    github: "",
    live: ""
  },
  {
    name: "REPO SEARCH",
    image: gitSearch,
    github: "",
    live: ""
  },
  {
    name: "HASH DOCKET",
    image: hashdocket,
    github: "",
    live: ""
  },
  {
    name: "EVENTFUL",
    image: eventful,
    github: "",
    live: ""
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

const reactInternals = {
  title: "React Internals - A deep dive into React's source code",
  link: "react-internals",
  date: "June 16, 2019",
  description: "My notes on the react repo's source code",
  length: "XX min read",
  content: require("articles/ReactInternals.md")
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

export const bigPicturePosts = [reactInternals, cicd, devOpsVsSRE];

export const codePosts = [automaticSlideshow];

export const techArticles = {
  "dev-ops-vs-sre": devOpsVsSRE,
  "automatic-slideshow-carousel-with-hooks": automaticSlideshow,
  "react-internals": reactInternals,
  "cicd-circleci": cicd
};

// MUSIC VIDEOS

export const musicVideos = [
  {
    title: "River flows in you - Yiruma",
    id: "6JkbpphdFak"
  },
  {
    title: "Light of the seven - Ramin Djawadi",
    id: "zIJf9nQ50-Q"
  },
  {
    title: "River flows in you - Yiruma (Background noise removed)",
    id: "rTIQu44oe9g"
  },
  {
    title: "Canon in D - Pachelbel (re-record this)",
    id: "u3WGkNQ71Iw"
  }
];
