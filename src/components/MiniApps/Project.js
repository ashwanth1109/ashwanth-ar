// @flow

import React from "react";

import { Project as StyledProject, ProjectImage, Buttons } from "./styles";

import { Heading, Button } from "styles";

type Props = {
  app: any
};

const Project = ({ app }: Props) => {
  const { name, image, github, live } = app;
  return (
    <StyledProject>
      <Heading>{name}</Heading>
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
