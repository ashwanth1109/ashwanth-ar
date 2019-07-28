// @flow

import React from "react";

import { ContentPage } from "./styles";

type Props = {
  test: any
};

const Unifize = ({ test }: Props) => {
  return (
    <ContentPage>
      <h1>My Work at Unifize</h1>
      <p className="highlight">Work in Progress. Stay tuned for updates.</p>
    </ContentPage>
  );
};

export default Unifize;
