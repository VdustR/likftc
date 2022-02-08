<script lang="ts" context="module">
  export const prerender = true;
  import CodeWith from "$lib/code/react/With.svelte";
  import CodeWithout from "$lib/code/react/Without.svelte";
  import Demo from "$lib/component/Demo.svelte";
  import Title from "$lib/component/Title.svelte";
  import With from "$lib/demo/react/With";
  import Without from "$lib/demo/react/Without";
  import { createElement } from "react";
  import { render } from "react-dom";
  import { onMount, tick } from "svelte";
</script>

<script lang="ts">
  let withEl: HTMLDivElement;
  let withoutEl: HTMLDivElement;
  async function renderWith() {
    await tick();
    render(createElement(With), withEl);
  }
  async function renderWithout() {
    await tick();
    render(createElement(Without), withoutEl);
  }
  onMount(() => {
    renderWith();
    renderWithout();
  });
</script>

<Title>{"React FLIP Toolkit Demo"}</Title>

<Demo on:refreshWith={renderWith} on:refreshWithout={renderWithout}>
  <div slot="with" bind:this={withEl} />
  <div slot="without" bind:this={withoutEl} />
  <CodeWith slot="code-with" />
  <CodeWithout slot="code-without" />
</Demo>
