// @flow

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import marked from "marked";
import Highlight from "react-highlight";

import { TechArticlePage } from "./styles";

import { techArticles } from "data";
import { Article } from "styles";

type Props = {
  article: string,
  width: Number
};

const TechArticles = ({ article, width }: Props) => {
  const [markdown, setMarkdown] = useState("");
  const { content, component } = techArticles[article] || {};

  useEffect(() => {
    if (content) {
      const fetchData = async () => {
        await fetch(content)
          .then(res => res.text())
          .then(text => setMarkdown(marked(text)));
      };
      fetchData();
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
        <Article smallDevice={width < 500}>
          <Highlight innerHTML={true}>{markdown}</Highlight>
        </Article>
      </TechArticlePage>
    );
  }
  return <TechArticlePage>Article Not Found</TechArticlePage>;
};

const mapStateToProps = ({ location, app }) => ({
  article: location.payload.article,
  width: app.viewport.w
});

export default connect(mapStateToProps)(TechArticles);
