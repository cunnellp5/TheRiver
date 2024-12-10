import type { Actions, RequestEvent } from "./$types";
import { login } from "$lib/server/controllers/login";
import { fail } from "@sveltejs/kit";
import { getFormData } from "./utils/get-form-data";
import { validateInputs } from "./utils/validate-inputs";

export const actions: Actions = {
  loginUser: async (event: RequestEvent) => {
    const { email, password } = await getFormData(event.request);

    // TODO consider setting a success flag
    const { userId } = await validateInputs({ email, password });

    if (!userId) {
      return fail(400, { success: false });
    }

    await login({ event, userId });

    return { success: true };
  },
};
