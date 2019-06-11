// @flow

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/styles/prism";

type Props = {
  language: string,
  value: string
};

const CodeBlock = ({ language, value }: Props) => (
  <SyntaxHighlighter language={language} style={darcula}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
