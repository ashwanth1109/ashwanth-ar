// @flow

import React from "react";

import { TechPage } from "./styles";
import {
  Heading,
  SubHeading,
  Spacer,
  Para,
  Container,
  BlogImage
} from "styles";

import devops from "assets/blog/devops.png";

// type Props = {
//   //
// };

const Tech = () => {
  return (
    <TechPage>
      <Heading>DevOps vs SRE: Competing Standards or Friends?</Heading>
      <Spacer height="24px" />
      <Container flex="column" align="flex-start" margin="0 0 0 16px">
        <Container>
          <BlogImage src={devops} width="60%" />
        </Container>
        <SubHeading>Introduction</SubHeading>
        <Para>Two groups - Developers and Operators</Para>
        <Para>
          Developers - Concerned with agility; build features or software and
          ship it as quickly as possible to get it in the hands of the customers
          or users.
        </Para>
        <Para>
          Operators - Concerned with stability; its not broken, please dont
          touch it. It is your role to make sure that the system never went
          down.
        </Para>
        <Para>Two competing groups with different priorities.</Para>
        <Para>
          As we introduce new functionality to a system, we also introduce
          instability.
        </Para>
        <Para>
          In summary, developers who aim to move quickly and thereby, introduce
          instability. Operators are trying to slow things down as much as
          possible because its not broken, please dont touch it.
        </Para>
      </Container>
    </TechPage>
  );
};

export default Tech;
