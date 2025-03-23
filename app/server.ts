// app/server.ts
import { createHonoServer } from "react-router-hono-server/node";
import { getLoadContext } from "./load-context";
export default await createHonoServer({
  getLoadContext: (req) => getLoadContext(req.req.raw),
});
