import { useEffect, useState } from "react";

export type WindowSize = {
  width: number;
  height: number;
  scale: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    scale: window.devicePixelRatio,
  });

  useEffect(() => {
    const updateWindowSize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        scale: window.devicePixelRatio,
      });
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return windowSize;
};

export default useWindowSize;
