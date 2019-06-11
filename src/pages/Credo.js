// @flow

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

import { CredoPage } from "./styles";

import { credo } from "data";
import { Article } from "styles";

type Props = {
  width: number
};

const Credo = ({ width }: Props) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(credo)
        .then(res => res.text())
        .then(text => setMarkdown(text));
    };
    fetchData();
  });

  return (
    <CredoPage>
      <Article smallDevice={width < 500}>
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </Article>
    </CredoPage>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(Credo);
