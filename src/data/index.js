// @flow

import jlChat from "assets/projects/jlChat.png";
import checkers from "assets/projects/checkers.png";
import taskIt from "assets/projects/taskIt.png";
import slider from "assets/projects/slider.png";
import greflash from "assets/projects/greflash.png";
import gitSearch from "assets/projects/gitSearch.png";
import hashdocket from "assets/projects/hashdocket.png";
import eventful from "assets/projects/eventful.png";

export const titleText = "Hello, I'm Ashwanth";

export const typewriter = ["DEVELOPER", "PIANIST", "DESIGNER", "ENTREPRENEUR"];

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
    id: "BOOKS",
    link: "/books"
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
