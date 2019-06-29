// @flow

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Markdown from "markdown-to-jsx";

import { CredoPage } from "./styles";
import Accordion from "components/Accordion";

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
        <Markdown
          children={markdown}
          options={{
            overrides: {
              Accordion: {
                component: Accordion
              }
            }
          }}
        />
      </Article>
    </CredoPage>
  );
};

const mapStateToProps = ({ app }) => ({
  width: app.viewport.w
});

export default connect(mapStateToProps)(Credo);
