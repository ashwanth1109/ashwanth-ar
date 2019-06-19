// @flow

import styled from "styled-components";
import { ifProp } from "styled-tools";

import { Heading } from "styles";
import { colors } from "styles/constants";

export const Accordion = styled.div`
  margin-bottom: 32px;
`;

export const AccordionHeader = styled(Heading)`
  position: relative;
  cursor: pointer;
`;

export const PlusContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 10%;
  max-width: 70px;
`;

export const AccordionBody = styled.div`
  width: 100%;
  border: 1px solid ${colors.charcoal};
  height: ${ifProp("isOpen", props => props.height + 50, "0")}px;
  overflow: hidden;
  transition: 1s ease-in-out height;
`;
