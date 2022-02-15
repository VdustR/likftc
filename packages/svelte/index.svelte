<script lang="ts">
  import Likftc from "@likftc/core";
  export let keys: (number | string)[];
  export let generator: (() => string) | undefined;
  const { get, sync } = Likftc(keys, generator);
  $: sync(keys);
</script>

<slot {get} />
