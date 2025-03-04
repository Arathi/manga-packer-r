import { useEffect, useState } from "react";
import { unsafeWindow } from "$";

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: unsafeWindow.innerWidth,
    height: unsafeWindow.innerHeight,
  });

  useEffect(() => {
    addEventListener('resize', () => {
      setSize({
        width: unsafeWindow.innerWidth,
        height: unsafeWindow.innerHeight,
      });
    })
  }, []);

  return size;
};

export default useWindowSize;
