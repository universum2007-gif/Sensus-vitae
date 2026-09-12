import { register } from "node:module";

const cloudflareEnvironment = {};
globalThis.__SENSUS_VITAE_TEST_CLOUDFLARE_ENV__ = cloudflareEnvironment;

const loader = `
export async function resolve(specifier, context, nextResolve) {
  if (specifier === "cloudflare:workers") {
    return { url: "test:cloudflare-workers", shortCircuit: true };
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (url === "test:cloudflare-workers") {
    return {
      format: "module",
      source: "export const env = globalThis.__SENSUS_VITAE_TEST_CLOUDFLARE_ENV__ ?? {};",
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}
`;

register(`data:text/javascript,${encodeURIComponent(loader)}`, import.meta.url);

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

export async function fetchFromWorker(pathname, init = {}, cloudflareBindings = {}) {
  for (const key of Object.keys(cloudflareEnvironment)) delete cloudflareEnvironment[key];
  Object.assign(cloudflareEnvironment, cloudflareBindings);

  const headers = new Headers(init.headers);
  if (!headers.has("accept")) headers.set("accept", "text/html");

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), { ...init, headers }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    executionContext,
  );
}
