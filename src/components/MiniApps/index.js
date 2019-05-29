// @flow

import React from "react";

import { Projects } from "./styles";

import Project from "./Project";

import { Heading } from "styles";
import { miniApps } from "data";

type Props = {
  test: any
};

const MiniApps = ({ test }: Props) => {
  return (
    <>
      <Heading>MINI-APPLICATIONS</Heading>
      <Projects>
        {miniApps.map(app => (
          <Project app={app} />
        ))}
      </Projects>
    </>
  );
};

export default MiniApps;
