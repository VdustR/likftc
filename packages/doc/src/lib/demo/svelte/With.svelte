<script lang="ts">
  import Likftc from "@vdustr/likftc";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import useFrame from "./useFrame";

  let frame = useFrame();
  const { get, sync } = Likftc($frame);
  $: {
    sync($frame);
  }
</script>

<ul>
  {#each $frame as item (get(item))}
    <li
      animate:flip={{ duration: 1000 }}
      transition:fade|local={{ duration: 1000 }}
    >
      {item}
    </li>
  {/each}
</ul>
