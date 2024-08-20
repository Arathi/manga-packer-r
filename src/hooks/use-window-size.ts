import { unsafeWindow } from "$";
import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
  scale: number;
}

function innerSize(): WindowSize {
  return {
    width: unsafeWindow.innerWidth,
    height: unsafeWindow.innerHeight,
    scale: unsafeWindow.devicePixelRatio,
  };
}

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>(innerSize());
  useEffect(() => {
    setSize(innerSize());
  }, []);
  return size;
};

export default useWindowSize;
