import { Hono } from "hono";
import { createRequestHandler } from "react-router";
import { createHonoServer } from "react-router-hono-server/node";

// @ts-expect-error - virtual module provided by React Router at build time
import * as build from "virtual:react-router/server-build";

declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_HONO: string;
  }
}

// const app = new Hono();

// Add any additional Hono middleware here

// const handler = createRequestHandler(build);
// app.mount("/", (req: Request) =>
//   handler(req, {
//     // Add your "load context" here based on the current request
//     VALUE_FROM_HONO: "Hello from Hono",
//   })
// );
const app = await createHonoServer({
  getLoadContext(_, { build, mode }) {
    const isProductionMode = mode === "production";
    return {
      VALUE_FROM_HONO: isProductionMode ? build.assets.version : "dev",
    };
  },
});

export default app.fetch;
