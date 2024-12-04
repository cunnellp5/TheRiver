import type { RequestHandler } from "@sveltejs/kit";
import db from "$lib/server/database";

import { error, json } from "@sveltejs/kit";

function shouldFilter(published: string | null, admin: boolean | undefined) {
  if (admin) {
    return published !== null ? { published: published === "true" } : {};
  }
  return { published: true };
}

// THIS API ROUTE STAYS SO WE CAN DO FILTERING / SORTING / PAGINATION ?????
export const GET: RequestHandler = async ({ url, locals, setHeaders }): Promise<Response> => {
  const sort: string | null = url.searchParams?.get("sort") || "updatedAt";
  const order: string | null = url.searchParams?.get("order") || "desc";
  const published: string | null = url.searchParams?.get("published");

  let posts;
  try {
    posts = await db.post.findMany({
      where: shouldFilter(published, locals?.user?.isAdmin),
      orderBy: [{ [sort as string]: order }],
    });
  }
  catch (err: unknown | Error) {
    error(500, (err as Error).message);
  }

  if (!posts) {
    error(404, "Posts not found.");
  }

  setHeaders({
    "Cache-Control": "public, max-age=60, s-maxage=60",
  });

  return json(posts);
};
