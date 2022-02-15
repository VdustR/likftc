import { program } from "commander";
import { readFile, writeFile } from "fs/promises";
import glob from "glob";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

program.argument("<version>", "Version number to inject into package.json");

program.parse();

const version = program.args[0];

glob
  .sync(resolve(__dirname, "../dist/*/package.json"))
  .forEach(async (file) => {
    const pkg = JSON.parse(await readFile(file, "utf8"));
    pkg.version = version;
    if (pkg.peerDependencies) {
      Object.keys(pkg.peerDependencies).forEach((dep) => {
        if (dep.startsWith("@likftc/")) {
          pkg.peerDependencies[dep] = version;
        }
      });
    }
    await writeFile(file, JSON.stringify(pkg, null, 2), { encoding: "utf8" });
  });
