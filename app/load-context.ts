declare module "react-router" {
  interface AppLoadContext {
    VALUE_FROM_HONO: string;
  }
}

export const getLoadContext = (req: Request) => {
  return {
    VALUE_FROM_HONO: "Hello from Hono",
  };
};
