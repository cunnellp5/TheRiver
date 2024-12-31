import type { RequestHandler } from "@sveltejs/kit";
// import type { CartItem } from "../cart";
import { env } from "$env/dynamic/private";
import { stripe } from "$lib/server/stripe";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();

  // Create SetupIntent
  const setupIntent = await stripe.setupIntents.create({
    payment_method_types: ["card"],
    customer: data.customerId,
    // Remove confirm: true to handle confirmation on the client side
    usage: "off_session", // Important: Allows future off-session payments
  });

  return new Response(
    JSON.stringify({
      clientSecret: setupIntent.client_secret,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
