import assert from "node:assert/strict";
import test from "node:test";
import { fetchFromWorker } from "./worker-harness.mjs";

test("preserves the root redirect to the default Russian route", async () => {
  const response = await fetchFromWorker("/");

  assert.equal(response.status, 307);
  assert.equal(response.headers.get("location"), "http://localhost/ru");
});
