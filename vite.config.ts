import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import topLevelAwait from "vite-plugin-top-level-await";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
export default defineConfig(({ command, isSsrBuild }) => ({
  // build: {
  //   rollupOptions: isSsrBuild
  //     ? {
  //         input: "./server/app.ts",
  //       }
  //     : undefined,
  // },
  // ssr: {
  //   noExternal: command === "build" ? true : undefined,
  // },
  plugins: [
    tailwindcss(),
    reactRouterHonoServer({ runtime: "aws", dev: { export: "handler" } }), // add this
    reactRouter(),
    tsconfigPaths(),
    topLevelAwait(),
  ],
}));
