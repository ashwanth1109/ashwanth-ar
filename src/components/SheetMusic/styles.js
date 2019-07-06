import styled from "styled-components";

import { colors } from "styles/constants";

export const Sheet = styled.div`
  display: flex;
  justify-content: center;
  path {
    fill: ${colors.goldenYellow};
  }
  text {
    fill: ${colors.pureWhite};
  }
`;
