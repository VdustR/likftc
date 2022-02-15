<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import Frame from "./Frame.svelte";
</script>

<ul>
  <Frame let:frame>
    {#each frame as item (item)}
      <li
        animate:flip={{ duration: 1000 }}
        transition:fade|local={{ duration: 1000 }}
      >
        {item}
      </li>
    {/each}
  </Frame>
</ul>
