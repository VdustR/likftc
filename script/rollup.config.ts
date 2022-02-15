import renameExtensions from "@vdustr/rollup-plugin-rename-extensions";
import { resolve } from "path";
import svelte from "rollup-plugin-svelte";
import typescript from "rollup-plugin-typescript2";
import preprocess from "svelte-preprocess";
import packageJson from "../package.json";
import { MODULE, PKG } from "./type";

const repoRoot = resolve(__dirname, "..");

function genConfig(pkg: PKG, module: MODULE) {
  const isEsm = module === "ES2015";
  const isTyped = isEsm;
  const isSvelte = pkg === PKG.svelte;
  const isTs = !isSvelte;
  const pkgDir = resolve(repoRoot, "packages", pkg);
  const distDir = resolve(repoRoot, "dist", pkg);
  /**
   * @type import('rollup').RollupOptions
   **/
  const config = {
    input: resolve(pkgDir, isSvelte ? "index.svelte" : "index.ts"),
    output: {
      preserveModules: true,
      dir: distDir,
      format: isEsm ? undefined : "cjs",
      exports: "auto",
    },
    external: [
      ...Object.keys(packageJson.dependencies).filter((pkg) => "tslib" !== pkg),
      "svelte/internal",
    ],
    plugins: [
      ...(isSvelte
        ? [
            svelte({
              preprocess: preprocess(),
            }),
          ]
        : []),
      ...(isTs
        ? [
            typescript({
              check: false,
              tsconfig: resolve(__dirname, "esm/tsconfig.json"),
              tsconfigOverride: {
                module,
                declaration: isTyped,
                declarationDir: ".",
                target: "ES5",
                include: [
                  resolve(pkgDir, `**/*.ts`),
                  resolve(pkgDir, `**/*.svelte`),
                ],
              },
            }),
          ]
        : []),
      ...(isEsm
        ? []
        : [
            renameExtensions({
              include: ["**/*.ts", "**/*.svelte"],
              match: "\x00tslib.js",
              mappings: {
                ".js": ".cjs",
              },
            }),
          ]),
    ],
  };
  return config;
}

const configs = Object.values(PKG)
  .map((pkg) =>
    (["ES2015", "COMMONJS"] as MODULE[]).map((module) => genConfig(pkg, module))
  )
  .flat();

export default configs;
