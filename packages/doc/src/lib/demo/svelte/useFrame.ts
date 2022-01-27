import { onMount } from "svelte";
import type { Readable } from "svelte/store";
import { derived, writable } from "svelte/store";

const intervalMs = 200;
const frames: [number, number, number][] = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 1],
  [4, 1, 2],
  [4, 3, 2],
  [2, 3, 4],
];

export default function useFrame(): Readable<[number, number, number]> {
  const frameIndex = writable(0);
  const frame = derived(frameIndex, ($frameIndex) => frames[$frameIndex]);
  onMount(() => {
    let interval: NodeJS.Timer | null = setInterval(() => {
      frameIndex.update(($frameIndex) => $frameIndex + 1);
      frameIndex.subscribe(($frameIndex) => {
        if ($frameIndex >= frames.length - 1) {
          clear();
          return;
        }
      });
    }, intervalMs);
    function clear() {
      if (!interval) return;
      clearInterval(interval);
      interval = null;
    }
    return () => {
      clear();
    };
  });
  return frame;
}
