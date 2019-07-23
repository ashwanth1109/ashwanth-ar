// @flow

import React from "react";

import {
  Project as StyledProject,
  ProjectHeading,
  ProjectImage,
  Buttons
} from "./styles";

import { Button } from "styles";

type Props = {
  app: any
};

const Project = ({ app }: Props) => {
  const { name, image, github, live } = app;
  return (
    <StyledProject>
      <ProjectHeading>{name}</ProjectHeading>
      <ProjectImage src={image} />
      <Buttons>
        <Button onClick={() => window.open(live, "blank")}>LIVE SITE</Button>
        <Button onClick={() => window.open(github, "blank")}>
          GITHUB LINK
        </Button>
      </Buttons>
    </StyledProject>
  );
};

export default Project;
