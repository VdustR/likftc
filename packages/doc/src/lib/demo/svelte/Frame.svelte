<script lang="ts">
  import { onMount } from "svelte";

  const intervalMs = 200;
  const frames: [number, number, number][] = [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 1],
    [4, 1, 2],
    [4, 3, 2],
    [2, 3, 4],
  ];

  let frameIndex = 0;
  $: frame = frames[frameIndex];
  onMount(() => {
    let interval: NodeJS.Timer | null = setInterval(() => {
      frameIndex++;
      if (frameIndex >= frames.length - 1) {
        clear();
        return;
      }
    }, intervalMs);
    function clear() {
      if (!interval) return;
      clearInterval(interval);
      interval = null;
    }
    return clear;
  });
</script>

<slot {frame} />
