// @flow

import React from "react";

import { Contact, Tray, IconContainer, IconTitle, Icon } from "./styles";

import { iconPack0 } from "assets/icons";
import { Container } from "styles";

type Props = {
  show: boolean
};

const ContactDetails = ({ show }: Props) => {
  return (
    <Contact show={show}>
      <Tray show={show}>
        <Container justify="space-around">
          Connect with me:
          {iconPack0.map((icon, id) => (
            <IconContainer key={id}>
              <Icon src={icon.src} />
              <IconTitle>{icon.name}</IconTitle>
            </IconContainer>
          ))}
        </Container>
      </Tray>
    </Contact>
  );
};

export default ContactDetails;
