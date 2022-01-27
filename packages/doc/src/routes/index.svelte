<script lang="ts" context="module">
  import Likftc from "$lib/article/Likftc.svx";
  import Article from "$lib/component/Article.svelte";
  import Title from "$lib/component/Title.svelte";

  export const prerender = true;
</script>

<Title>likftc</Title>
<Article>
  <Likftc />
</Article>
