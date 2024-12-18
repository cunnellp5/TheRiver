import type { PageServerLoad } from "./$types";
import db from "$lib/server/database";
import { servicesMapper } from "$lib/utils/services-mapper";
import { type Actions, error, redirect } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ cookies, request, locals }) => {
    // first check locals to see if user is signed in

    // handle not signed in user, but save selections to a cookie?

    // signein user moves to booking a time slot

    const formData = await request.formData();

    const selectedServices = formData.get("selectedServices");

    redirect(302, `/services/booking/?selectedServices=${selectedServices}`);
  },
};
