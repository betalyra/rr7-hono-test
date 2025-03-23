import { Hono } from "hono";
import { createRequestHandler } from "react-router";

// @ts-expect-error - virtual module provided by React Router at build time
import * as build from "virtual:react-router/server-build";
import { getLoadContext } from "~/load-context";

const app = new Hono();

const handler = createRequestHandler(build);
app.mount("/", (req: Request) => handler(req, getLoadContext(req)));

export default app.fetch;
