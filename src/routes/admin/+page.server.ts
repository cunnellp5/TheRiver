import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({
  locals,
}: {
  locals: App.Locals;
}) => {
  if (!locals.session || !locals.user || !locals.user.isAdmin) {
    return error(404, "Not found");
  }
};
