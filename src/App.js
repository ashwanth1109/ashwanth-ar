// @flow

import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import * as pages from "./pages";

import { setViewport as setVP } from "actions";
import Header from "components/Header";
import { App as StyledApp } from "styles";

const App = ({ page, setViewport }) => {
  const updateWindowDimensions = useCallback(() => {
    setViewport(window.innerWidth, window.innerHeight);
  }, [setViewport]);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, [updateWindowDimensions]);

  const Page = pages[page];
  if (page !== "Home") {
    return (
      <StyledApp>
        <Header />
        <Page />
      </StyledApp>
    );
  }
  return <Page />;
};

const mapStateToProps = ({ page }) => ({ page });

export default connect(
  mapStateToProps,
  {
    setViewport: setVP
  }
)(App);
