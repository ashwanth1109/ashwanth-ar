// @flow

import React from "react";

import { Card as StyledCard } from "./styles";

type Props = {
  children: any
};

const Card = ({ children }: Props) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
