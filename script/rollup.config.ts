import renameExtensions from "@vdustr/rollup-plugin-rename-extensions";
import omit from "lodash/omit";
import { resolve } from "path";
import typescript from "rollup-plugin-typescript2";
import packageJson from "../package.json";

enum PKG {
  "core" = "core",
  "react-flip-toolkit" = "react-flip-toolkit",
}

enum MODULE {
  "ES2015" = "ES2015",
  "COMMONJS" = "COMMONJS",
}

function genConfig(pkg: PKG, module: MODULE) {
  const isEsm = module === "ES2015";
  /**
   * @type import('rollup').RollupOptions
   **/
  const config = {
    input: resolve(__dirname, "../packages", pkg, "index.ts"),
    output: {
      preserveModules: true,
      dir: resolve(__dirname, "../dist", pkg),
      format: isEsm ? undefined : "cjs",
      exports: "auto",
    },
    external: omit(Object.keys(packageJson.dependencies), "tslib"),
    plugins: [
      typescript({
        tsconfig: resolve(__dirname, "esm/tsconfig.json"),
        tsconfigOverride: {
          module,
          declaration: isEsm,
          declarationDir: ".",
          target: "ES5",
          include: [`../../packages/${pkg}/*.ts`],
        },
        cwd: resolve(__dirname, "esm"),
      }),
      ...(isEsm
        ? []
        : [
            renameExtensions({
              include: ["**/*.ts"],
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

const configs = (["core", "react-flip-toolkit"] as PKG[])
  .map((pkg) =>
    (["ES2015", "COMMONJS"] as MODULE[]).map((module) => genConfig(pkg, module))
  )
  .flat();

export default configs;
