import { BuildOptions, PluginBuild } from "esbuild";
import { createServer } from "esbuild-server";
import { cwd } from "process";
import { resolve } from "path";

import { sharedOptions } from "./sharedOptions";

const rootDir: string = cwd();
const publicDir: string = resolve(rootDir, "./public");
const buildOptions: BuildOptions = {
  ...sharedOptions,
  outdir: `${publicDir}/js`,
  plugins: [
    ...sharedOptions.plugins!,
    {
      name: "compiling",
      setup(build: PluginBuild): void {
        build.onStart((): void => {
          console.time("Build time");
          console.info("\x1b[32m%s\x1b[0m", "Compiling...");
        });

        build.onEnd((): void => {
          console.timeEnd("Build time");
          console.info("\x1b[32m%s\x1b[0m", "Compiled successfully!");
        });
      },
    },
  ],
  sourcemap: "external",
};

const server = createServer(buildOptions, {
  historyApiFallback: true,
  injectLiveReload: true,
  open: true,
  port: 1337,
  static: publicDir,
});

server.start();
console.info("Listening on: \x1b[32m%s\x1b[0m", server.url);
