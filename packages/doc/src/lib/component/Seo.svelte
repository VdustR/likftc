<script lang="ts">
  import { page } from "$app/stores";
  import urljoin from "url-join";

  export let title: string = "";
  $: _title = !title
    ? "Likftc - List Item Keys For Transition Components"
    : `${title} | Likftc`;
  export let description = "List item keys for transition components.";
  const ogImage = "https://vdustr.dev/likftc/ogimage.png";
  $: url = urljoin("https://vdustr.dev", $page.url.pathname);
</script>

<svelte:head>
  <title>{_title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={_title} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
</svelte:head>
