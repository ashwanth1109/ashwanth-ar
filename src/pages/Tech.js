// @flow

import React from "react";

import { TechPage } from "./styles";
import { Heading } from "styles";

import MiniApps from "components/MiniApps";
import BlogPost from "components/BlogPost";

import { bigPicturePosts, codePosts } from "data";

// type Props = {
//   //
// };

const Tech = () => {
  return (
    <TechPage>
      <Heading>THE DEVIL IS IN THE DETAILS</Heading>
      {codePosts.map((article, id) => (
        <BlogPost key={id} article={article} />
      ))}
      <Heading>THE BIGGER PICTURE</Heading>
      {bigPicturePosts.map((article, id) => (
        <BlogPost key={id} article={article} />
      ))}
      <MiniApps />
    </TechPage>
  );
};

export default Tech;
