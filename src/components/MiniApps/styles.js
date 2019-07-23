// @flow

import styled from "styled-components";

import { Heading } from "styles";

export const Projects = styled.div`
  margin: 16px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 20px;
`;

export const Project = styled.div`
  width: 100%;
`;

export const ProjectHeading = styled(Heading)`
  border-radius: 0;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const Buttons = styled.div`
  display: flex;
`;
