import { useEffect, useState } from "react";

export type WindowSize = {
  width: number;
  height: number;
  scale: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    scale: 0,
  });

  function update() {
    const {
      innerWidth: width,
      innerHeight: height,
      devicePixelRatio: scale,
    } = window;
    console.info(`发生变化：${width}x${height}@${scale}x`);
    setWindowSize({
      width,
      height,
      scale,
    });
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return windowSize;
};

export default useWindowSize;
