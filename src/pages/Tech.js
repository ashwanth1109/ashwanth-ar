// @flow

import React, { useEffect, useState } from "react";

import { TechPage } from "./styles";
import {
  Heading,
  SubHeading,
  Spacer,
  Para,
  Container,
  BlogImage,
  Article
} from "styles";

import MiniApps from "components/MiniApps";

// type Props = {
//   //
// };

const Tech = () => {
  return (
    <TechPage>
      <MiniApps />
    </TechPage>
  );
};

export default Tech;
