// @flow

import React from "react";

import { PhilosophyPage } from "./styles";

import { Heading, Quote } from "styles";

// type Props = {
//   //
// };

const Philosophy = () => {
  return (
    <PhilosophyPage>
      <Heading>
        <Quote>“The unexamined life is not worth living”</Quote>{" "}
        <span style={{ marginRight: "16px" }}>-</span> Socrates.
      </Heading>
    </PhilosophyPage>
  );
};

export default Philosophy;
