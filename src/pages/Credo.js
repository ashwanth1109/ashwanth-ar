// @flow

import React from "react";

import { CredoPage } from "./styles";

import { Heading, Quote } from "styles";

// type Props = {
//   //
// };

const Credo = () => {
  return (
    <CredoPage>
      <Heading>
        <Quote>“The unexamined life is not worth living”</Quote>{" "}
        <span style={{ marginRight: "16px" }}>-</span> Socrates.
      </Heading>
    </CredoPage>
  );
};

export default Credo;
