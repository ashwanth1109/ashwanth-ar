// @flow

import React from "react";

import {
  Card,
  ProfilePicture,
  Para,
  ScrollArea,
  ScrollContent
} from "./styles";
// import Card from "./Card";
import profile from "assets/profile-photo.jpg";

type Props = {
  test: any
};

const Info = ({ test }: Props) => {
  return (
    <Card>
      <ProfilePicture src={profile} alt="profile picture" />
      <Para>
        I'm a full stack Javascript developer with a focus on the MERN stack. I
        love all things React and my core competencies are in front end
        development. I design my own wireframes and UI in Sketch. I have
        experience developing in the React Native framework for the mobile as
        well.
      </Para>
      <Para>
        I love binging on problems from CodeWars, HackerRank or Project Euler.
        In my free time, I look for pieces to learn and play on the piano from
        youtube, hdpiano or flowkey. I am a Beatlemaniac and Ramin Djawadi's
        music is my bible for music theory.
      </Para>
    </Card>
  );
};

export default Info;
