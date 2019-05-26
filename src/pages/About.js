// @flow

import React from "react";

import { ContentPage } from "./styles";
import Card from "components/Info/Card";
import { Container } from "styles";

// type Props = {
//   //
// };

const About = () => {
  return (
    <ContentPage>
      <Container>
        <Container flexValue="1" align="initial">
          <Card>My Info</Card>
        </Container>
        <Container flexValue="2">My Skills</Container>
      </Container>
    </ContentPage>
  );
};

export default About;
