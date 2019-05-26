// @flow

import React from "react";
import { Page } from "styles";
import Header from "components/Header";

const withHeader = Component => {
  const App = () => {
    return (
      <Page>
        <Header />
        <Component />
      </Page>
    );
  };
  return App;
};

export default withHeader;
