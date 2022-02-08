import babelParser from "@babel/parser";
import traverse from "@babel/traverse";
import { execFileSync } from "child_process";
import { copyFile, readFile, writeFile } from "fs/promises";
import glob from "glob";
import mkdirp from "mkdirp";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import packageJson from "../package.json";
import { PKG } from "./type";

const __dirname = dirname(fileURLToPath(import.meta.url));

const packagesDir = resolve(__dirname, "../packages");

const targetDir = resolve(__dirname, "../dist");

async function setPackage(
  packageName: PKG,
  {
    readmeUrl = "",
  }: {
    readmeUrl?: string;
  } = {}
) {
  await mkdirp(resolve(targetDir, packageName));
  await Promise.all([
    copyFile(
      resolve(__dirname, "../LICENSE"),
      resolve(targetDir, packageName, "LICENSE")
    ).catch(console.trace),
    writeFile(
      resolve(targetDir, packageName, "README.md"),
      `# @likftc/${packageName}
  
  Please check <https://vdustr.github.io/likftc/${readmeUrl}>.
  `,
      { encoding: "utf8" }
    ).catch(console.trace),

    readFile(resolve(packagesDir, packageName, "package.json"), "utf8")
      .then((packageJson) => JSON.parse(packageJson))
      .then((packageJson) => {
        delete packageJson.private;
        packageJson.main = "index.cjs";
        packageJson.module = "index.js";
        return packageJson;
      })
      .then((packageJson) => {
        writeFile(
          resolve(targetDir, packageName, "package.json"),
          JSON.stringify(packageJson, null, 2),
          { encoding: "utf8" }
        );
      })
      .catch(console.trace),
  ]);
}

await setPackage(PKG.core);
await setPackage(PKG["react-flip-toolkit"], {
  readmeUrl: "react-flip-toolkit",
});

function getModuleName(str: string) {
  const pathArr = str.split("/");
  if (str.match(/^@/)) return `${pathArr[0]}/${pathArr[1]}`;
  return pathArr[0];
}

function getVersion(moduleName: string) {
  const version =
    packageJson.dependencies[
      moduleName as keyof typeof packageJson.dependencies
    ];
  if (!version) throw new Error(`${moduleName} is not found in package.json`);
  return version;
}

async function setPeerDependencies(pkg: PKG) {
  const files = glob.sync(resolve(targetDir, pkg, "**/*.js"));
  const depsMap = new Map<string, string>();
  await Promise.all(
    files.map(async (file) => {
      const jsCode = await readFile(file, "utf8");
      const ast = babelParser.parse(jsCode, {
        sourceType: "module",
      });
      (traverse as unknown as { default: typeof traverse }).default(ast, {
        ImportDeclaration(path) {
          const value = path.node.source.value;
          if (value.match(/^\./)) return;
          const moduleName = getModuleName(value);
          if (depsMap.has(moduleName)) return;
          depsMap.set(moduleName, getVersion(moduleName));
        },
      });
    })
  );
  const depsEntries = [...depsMap.entries()];
  if (depsEntries.length === 0) return;
  const deps = Object.fromEntries(depsEntries);
  const pkgPath = resolve(targetDir, pkg, "package.json");
  const originalPkgContent = JSON.parse(await readFile(pkgPath, "utf8"));
  const fixedPkgContent = { ...originalPkgContent, peerDependencies: deps };
  await writeFile(pkgPath, JSON.stringify(fixedPkgContent, null, 2), {
    encoding: "utf8",
  });
}

await setPeerDependencies(PKG.core);
await setPeerDependencies(PKG["react-flip-toolkit"]);
