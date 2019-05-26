// @flow

import styled from "styled-components";

import { colors, fonts } from "styles/constants";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 8px;
  margin: 32px 16px;
  background: ${colors.slabGray};
  align-items: center;
  padding: 10px;
`;

export const ProfilePicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Para = styled.p`
  font-family: ${fonts.primary};
  font-size: 20px;
`;
