// @flow

import styled from "styled-components";
import { ifProp } from "styled-tools";

import { colors, fonts } from "styles/constants";

export const EditorContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
  > div:nth-child(2) {
    border: 2px solid ${colors.pureWhite};
    padding: 8px;
    font-size: 1.4rem;
    margin-bottom: 16px;
    font-family: ${fonts.secondary};
  }
`;

export const EditorOptions = styled.div`
  position: absolute;
  display: flex;
  bottom: -24px;
`;

export const EditorOption = styled.div`
  background: ${ifProp("isSelected", colors.goldenYellow, colors.slabGray)};
  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 8px;
  color: ${ifProp("isSelected", colors.slabGray)};
`;

export const Display = styled.div`
  width: 100%;
  height: 200px;
  background: ${colors.slabGray};
  margin-bottom: 8px;
`;
