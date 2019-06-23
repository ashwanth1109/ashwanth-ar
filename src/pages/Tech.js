// @flow

import React from "react";

import { TechPage } from "./styles";

import Accordion from "components/Accordion";
import MiniApps from "components/MiniApps";
import BlogPost from "components/BlogPost";

import {
  bigPicturePosts,
  codePosts,
  reactInternalsPosts,
  buildingBlocks
} from "data";

const Tech = () => {
  return (
    <TechPage>
      <Accordion title="THE DEVIL IS IN THE DETAILS">
        {codePosts.map((article, id) => (
          <BlogPost key={id} article={article} route="TECH_ARTICLES" />
        ))}
      </Accordion>
      <Accordion title="THE BIGGER PICTURE">
        {bigPicturePosts.map((article, id) => (
          <BlogPost key={id} article={article} route="TECH_ARTICLES" />
        ))}
      </Accordion>
      <Accordion title="REACT INTERNALS">
        {reactInternalsPosts.map((article, id) => (
          <BlogPost key={id} article={article} route="REACT_INTERNALS" />
        ))}
      </Accordion>
      <Accordion title="BUILDING BLOCKS">
        {buildingBlocks.map((article, id) => (
          <BlogPost key={id} article={article} route="TECH_ARTICLES" />
        ))}
      </Accordion>
      <MiniApps />
    </TechPage>
  );
};

export default Tech;
