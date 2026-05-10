import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    addEventListener('resize', () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    })
  }, []);

  return size;
};

export default useWindowSize;
