// @flow

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Markdown from "markdown-to-jsx";

import YoutubeVideo from "./YoutubeVideo";
import { CredoPage } from "./styles";
import { Article } from "styles";
import { musicArticles } from "data";

type Props = {
  article: string,
  width: number
};

const MusicArticles = ({ article, width }: Props) => {
  const [markdown, setMarkdown] = useState("");
  const { content } = musicArticles[article] || {};

  useEffect(() => {
    const fetchData = async () => {
      await fetch(content)
        .then(res => res.text())
        .then(text => setMarkdown(text));
    };
    fetchData();
  });

  return (
    <CredoPage>
      <Article smallDevice={width < 500}>
        <Markdown
          children={markdown}
          options={{
            overrides: {
              Youtube: {
                component: YoutubeVideo
              }
            }
          }}
        />
      </Article>
    </CredoPage>
  );
};

const mapStateToProps = ({ location, app }) => ({
  width: app.viewport.w,
  article: location.payload.article
});

export default connect(mapStateToProps)(MusicArticles);
