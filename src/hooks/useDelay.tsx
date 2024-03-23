"use client";

import { useEffect, useState } from "react";

const useDelay = (setTime: number, initialState: boolean) => {
  const [showComponent, setShowComponent] = useState<any>(initialState);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(() => initialState);
    }, setTime);
  }, [setTime, initialState]);

  return [showComponent, setShowComponent];
};

export default useDelay;
