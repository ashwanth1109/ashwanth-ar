// @flow

import React from "react";
import { connect } from "react-redux";

import * as pages from "./pages";

import Header from "components/Header";
import { Page as StyledPage } from "styles";

const App = ({ page }) => {
  const Page = pages[page];
  if (page !== "Home") {
    return (
      <StyledPage>
        <Header />
        <Page />
      </StyledPage>
    );
  }
  return <Page />;
};

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(App);
