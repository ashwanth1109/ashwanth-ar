// @flow

import React from "react";
import { connect } from "react-redux";

import { Contact, Tray, IconContainer, IconTitle, Icon } from "./styles";

import { iconPack0 } from "assets/icons";
import { Container } from "styles";

type Props = {
  show: boolean,
  width: Number
};

const ContactDetails = ({ show, width }: Props) => {
  return (
    <Contact show={show}>
      <Tray show={show} smallText={width < 600}>
        <Container justify={width > 600 ? "space-around" : "center"}>
          Connect with me:
          {iconPack0.map((icon, id) => (
            <IconContainer
              key={id}
              onClick={() => window.open(icon.link, "_blank")}
            >
              <Icon src={icon.src} />
              {width > 600 && <IconTitle>{icon.name}</IconTitle>}
            </IconContainer>
          ))}
        </Container>
      </Tray>
    </Contact>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(ContactDetails);
