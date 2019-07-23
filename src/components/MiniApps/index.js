// @flow

import React from "react";

import { Projects } from "./styles";

import Project from "./Project";

import { miniApps } from "data";

const MiniApps = () => {
  return (
    <>
      <Projects>
        {miniApps.map((app, id) => (
          <Project app={app} key={id} />
        ))}
      </Projects>
    </>
  );
};

export default MiniApps;
