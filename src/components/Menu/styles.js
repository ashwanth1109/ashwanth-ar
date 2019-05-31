// @flow

import styled from "styled-components";

import { Button } from "styles";

export const Menu = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 7px;
`;

export const Option = styled(Button)`
  width: 150px;
`;
