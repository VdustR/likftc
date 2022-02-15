<article>
  <slot />
</article>

<style lang="scss">
  article {
    text-align: center;
    padding: 0 2rem;
    max-width: 640px;
    margin: auto;

    :global(img) {
      max-width: 100%;
    }

    :global(pre) {
      width: max-content;
      margin: auto;
    }

    :global(code) {
      --mx: 0.2em;
      margin-right: var(--mx);
      margin-left: var(--mx);
    }
  }
</style>
