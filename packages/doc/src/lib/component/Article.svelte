<article>
  <slot />
</article>

<style lang="scss">
  article {
    text-align: center;
    padding: 0 2rem;

    :global(img) {
      max-width: 100%;
    }

    :global(code) {
      --mx: 0.2em;
      margin-right: var(--mx);
      margin-left: var(--mx);
    }

    :global(a),
    :global(button) {
      --px: 0.25em;
      padding-right: var(--px);
      padding-left: var(--px);
      display: inline-block;
      background: white;
      color: black;
      transition: transform ease 300ms;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
</style>
