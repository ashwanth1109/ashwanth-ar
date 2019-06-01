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
    id: "PHILOSOPHY",
    link: "/philosophy"
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

// THE BIGGER PICTURE

const devOpsVsSRE = {
  title: "DEV OPS VS SRE: Competing Standards?",
  link: "dev-ops-vs-sre",
  date: "May 30, 2019",
  description: "To build, maintain and run production systems at scale",
  length: "5 min read",
  content: require("articles/DevOps-vs-SRE.md")
};

// THE DEVIL IS IN THE DETAILS

const automaticSlideshow = {
  component: () => <Slideshow />,
  title: "Automatic Slideshow Carousel in React",
  link: "automatic-slideshow-in-react",
  date: "June 1, 2019",
  description: "An automatic slideshow carousel built with react hooks",
  length: "5 min read",
  content: require("articles/Slideshow-Carousel.md")
};

export const bigPicturePosts = [devOpsVsSRE];

export const codePosts = [automaticSlideshow];

export const techArticles = {
  "dev-ops-vs-sre": devOpsVsSRE,
  "automatic-slideshow-in-react": automaticSlideshow
};
