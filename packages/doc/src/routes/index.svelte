<script lang="ts" context="module">
  import Likftc from "$lib/article/Likftc.svx";
  import Article from "$lib/component/Article.svelte";
  import Seo from "$lib/component/Seo.svelte";
  import Title from "$lib/component/Title.svelte";
  import Logo from "$lib/icon/Logo.svelte";
</script>

<Seo />
<div class="logo">
  <Logo />
</div>
<Title>likftc</Title>
<Article>
  <Likftc />
</Article>

<style lang="scss">
  .logo {
    margin: 2em auto 0.5em;
    color: white;
    > :global(svg) {
      max-width: 100%;
      width: 100px;
      min-width: 100px;
      height: auto;
    }
  }
</style>
