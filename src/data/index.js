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
import DraftJS from "components/DraftJS";

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

const cicd = {
  title: "Continuous Integration and Deployment: Automation through CircleCI",
  link: "cicd-circleci",
  date: "June 16, 2019",
  description: "Setting up a React Firebase App for CICD using CircleCI",
  length: "5 min read",
  content: require("articles/CICD.md")
};

// REACT INTERNALS

const reactInternals1 = {
  title: "React Internals Part 1 - React Base Classes",
  link: "react-internals",
  date: "June 16, 2019",
  description: "A deep dive into react's source code: Component, PureComponent",
  length: "10 min read",
  content: require("articles/React/ReactInternals1.md")
};

const reactInternals2 = {
  title: "React Internals Part 2",
  link: "react-internals-2",
  date: "July 3, 2019",
  description:
    "A deep dive into react's source code: createRef, ReactCreateEventComponent, React Children",
  length: "ongoing",
  content: require("articles/React/ReactInternals2.md")
};

const forwardRef = {
  title: "Forward Ref",
  link: "forward-ref",
  date: "July 29, 2019",
  description:
    "Ref forwarding is a technique for automatically passing a ref through a component to one of its children.",
  length: "ongoing",
  content: require("articles/React/ForwardRef.md")
};

// THE DEVIL IS IN THE DETAILS

const draftJS = {
  component: () => <DraftJS />,
  title: "Getting familiar with Draft JS",
  link: "getting-familiar-with-draft-js",
  date: "July 29, 2019",
  description:
    "Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences.",
  length: "ongoing",
  content: require("articles/DraftJS.md")
};

const regularExpressions = {
  title: "Regular Expressions - Patterns to match character combinations",
  link: "regular-expressions",
  date: "July 3, 2019",
  description: "Getting your feet wet with Regex",
  length: "5 min read",
  content: require("articles/Regex.md")
};

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
  title: "Introduction to Computer Science",
  link: "intro-to-cs",
  date: "June 23, 2019",
  description:
    "Understanding the role computation can play in solving problems",
  length: "ongoing",
  content: require("articles/Lectures/IntroToCS/IntroToCS.md")
};

const introToAlgos = {
  title: "Introduction to Algorithms",
  link: "intro-to-algos",
  date: "July 7, 2019",
  description:
    "Introduction to mathematical modeling of computational problems - common algorithms, algorithmic paradigms and data structures.",
  length: "ongoing",
  content: require("articles/Lectures/IntroToAlgos/IntroToAlgos.md")
};

export const bigPicturePosts = [cicd, devOpsVsSRE];

export const codePosts = [
  simpleColorHash,
  automaticSlideshow,
  regularExpressions,
  draftJS
];

export const reactInternalsPosts = [
  reactInternals1,
  reactInternals2,
  forwardRef
];

export const buildingBlocks = [introToCS, introToAlgos];

export const techArticles = {
  "dev-ops-vs-sre": devOpsVsSRE,
  "automatic-slideshow-carousel-with-hooks": automaticSlideshow,
  "cicd-circleci": cicd,
  "react-internals": reactInternals1,
  "react-internals-2": reactInternals2,
  "forward-ref": forwardRef,
  "intro-to-cs": introToCS,
  "intro-to-algos": introToAlgos,
  "simple-color-hash": simpleColorHash,
  "regular-expressions": regularExpressions,
  "getting-familiar-with-draft-js": draftJS
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

const moonlightSonata = {
  title: "Moonlight Sonata, 1st Movement, Ludwig Van Beethoven",
  link: "moonlight-sonata-1",
  date: "July 27, 2019",
  description: "Chord progressions and musical patterns in Moonlight Sonata",
  length: "ongoing",
  content: require("articles/Music/MoonlightSonata.md")
};

export const classicalPosts = [preludeCMajor, moonlightSonata];

export const musicArticles = {
  "prelude-in-c-major": preludeCMajor,
  "moonlight-sonata-1": moonlightSonata
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
    id: "sknb2JhXUBE"
  },
  {
    title: "Canon in D - Pachelbel",
    id: "8rPWomLmT8A"
  },
  {
    title: "Prelude in C Major - Johann Sebastian Bach",
    id: "6iT-0iYbN8o"
  },
  {
    title: "Victory - Two Steps From Hell",
    id: "Jm1TpMYCKmo"
  }
];
