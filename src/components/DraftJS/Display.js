// @flow

import React, { useEffect, useState } from "react";

import { Display as StyledDisplay } from "./styles";

type Props = {
  display: any
};

const Display = ({ display }: Props) => {
  const [logs, setLogs]: [Array<any>, Function] = useState([]);
  // console.log({ display, logs });
  useEffect(() => {
    if (display) setLogs(prev => [...prev, display]);
  }, [display]);
  return (
    <StyledDisplay>
      {logs.map((log, id) => (
        <div key={id}>{log.blocks[0].text}</div>
      ))}
    </StyledDisplay>
  );
};

export default Display;
