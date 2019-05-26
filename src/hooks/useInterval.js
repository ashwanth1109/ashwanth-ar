// @flow

import { useRef, useEffect } from "react";

const useInterval = (callback: Function, delay: number) => {
  const savedCallback: { current: any } = useRef();

  // update callback on change
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // tick calls current callback (which does stay updated)
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
