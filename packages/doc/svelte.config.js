// @ts-check

import adapter from "@sveltejs/adapter-static";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vue from "@vitejs/plugin-vue";
import { spawn } from "child_process";
import { escape } from "html-escaper";
import { mdsvex } from "mdsvex";
import shiki from "shiki";
import preprocess from "svelte-preprocess";
import WindiCSS from "vite-plugin-windicss";
import htmlToSvelte from "./script/htmlToSvelte.js";

const processorGroup = mdsvex({
  highlight: {
    highlighter: async (code, lang) => {
      if (
        shiki.BUNDLED_LANGUAGES.some(
          ({ id, aliases }) => id === lang || aliases?.includes(lang)
        )
      ) {
        const highlighter = await shiki.getHighlighter({
          theme: "dracula",
        });
        return htmlToSvelte(highlighter.codeToHtml(code, { lang }));
      } else {
        return htmlToSvelte(`<pre><code>${escape(code)}</code></pre>`);
      }
    },
  },
});

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
      plugins: [
        WindiCSS(),
        vue(),
        svelte({
          compilerOptions: {
            hydratable: true,
          },
          extensions: [".svx"],
          preprocess: {
            ...processorGroup,
            markup: ({ content, filename }) =>
              processorGroup.markup({ content, filename: filename || "" }),
          },
        }),
      ],
    },
  },
};

export default config;
