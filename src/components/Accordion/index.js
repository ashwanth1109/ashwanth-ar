// @flow

import React, { useState, useRef } from "react";

import {
  Accordion as StyledAccordion,
  PlusContainer,
  AccordionHeader,
  AccordionBody
} from "./styles";

import Plus from "assets/Plus";

import { Container } from "styles";

type Props = {
  children: any,
  title: string
};

const Accordion = ({ bodyHeight, children, title }: Props) => {
  const contentRef = useRef();
  const [isOpen: boolean, setIsOpen: Function] = useState(false);

  return (
    <StyledAccordion>
      <AccordionHeader onClick={() => setIsOpen(prev => !prev)}>
        {title}
        <PlusContainer>
          <Container>
            <Plus isOpen={isOpen} />
          </Container>
        </PlusContainer>
      </AccordionHeader>
      <AccordionBody
        isOpen={isOpen}
        height={(contentRef.current || {}).clientHeight}
      >
        <div ref={contentRef}>{children}</div>
      </AccordionBody>
    </StyledAccordion>
  );
};

export default Accordion;
