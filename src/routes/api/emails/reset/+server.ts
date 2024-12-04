import type { Component } from "svelte";
import { env } from "$env/dynamic/private";
import Reset from "$lib/emails/templates/reset.svelte";
import transporter from "$lib/utils/transporter";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import { render } from "../render";

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
  let token;
  let email;

  try {
    ({ token, email } = await request.json());
  }
  catch (err) {
    console.error("Error parsing request body:", err);
    return error(500, err.message);
  }

  const options = {
    from: env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request - The River",
    html: render({
      template: Reset as Component,
      props: {
        token,
      },
    }),
  };

  // INTENTIONALLY dont 'await' sendMail
  try {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.error("❌ Error:", error.message);
      }
      else {
        console.log("✅ Email sent:", info.response);
      }
    });
  }
  catch (err: unknown | Error) {
    error(500, (err as Error).message);
  }

  return json({ status: 200, message: "Email sent successfully" });
};
