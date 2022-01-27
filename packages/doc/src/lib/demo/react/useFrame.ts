import { useEffect, useMemo, useState } from "react";

const intervalMs = 200;
const frames: [number, number, number][] = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 1],
  [4, 1, 2],
  [4, 3, 2],
  [2, 3, 4],
];

export default function useFrame(): [number, number, number] {
  const [frameIndex, setFrameIndex] = useState(0);
  const frame = useMemo(() => frames[frameIndex], [frameIndex]);
  useEffect(() => {
    let interval: NodeJS.Timer | null;
    function clear() {
      if (!interval) return;
      clearInterval(interval);
      interval = null;
    }
    interval = setInterval(() => {
      setFrameIndex((frameIndex) => {
        const next = frameIndex + 1;
        if (next >= frames.length - 1) {
          clear();
        }
        return next;
      });
    }, intervalMs);
    return () => {
      clear();
    };
  }, []);
  return frame;
}
