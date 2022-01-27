<script lang="ts" context="module">
  export const prerender = true;
  import CodeWith from "$lib/code/vue/With.svelte";
  import CodeWithout from "$lib/code/vue/Without.svelte";
  import Demo from "$lib/component/Demo.svelte";
  import Title from "$lib/component/Title.svelte";
  import With from "$lib/demo/vue/With.vue";
  import Without from "$lib/demo/vue/Without.vue";
  import { onMount, tick } from "svelte";
  import { createApp } from "vue";
</script>

<script lang="ts">
  let withEl: HTMLDivElement;
  let withoutEl: HTMLDivElement;
  async function renderWith() {
    await tick();
    createApp(With).mount(withEl);
  }
  async function renderWithout() {
    await tick();
    createApp(Without).mount(withoutEl);
  }
  onMount(() => {
    renderWith();
    renderWithout();
  });
</script>

<Title>{"Vue Demo"}</Title>

<Demo on:refreshWith={renderWith} on:refreshWithout={renderWithout}>
  <div slot="with" bind:this={withEl} />
  <div slot="without" bind:this={withoutEl} />
  <CodeWith slot="code-with" />
  <CodeWithout slot="code-without" />
</Demo>
