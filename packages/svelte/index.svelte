<script lang="ts">
  type Source = $$Generic<number | string>;
  /**
   *  TODO: This should declare default type as string
   *        Follow the issue here:
   *        https://github.com/sveltejs/rfcs/pull/38#issuecomment-1039834806
   **/
  type Target = $$Generic<number | string>;
  import Likftc from "@likftc/core";
  export let keys: Source[];
  export let generator: (() => Target) | undefined = undefined;
  const { get, sync } = Likftc(keys, generator);
  $: sync(keys);
</script>

<slot {get} />
