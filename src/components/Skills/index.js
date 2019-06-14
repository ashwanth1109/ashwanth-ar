// @flow

import React from "react";

import {
  SkillSection,
  Icon,
  IconContainer,
  IconTitle,
  IconCell
} from "./styles";
import { Container, Heading } from "styles";
import { iconPack1, iconPack2 } from "assets/icons";

const Skills = () => {
  return (
    <Container flex="column" margin="16px">
      <Heading>THINGS I KNOW PRETTY WELL</Heading>
      <SkillSection>
        {iconPack1.map((icon, id) => (
          <IconCell key={id}>
            <IconContainer>
              <Icon src={icon.src} />
            </IconContainer>
            <IconTitle>{icon.name}</IconTitle>
          </IconCell>
        ))}
      </SkillSection>
      <Heading>THINGS I THINK I KNOW</Heading>
      <SkillSection>
        {iconPack2.map((icon, id) => (
          <IconCell key={id}>
            <IconContainer>
              <Icon src={icon.src} />
            </IconContainer>
            <IconTitle>{icon.name}</IconTitle>
          </IconCell>
        ))}
      </SkillSection>
    </Container>
  );
};

export default Skills;
