import { readFile, writeFile } from "fs/promises";
import glob from "glob";
import flow from "lodash/flow";
import mkdirp from "mkdirp";
import { basename, dirname, extname, join, relative, resolve } from "path";
import { getHighlighter } from "shiki";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const demoDir = resolve(__dirname, "../src/lib/demo");
const codeDir = resolve(__dirname, "../src/lib/code");

/**
 * Copy from:
 *
 * https://github.com/VdustR/example-vite-svelte-markdown/blob/8c530c4/vite.config.js
 */
function saveSvelteHtmlText(html: string) {
  return `{@html \`${html.replace(/`/g, "\\`")}\`}`;
}

await (async () => {
  try {
    const highlighter = await getHighlighter({
      theme: "dracula",
      langs: ["svelte", "tsx", "vue"],
    });
    const matches = glob.sync(join(demoDir, "*/{With,Without}.*"));
    matches.forEach(async (demoPath) => {
      try {
        const relativePath = relative(demoDir, demoPath);
        const targetDir = dirname(resolve(codeDir, relativePath));
        const targetFileName = basename(relativePath, extname(relativePath));
        const targetPath = resolve(targetDir, `${targetFileName}.svelte`);
        const code = await readFile(demoPath, { encoding: "utf-8" });
        const html = flow(
          () =>
            highlighter.codeToHtml(code, {
              lang: extname(demoPath).substring(1),
            }),
          saveSvelteHtmlText
        )();
        await mkdirp(targetDir);
        await writeFile(targetPath, html, { encoding: "utf-8" });
      } catch (e) {
        console.trace(e);
        throw e;
      }
    });
  } catch (e) {
    console.trace(e);
    throw e;
  }
})();
