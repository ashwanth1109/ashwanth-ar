// @flow

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

import CodeBlock from "../CodeBlock";

import { TechArticlePage } from "./styles";

import { techArticles } from "data";
import { Article } from "styles";

type Props = {
  article: string,
  width: number
};

const TechArticles = ({ article, width }: Props) => {
  const [markdown, setMarkdown] = useState("");
  const { content, component } = techArticles[article] || {};

  useEffect(() => {
    if (content) {
      const fetchData = async () => {
        await fetch(content)
          .then(res => res.text())
          .then(text => setMarkdown(text));
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
          <ReactMarkdown
            source={markdown}
            renderers={{ code: CodeBlock }}
            escapeHtml={false}
          />
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
