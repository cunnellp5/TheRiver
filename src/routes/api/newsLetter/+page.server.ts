import type { Actions } from "./$types";
import { generateSessionToken } from "$lib/server/auth";
import db from "$lib/server/database";
import { EmailSchema } from "$lib/utils/Valibot/EmailSchema";
import { validateInputs } from "$lib/utils/validateInputs";
import { type ActionFailure, error } from "@sveltejs/kit";

type NewsLetterAction = Promise<
  | {
    type: string;
    status: number;
    message?: string;
  }
  | ActionFailure<{ message: string }>
>;

async function createNewsletterEntry(data: { email: string; userId?: number; token: string }) {
  try {
    await db.newsletter.create({
      data: { ...data },
    });
    return { success: true, error: null };
  }
  catch (err) {
    console.error("Error creating newsletter entry:", err);
    return { success: false, error: error(500, "Internal Server Error") };
  }
}

// TODO rethink logic, there's a way to refine this
export const actions: Actions = {
  /*
		 STEPS TO SUBSCRIBE TO NEWSLETTER

		 1. Validate the email
		 2. Check if the user exists
		 3. If the user exists, check if they are subscribed to the newsletter
		 4. If the user exists and they are not subscribed, update the user and create a newsletter table atomically
		 5. If the user does not exist, check if there is a newsletter subscription
		 6. If there is no newsletter subscription, create one and send a welcome email
		 7. If there is a newsletter subscription, return a success response
	*/
  subscribe: async ({ request, fetch }): NewsLetterAction => {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    // validate email
    const validationResult = validateInputs(EmailSchema, { email });
    if (validationResult) {
      return validationResult; // Return the error response
    }

    // check users with newsletter subscription
    let user;

    try {
      user = await db.user.findUnique({
        where: { email },
        include: { Newsletter: true },
      });
    }
    catch (err) {
      console.error("Error finding user:", err);
      return error(500, "Internal Server Error");
    }

    // if user exists and they are not subscribed, update user and create newsletter table atomically
    if (user) {
      if (!user.Newsletter) {
        // Update user and create newsletter table atomically
        const { error } = await createNewsletterEntry({
          email,
          userId: user.id,
          token: generateSessionToken(),
        });
        if (error) {
          return error;
        }
      }
      // We can return a success here because if the user exists,
      // and they are NOT subscribed, we can assume the newsletter
      // table should be updated
      // save a cycle to the newsletter table by early returning here
      return { type: "success", status: 200 };
    }

    // if we dont have a user:
    // what if someone keeps submitting the same email that hasnt signedup
    // check subscriptions

    let newsletter;
    try {
      newsletter = await db.newsletter.findUnique({
        where: { email },
      });
    }
    catch (err) {
      console.error("Error finding newsletter subscription:", err);
      return error(500, "Internal Server Error");
    }

    // create subscription if one doesnt exist in the db
    if (!newsletter) {
      const token = generateSessionToken();
      const { error } = await createNewsletterEntry({ email, token });
      if (error) {
        return error;
      }
      // we know there was no user in the system,
      // so send welcome email only when there was no newsletter record found,
      // so this should be a first timer without an account
      try {
        fetch("emails/welcome", {
          method: "POST",
          body: JSON.stringify({
            subject: "Newsletter Subscription - The River",
            email,
            token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      catch (error) {
        console.error(error, "Error sending email");
      }
    }

    // show success even if there exists a record - no difference
    return { type: "success", status: 200 };
  },
};
