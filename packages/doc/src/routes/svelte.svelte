<script lang="ts" context="module">
  import Svelte from "$lib/article/Svelte.svx";
  import CodeWith from "$lib/code/svelte/With.svelte";
  import CodeWithout from "$lib/code/svelte/Without.svelte";
  import Article from "$lib/component/Article.svelte";
  import Demo from "$lib/component/Demo.svelte";
  import Seo from "$lib/component/Seo.svelte";
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

<Seo
  title="Svelte"
  description="List item keys for Svelte transition components."
/>
<Title>{"Svelte"}</Title>

<Article>
  <Svelte>
    <Demo
      slot="demo"
      on:refreshWith={renderWith}
      on:refreshWithout={renderWithout}
    >
      <div slot="with" bind:this={withEl} />
      <div slot="without" bind:this={withoutEl} />
      <CodeWith slot="code-with" />
      <CodeWithout slot="code-without" />
    </Demo>
  </Svelte>
</Article>
