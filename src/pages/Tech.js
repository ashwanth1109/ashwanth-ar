// @flow

import React from "react";

import { TechPage } from "./styles";

import Accordion from "components/Accordion";
import MiniApps from "components/MiniApps";
import BlogPost from "components/BlogPost";

import { bigPicturePosts, codePosts } from "data";

const Tech = () => {
  return (
    <TechPage>
      <Accordion title="THE DEVIL IS IN THE DETAILS">
        <div>
          {codePosts.map((article, id) => (
            <BlogPost key={id} article={article} />
          ))}
        </div>
      </Accordion>
      <Accordion title="THE BIGGER PICTURE">
        {bigPicturePosts.map((article, id) => (
          <BlogPost key={id} article={article} />
        ))}
      </Accordion>
      <MiniApps />
    </TechPage>
  );
};

export default Tech;
