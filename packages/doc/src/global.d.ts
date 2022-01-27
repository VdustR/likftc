/// <reference types="@sveltejs/kit" />

declare module "*.svx" {
  export { SvelteComponentDev as default } from "svelte/internal";
}
