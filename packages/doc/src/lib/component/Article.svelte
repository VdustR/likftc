<article>
  <slot />
</article>

<style lang="scss">
  article {
    text-align: center;
    padding: 0 2rem;
    margin: auto;
    width: 100%;

    > :global(:not(.grid, img)) {
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
    }

    :global(img) {
      max-width: 100%;
    }

    :global(pre) {
      width: max-content;
      margin: auto;
      display: block;
      text-align: left;
      padding: 0.5em;
      border-radius: 0.5em;

      width: 100%;
      overflow: auto;
    }
  }
</style>
