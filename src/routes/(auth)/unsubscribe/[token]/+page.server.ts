import type { Actions, PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { EmailSchema } from "$lib/utils/Valibot/EmailSchema";
import { validateInputs } from "$lib/utils/validateInputs";
import { error, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url, params }) => {
  // console.log(params.token);
  const urlToken = params.token;
  // const urlToken = url.pathname.split('/').pop();
  let newsLetter = null;

  try {
    newsLetter = await db.newsletter.findUniqueOrThrow({
      where: { token: urlToken },
    });
  }
  catch (err: unknown) {
    const { code } = err as any;
    if (code === "P2025") {
      // unfound in db, do something about it
      return error(404, "Not Found");
    }
    // something else went wrong
    return error(500, "Internal Server Error");
  }

  return {
    status: 200,
    newsLetter,
  };
};

// TODO send an email to the user with a token to confirm their unsubscription choice,
// for now just rm the record if it exists
export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const token = formData.get("token") as string;

    // validate email
    const validationResult = validateInputs(EmailSchema, { email });

    if (validationResult) {
      return validationResult; // Return the error response
    }

    try {
      await db.newsletter.delete({
        where: { email, token },
      });
    }
    catch (err) {
      // log the error, but let the code continue to the redirect,
      // because to get here would be 'naughty'
      console.error("Error removing newsletter subscription:", err);
    }

    // show success no matter what
    return redirect(302, "/");
  },
};
