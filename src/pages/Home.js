// @flow

import React, { useState, useEffect } from "react";

import { HomePage, Logo, HomeMenuWrapper } from "./styles";

import { Title, Container } from "styles";
import logo from "assets/logo.svg";
import TypeWriter from "components/TypeWriter";
import Menu from "components/Menu";
import { titleText, typewriter, menuOptions } from "data";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(prevState => !prevState);
  }, []);

  return (
    <HomePage>
      <Container flex="column">
        <Logo src={logo} pose={animate ? "init" : ""} />
        <Title>{titleText}</Title>
        <TypeWriter words={typewriter} />
        <HomeMenuWrapper>
          <Menu options={menuOptions} />
        </HomeMenuWrapper>
      </Container>
    </HomePage>
  );
};

export default Home;
