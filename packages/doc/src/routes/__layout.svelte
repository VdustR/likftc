<script lang="ts" context="module">
  import { base } from "$app/paths";
  import Link from "$lib/component/Nav.svelte";
  import "virtual:windi.css";

  const links = {
    svelte: "Svelte",
    vue: "Vue",
    react: "React",
  };
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Gidugu&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css"
  />
</svelte:head>

<div class="outer">
  <nav>
    <a href={base || "/"}><h1>likftc</h1></a>
    <ul>
      {#each Object.entries(links) as [url, title]}
        <li>
          <Link href={`${base}/${url}/`}>{title}</Link>
        </li>
      {/each}
    </ul>
  </nav>
  <main>
    <slot />
  </main>
</div>

<footer>
  {"Copyright © 2022  "}
  <a href="https://vdustr.dev" target="_blank" rel="noopener noreferrer">
    {"ViPro"}
  </a>
  {"."}
</footer>

<style lang="scss">
  :global(html),
  :global(body),
  :global(#svelte),
  main {
    background-color: black;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    justify-content: stretch;
    word-wrap: break-word;
    font-family: "Gidugu", sans-serif;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  .outer {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    --py: 2rem;
    --px: 1rem;
    padding-top: var(--py);
    padding-right: var(--px);
    padding-bottom: var(--py);
    padding-left: var(--px);
    white-space: nowrap;
  }

  h1 {
    font-size: 2.4rem;
    padding-top: 0.2em;
    padding-right: 0.1em;
    padding-left: 0.1em;
    padding-bottom: 0.1em;
    &:hover {
      background-color: white;
      color: black;
    }
  }

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 10rem;
    li {
      display: block;
      :global(a) {
        display: block;
        padding-left: 0.5em;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .outer {
      flex-direction: column;

      nav {
        --py: 0.5rem;
        --px: 1rem;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    ul {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      min-width: auto;
      gap: 0.33rem;
      li {
        :global(a) {
          padding-left: 0.2em;
          padding-right: 0.2em;
        }
      }
    }
  }

  :global(code) {
    font-family: "Victor Mono", monospace;
    font-size: 0.5em;
  }

  :global(pre) {
    font-size: 1.2em;
    line-height: 0.6em;
  }

  footer {
    --py: 2rem;
    --px: 1rem;
    margin-top: 4rem;
    padding: var(--py) var(--px);
    background: #121212;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.2em;
  }

  :global(a),
  :global(button) {
    overflow: hidden;
    --px: 0.25em;
    padding-right: var(--px);
    padding-left: var(--px);
    --mx: 0.1em;
    margin-right: var(--mx);
    margin-left: var(--mx);
    display: inline-block;
    background: white;
    color: black;
    border: 1px solid black;
    transition: transform ease 300ms;

    &:hover,
    &:focus {
      transform: scale(1.1);
      z-index: 1;
    }
    &:active {
      transform: scale(1.2);
      z-index: 1;
    }
  }
</style>
