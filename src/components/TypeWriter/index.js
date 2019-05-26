// @flow

import React, { useState } from "react";

import { TypeWriter as StyledTypeWriter, Cursor } from "./styles";

import { useInterval } from "hooks";

type Props = {
  words: Array<string>
};

const TypeWriter = ({ words }: Props) => {
  const [word, setWord] = useState(0);
  const [message, setMessage] = useState("");
  const [increasing, setIncreasing] = useState(true);
  const [delay, setDelay] = useState(100);

  useInterval(() => {
    if (increasing) {
      if (message.length < words[word].length) {
        setMessage(words[word].slice(0, message.length + 1));
      } else {
        setDelay(3000);
        setIncreasing(false);
      }
    } else {
      if (message.length > 0) {
        setDelay(100);
        setMessage(words[word].slice(0, message.length - 1));
      } else {
        setIncreasing(true);
        if (word === words.length - 1) setWord(0);
        else setWord(word + 1);
      }
    }
  }, delay);

  return (
    <StyledTypeWriter>
      {message}
      <Cursor />
    </StyledTypeWriter>
  );
};

export default TypeWriter;
