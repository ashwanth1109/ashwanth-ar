// @flow

import React, { useEffect, useState } from "react";
import marked from "marked";
import Highlight from "react-highlight";

import { AboutPage } from "./styles";

import { Article } from "styles";

type Props = {
  test: any
};

const TechArticles = ({ test }: Props) => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    const readmePath = require("../articles/DevOps-vs-SRE.md");
    fetch(readmePath)
      .then(res => res.text())
      .then(text => setMarkdown(marked(text)));
  }, []);

  console.log(markdown);
  return (
    <AboutPage>
      <Article>
        <Highlight innerHTML={true}>{markdown}</Highlight>
      </Article>
    </AboutPage>
  );
};

export default TechArticles;
