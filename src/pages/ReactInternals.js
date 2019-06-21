// @flow

import React from "react";
import Markdown from "markdown-to-jsx";

import { TechArticlePage } from "./styles";

type Props = {
  test: any
};

const MyParagraph = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

const ReactInternals = ({ test }: Props) => {
  return (
    <TechArticlePage>
      <Markdown
        options={{
          overrides: {
            h1: {
              component: MyParagraph,
              props: {
                className: "foo"
              }
            }
          }
        }}
      >
        # Links -
        [BLOG](https://bernardodiasdacruz.com/2018/04/09/markdown-renderer-component-that-can-render-other-react-components/)
        [GITHUB](https://github.com/probablyup/markdown-to-jsx)
      </Markdown>
    </TechArticlePage>
  );
};

export default ReactInternals;
