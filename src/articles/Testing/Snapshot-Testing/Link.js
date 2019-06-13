// @flow

import React, { useState, useCallback } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

const Link = ({ page, children }: { page: string, children: any }) => {
  const [status: string, setStatus: Function] = useState(STATUS.NORMAL);
  const _onMouseEnter = useCallback(() => {
    setStatus(STATUS.HOVERED);
  }, []);
  const _onMouseLeave = useCallback(() => {
    setStatus(STATUS.NORMAL);
  }, []);
  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
