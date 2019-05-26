// @flow

import styled from "styled-components";

import { fonts } from "styles/constants";

export const SkillSection = styled.div`
  margin: 24px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-row-gap: 24px;
  grid-column-gap: 12px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: 100px;
  max-width: 100px;
`;

export const IconTitle = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-family: ${fonts.primary};
  font-size: 24px;
`;

export const IconCell = styled.div``;
