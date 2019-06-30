// @flow

import React, { useState } from "react";
import { connect } from "react-redux";

import {
  ColorWheelContainer,
  ColorWheel,
  HSLGenerator,
  DisplayColor,
  HSLInputs,
  HSLLabel,
  HSLInput
} from "./styles";
import { Container } from "styles";

type Props = {
  width: any
};

const HSLColorWheel = ({ width }: Props) => {
  const [hue, setHue] = useState(0);
  const [sat, setSat] = useState(0);
  const [light, setLight] = useState(0);
  return (
    <ColorWheelContainer smallDevice={width < 500}>
      <ColorWheel src="http://web.simmons.edu/~grovesd/comm244/notes/week3/color_wheel.jpg" />
      <HSLGenerator>
        <DisplayColor hue={hue} sat={sat} light={light} />
        <HSLInputs>
          <Container>
            <HSLLabel>Enter Hue: </HSLLabel>
            <HSLInput value={hue} onChange={e => setHue(e.target.value)} />
          </Container>
          <Container>
            <HSLLabel>Enter Saturation: </HSLLabel>
            <HSLInput value={sat} onChange={e => setSat(e.target.value)} />
          </Container>
          <Container>
            <HSLLabel>Enter Lightness: </HSLLabel>
            <HSLInput value={light} onChange={e => setLight(e.target.value)} />
          </Container>
        </HSLInputs>
      </HSLGenerator>
    </ColorWheelContainer>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(HSLColorWheel);
