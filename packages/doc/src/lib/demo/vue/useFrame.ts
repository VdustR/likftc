import type { ComputedRef } from "vue";
import { computed, onBeforeMount, onBeforeUnmount, ref } from "vue";

const intervalMs = 200;
const frames: [number, number, number][] = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 1],
  [4, 1, 2],
  [4, 3, 2],
  [2, 3, 4],
];

export default function useFrame(): ComputedRef<[number, number, number]> {
  const frameIndex = ref(0);
  const frame = computed(() => frames[frameIndex.value]);
  let interval: NodeJS.Timer | null;
  function clear() {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
  }
  onBeforeMount(() => {
    interval = setInterval(() => {
      frameIndex.value++;
      if (frameIndex.value >= frames.length - 1) {
        clear();
        return;
      }
    }, intervalMs);
  });
  onBeforeUnmount(clear);
  return frame;
}
