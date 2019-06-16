// @flow

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "styles/oneDark";

type Props = {
  language: string,
  value: string
};

const CodeBlock = ({ language, value }: Props) => (
  <SyntaxHighlighter language={language} style={oneDark}>
    {value}
  </SyntaxHighlighter>
);

export default CodeBlock;
