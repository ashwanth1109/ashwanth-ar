// @flow

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import marked from "marked";
import Highlight from "react-highlight";

import { TechArticlePage } from "./styles";

import { techArticles } from "data";
import { Article } from "styles";

type Props = {
  article: string
};

const TechArticles = ({ article }: Props) => {
  const [markdown, setMarkdown] = useState("");
  const { content, component } = techArticles[article] || {};

  useEffect(() => {
    if (content) {
      fetch(content)
        .then(res => res.text())
        .then(text => setMarkdown(marked(text)));
    } else setMarkdown("NOT_FOUND");
  }, [content]);

  const renderComponent = () => {
    if (component) return component();
    return null;
  };

  if (markdown !== "NOT_FOUND") {
    return (
      <TechArticlePage>
        {renderComponent()}
        <Article>
          <Highlight innerHTML={true}>{markdown}</Highlight>
        </Article>
      </TechArticlePage>
    );
  }
  return <TechArticlePage>Article Not Found</TechArticlePage>;
};

const mapStateToProps = ({ location }) => ({
  article: location.payload.article
});

export default connect(mapStateToProps)(TechArticles);
