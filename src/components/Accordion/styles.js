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
  border-bottom-left-radius: initial;
  border-bottom-right-radius: initial;
`;

export const PlusContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding-right: 20px;
`;

export const AccordionBody = styled.div`
  width: 100%;
  border: 1px solid ${colors.charcoal};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: ${ifProp("isOpen", props => props.height + 50, "0")}px;
  overflow: hidden;
  transition: 1s ease-in-out height;
  padding: 0 16px;
`;
