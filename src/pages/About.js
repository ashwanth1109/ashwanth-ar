// @flow

import React from "react";
import { connect } from "react-redux";

import { AboutPage } from "./styles";
import Info from "components/Info";
import Skills from "components/Skills";
import { Container } from "styles";

type Props = {
  width: number
};

const About = ({ width }: Props) => {
  return (
    <AboutPage>
      {width > 1000 ? (
        <>
          <Container flexValue={1}>
            <Info />
          </Container>
          <Container flexValue={2}>
            <Skills />
          </Container>
        </>
      ) : (
        <Container flex="column" margin="0 16px">
          <Info />
          <Skills />
        </Container>
      )}
    </AboutPage>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(About);
