import { copyFile, readFile, writeFile } from "fs/promises";
import glob from "glob";
import flow from "lodash/flow";
import mkdirp from "mkdirp";
import { dirname, relative, resolve } from "path";
import ts from "typescript";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const packagesDir = resolve(__dirname, "../packages");
const sourceGlob = resolve(packagesDir, "{core,react-flip-toolkit}/**/*.ts");

const targetDir = resolve(__dirname, "../dist");

const tsFilePathArr = glob.sync(sourceGlob);

function compile(module: ts.ModuleKind = ts.ModuleKind.ES2015) {
  const isEsm = module === ts.ModuleKind.ES2015;
  tsFilePathArr.forEach(async (tsFilePath) => {
    try {
      const tsCode = await readFile(tsFilePath, "utf8");
      const jsCode = ts.transpileModule(tsCode, {
        compilerOptions: {
          module,
          declaration: isEsm,
          target: ts.ScriptTarget.ES5,
          importHelpers: true,
          downlevelIteration: true,
          esModuleInterop: true,
        },
      });
      const relativePath = relative(packagesDir, tsFilePath);
      const targetPath = flow(
        () => resolve(targetDir, relativePath),
        (path) => path.replace(/\.ts$/, isEsm ? ".js" : ".cjs")
      )();
      const targetFileDir = dirname(targetPath);
      await mkdirp(targetFileDir);
      await writeFile(targetPath, jsCode.outputText, { encoding: "utf8" });
    } catch (err) {
      console.trace(err);
    }
  });
}

compile();
compile(ts.ModuleKind.CommonJS);

function setPackage(
  packageName: string,
  {
    readmeUrl = "",
  }: {
    readmeUrl?: string;
  } = {}
) {
  copyFile(
    resolve(__dirname, "../LICENSE"),
    resolve(targetDir, packageName, "LICENSE")
  ).catch(console.trace);
  writeFile(
    resolve(targetDir, packageName, "README.md"),
    `# @likftc/${packageName}

Please check <https://vdustr.github.io/likftc/${readmeUrl}>.
`,
    { encoding: "utf8" }
  ).catch(console.trace);
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
    .catch(console.trace);
}

setPackage("core");
setPackage("react-flip-toolkit", { readmeUrl: "react" });
