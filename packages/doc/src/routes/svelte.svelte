<script lang="ts" context="module">
  export const prerender = true;
  import CodeWith from "$lib/code/svelte/With.svelte";
  import CodeWithout from "$lib/code/svelte/Without.svelte";
  import Demo from "$lib/component/Demo.svelte";
  import Title from "$lib/component/Title.svelte";
  import With from "$lib/demo/svelte/With.svelte";
  import Without from "$lib/demo/svelte/Without.svelte";
  import { onMount, tick } from "svelte";
</script>

<script lang="ts">
  let withEl: HTMLDivElement;
  let withoutEl: HTMLDivElement;
  async function renderWith() {
    await tick();
    new With({ target: withEl });
  }
  async function renderWithout() {
    await tick();
    new Without({ target: withoutEl });
  }
  onMount(() => {
    renderWith();
    renderWithout();
  });
</script>

<Title>{"Svelte Demo"}</Title>

<Demo on:refreshWith={renderWith} on:refreshWithout={renderWithout}>
  <div slot="with" bind:this={withEl} />
  <div slot="without" bind:this={withoutEl} />
  <CodeWith slot="code-with" />
  <CodeWithout slot="code-without" />
</Demo>
