// @flow

import React from "react";

import { Dot } from "./styles";

import { Container } from "styles";

const Loader = () => {
  return (
    <Container height="initial">
      <Dot delay={0} />
      <Dot delay={0.25} />
      <Dot delay={0.5} />
    </Container>
  );
};

export default Loader;
