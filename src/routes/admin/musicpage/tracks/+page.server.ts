import type { PageServerLoad } from "./$types";
import { TRACKS } from "$lib/data/soundcloud-tracks";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.session || !locals.user) {
    return error(404, "Not found");
  }
  return { tracks: TRACKS };
};
