import type { Handle } from "@sveltejs/kit";
import { RefillingTokenBucket } from "$lib/server/rate-limit";

const bucket = new RefillingTokenBucket<string>(100, 1);

export const rateLimiter: Handle = async ({ event, resolve }) => {
  // Note: Assumes X-Forwarded-For will always be defined.
  const clientIP = event.request.headers.get("X-Forwarded-For");
  if (clientIP === null) {
    return resolve(event);
  }
  let cost: number;
  if (event.request.method === "GET" || event.request.method === "OPTIONS") {
    cost = 1;
  }
  else {
    cost = 3;
  }
  if (!bucket.consume(clientIP, cost)) {
    return new Response("Too many requests", {
      status: 429,
    });
  }
  return resolve(event);
};
