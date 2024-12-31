import type { RequestHandler } from "@sveltejs/kit";
import { stripe } from "$lib/server/stripe";

export const POST: RequestHandler = async ({ request }) => {
  const { appointmentId, customerId, amount } = await request.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // convert to cents
      currency: "usd",
      customer: customerId,
      off_session: true,
      confirm: true,
    });

    // Update appointment status in your database
    // await updateAppointmentPaymentStatus(appointmentId, paymentIntent.status);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  catch (error) {
    // Handle error appropriately
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
