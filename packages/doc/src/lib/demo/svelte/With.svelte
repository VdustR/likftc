<script lang="ts">
  import Likftc from "@likftc/svelte";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import { v4 } from "uuid";
  import Frame from "./Frame.svelte";
</script>

<ul>
  <Frame let:frame>
    <Likftc keys={frame} generator={v4} let:get>
      {#each frame as item (get(item))}
        <li
          animate:flip={{ duration: 1000 }}
          transition:fade|local={{ duration: 1000 }}
        >
          {item}
        </li>
      {/each}
    </Likftc>
  </Frame>
</ul>
