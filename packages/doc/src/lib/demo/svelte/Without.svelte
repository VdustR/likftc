<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import useFrame from "./useFrame";

  const frame = useFrame();
</script>

<ul>
  {#each $frame as item (item)}
    <li
      animate:flip={{ duration: 1000 }}
      transition:fade|local={{ duration: 1000 }}
    >
      {item}
    </li>
  {/each}
</ul>
