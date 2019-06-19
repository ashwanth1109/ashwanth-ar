// @flow

import React from "react";

type Props = {
  isOpen: any
};

const Plus = ({ isOpen }: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15"
        y="30"
        transform="rotate(180,26,32)"
        width="11"
        height={isOpen ? "0" : "31"}
        rx="5"
        fill="#F4B400"
        style={{ transition: "1s ease-in-out" }}
      />
      <rect
        x="26"
        y="32"
        width="11"
        height={isOpen ? "0" : "31"}
        rx="5"
        fill="#F4B400"
        style={{ transition: "1s ease-in-out" }}
      />
      <rect y="26" width="63" height="11" rx="5" fill="#F4B400" />
    </svg>
  );
};

export default Plus;
