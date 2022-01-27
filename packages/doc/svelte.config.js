// @ts-check

import adapter from "@sveltejs/adapter-static";
import vue from "@vitejs/plugin-vue";
import { spawn } from "child_process";
import preprocess from "svelte-preprocess";
import WindiCSS from "vite-plugin-windicss";

await new Promise((resolve) => {
  const genCode = spawn("pnpm", ["gen-code"]);
  genCode.on("close", resolve);
});

const base = process.env.BASE_URL || "";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    paths: {
      base,
    },
    target: "#svelte",
    vite: {
      plugins: [WindiCSS(), vue()],
    },
  },
};

export default config;
