// @flow

import React from "react";

import { AboutPage } from "./styles";
import Info from "components/Info";
import Skills from "components/Skills";
import { Container } from "styles";

// type Props = {
//   //
// };

const About = () => {
  return (
    <AboutPage>
      <Container flexValue={1}>
        <Info />
      </Container>
      <Container flexValue={2}>
        <Skills />
      </Container>
    </AboutPage>
  );
};

export default About;
