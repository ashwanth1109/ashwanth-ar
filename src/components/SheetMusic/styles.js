import styled from "styled-components";

import { colors } from "styles/constants";

export const Sheet = styled.div`
  display: flex;
  justify-content: center;
  .abcjs-note, .abcjs-beam-elem, .abcjs-staff, .abcjs-slur, .abcjs-staff-extra {
    fill: ${colors.goldenYellow};
  }
  .abcjs-note-highlight {
    fill: ${colors.pureWhite};
  }
  background: ${colors.darkNight};
  /* path {
    fill: ${colors.goldenYellow};
  } */
  text {
    fill: ${colors.pureWhite};
  }

`;
