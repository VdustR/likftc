<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import RefreshIcon from "./RefreshIcon.svelte";

  const dispatch = createEventDispatcher<{
    refreshWith: () => {};
    refreshWithout: () => {};
  }>();
  let withKey = Math.random();
  let withoutKey = Math.random();
  function refreshWith() {
    withKey = Math.random();
  }
  function refreshWithout() {
    withoutKey = Math.random();
  }
</script>

<div class="grid">
  <div class="with">
    <h3>With likftc</h3>
    <div class="demo">
      {#key withKey}
        <slot name="with" />
      {/key}
      <button
        on:click={() => {
          dispatch("refreshWith");
          refreshWith();
        }}
      >
        <RefreshIcon />
      </button>
    </div>
  </div>
  <div class="code code-with">
    <slot name="code-with" />
  </div>
  <div class="without">
    <h3>Without likftc</h3>
    <div class="demo">
      {#key withoutKey}
        <slot name="without" />
      {/key}
      <button
        on:click={() => {
          dispatch("refreshWithout");
          refreshWithout();
        }}
      >
        <RefreshIcon />
      </button>
    </div>
  </div>
  <div class="code code-without">
    <slot name="code-without" />
  </div>
</div>

<style lang="scss">
  button {
    font-size: 3rem;
    width: min-content;
    margin-left: auto;
    margin-right: auto;
    --px: 1rem;
    --py: 0.2rem;
    padding-left: var(--px);
    padding-right: var(--px);
    padding-top: var(--py);
    padding-bottom: var(--py);
    :global(svg) {
      transition: transform ease-in-out 300ms;
    }
    &:hover :global(svg) {
      transform: scale(1.2) rotate(360deg);
    }
  }
  .grid {
    grid-template:
      "without with"
      "code-without code-with";
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  .demo {
    display: flex;
    gap: 1rem;
    align-items: stretch;
    justify-content: stretch;
    border: 1px solid white;
    border-radius: 0.5rem;
    > :global(div) {
      flex: 1;
    }
  }
  .with {
    grid-area: with;
  }
  .without {
    grid-area: without;
  }
  .code-with {
    grid-area: code-with;
  }
  .code-without {
    grid-area: code-without;
  }
  .code {
    overflow: auto;
  }
  .code :global(pre) {
    overflow: auto;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    --px: 0.5rem;
    --py: 1rem;
    padding-top: var(--py);
    padding-right: var(--px);
    padding-bottom: var(--py);
    padding-left: var(--px);
  }
  .with,
  .without {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    :global(ul) {
      flex: 1;
      display: flex;
      gap: 2rem;
      justify-content: flex-start;
      align-items: center;
      --padding-y: 0.5rem;
      --padding-x: 2rem;
      padding-top: var(--padding-y);
      padding-right: var(--padding-x);
      padding-bottom: var(--padding-y);
      padding-left: var(--padding-x);
      height: 4rem;
      overflow: hidden;
      font-size: 2rem;
    }
  }

  h3 {
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 1600px) {
    .grid {
      grid-template:
        "without"
        "code-without"
        "with"
        "code-with";
    }
  }
</style>
