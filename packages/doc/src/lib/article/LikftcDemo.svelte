<script lang="ts">
  import Likftc from "@vdustr/likftc";
  import { onDestroy, onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";

  const frames = [
    ...Array.from(Array(5), () => ""),
    ...Array.from(Array(5), () => "likftc"),
    ...Array.from(Array(5), () => "ctfkil"),
    "ctfki",
    "ctfk",
    "ctf",
    "ct",
    "c",
    "",
    "c",
    "tc",
    "ftc",
    "kftc",
    "ikftc",
    "likftc",
  ];

  let index = 0;
  $: frame = frames[index].split("");
  let interval: NodeJS.Timer | null;
  function clear() {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
  }
  function anime() {
    clear();
    index = 1;
    interval = setInterval(() => {
      index++;
      if (index >= frames.length - 1) {
        clear();
      }
    }, 180);
  }
  onMount(anime);
  onDestroy(clear);
  const { get, sync } = Likftc();
  $: {
    sync(frame);
  }
  $: hideReplay = index < frames.length - 1;
</script>

<table class="demo">
  <tr>
    <td>
      <svg width="1em" height="1em" viewBox="0 0 36 36">
        <path
          fill="#DD2E44"
          d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"
        />
      </svg>
    </td>
    <td>
      <ul>
        {#each frame as item (item)}
          <li
            animate:flip={{ duration: 400 }}
            transition:fade|local={{ duration: 400 }}
          >
            {item}
          </li>
        {/each}
      </ul>
    </td>
    <td rowspan={2}>
      <button
        on:click={anime}
        class:opacity-0={hideReplay}
        class:pointer-events-none={hideReplay}
        class:transition-all={true}
      >
        {"Replay"}
      </button>
    </td>
  </tr>
  <tr>
    <td>
      <svg width="1em" height="1em" viewBox="0 0 36 36">
        <path
          fill="#31b044"
          d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"
        />
      </svg>
    </td>
    <td>
      <ul>
        {#each frame as item (get(item))}
          <li
            animate:flip={{ duration: 400 }}
            transition:fade|local={{ duration: 400 }}
          >
            {item}
          </li>
        {/each}
      </ul>
    </td>
  </tr>
</table>

<style lang="scss">
  table {
    margin-left: auto;
    margin-right: auto;
    ul {
      display: flex;
      gap: 0.25em;
      width: 80px;
      height: 30px;
      align-items: center;
      justify-content: center;
    }
    tr td:nth-child(2) {
      padding: 0 1.2em;
    }
  }
</style>
