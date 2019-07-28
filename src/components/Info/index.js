// @flow

import React from "react";

import { Card, ProfilePicture, Para } from "./styles";
import profile from "assets/profile-photo.jpg";

const Info = () => {
  return (
    <Card>
      <ProfilePicture src={profile} alt="profile picture" />
      <Para>
        I’m a full stack javascript developer, a calm and methodical problem
        solver with high potential for picking up new technologies rapidly. I
        thrive in high-pressure situations and revel in conquering tough
        obstacles.
      </Para>
      <Para>
        As a business-minded engineer with the ethos of a product designer, I am
        aware of the structure and planning required when crafting a solid
        product - be it in the way I'm devising a timeline, writing code, or
        sketching out designs.
      </Para>
      <Para>
        But I've also come to learn that it is in being flexible, unrelenting,
        empathetic and in the exploration of nonconformist ideas that you can
        truly set apart your brand from the rest.
      </Para>
    </Card>
  );
};

export default Info;
