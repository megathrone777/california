import { BuildOptions, BuildResult, build } from "esbuild";
import { clean } from "esbuild-plugin-clean";
import { copy } from "esbuild-plugin-copy";
import { cwd } from "process";
import { resolve } from "path";

import { sharedOptions } from "./sharedOptions";

const rootDir: string = cwd();
const buildDir: string = resolve(rootDir, "./build");
const publicDir: string = resolve(rootDir, "./public");
const productionOptions: BuildOptions = {
  ...sharedOptions,
  chunkNames: "[name]-[hash]",
  drop: ["console"],
  format: "esm",
  minify: true,
  outdir: `${buildDir}/js`,
  plugins: [
    ...sharedOptions.plugins!,
    clean({
      cleanOn: "start",
      patterns: ["./build/*", "./public/js"],
      sync: false,
      verbose: false,
    }),
    copy({
      resolveFrom: publicDir,
      assets: [
        {
          from: "./public/*.html",
          to: `${buildDir}/`,
        },
        {
          from: "./public/images/**/*",
          to: `${buildDir}/images`,
        },
        {
          from: "./public/fonts/**/*",
          to: `${buildDir}/fonts`,
        },
        {
          from: "./public/data/**/*",
          to: `${buildDir}/data`,
        },
      ],
    }),
  ],
  sourcemap: false,
  splitting: true,
  watch: false,
};

console.info("\x1b[32m%s\x1b[0m", "Compiling...");
build(productionOptions)
  .then((result: BuildResult): void => {
    if (result && !!result.errors.length) {
      console.error(result.errors);

      return;
    }

    process.exit(0);
  })
  .catch((): void => {
    process.exit(1);
  });
