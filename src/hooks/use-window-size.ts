import { useEffect, useState } from "react";
import { unsafeWindow } from "$";

export interface WindowSize {
  width: number;
  height: number;
}

function getSize(): WindowSize {
  return {
    width: unsafeWindow.innerWidth,
    height: unsafeWindow.innerHeight,
  };
}

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>(getSize());
  useEffect(() => {
    setSize(getSize());
  }, []);
  return size;
};

export default useWindowSize;
