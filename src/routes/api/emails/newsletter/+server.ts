import type { Component } from "svelte";
import { env } from "$env/dynamic/private";
import NewsLetterBasic from "$lib/emails/templates/newsletter-basic.svelte";
import transporter from "$lib/utils/transporter";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import { render } from "../render";

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
  const { subject, email, token = null } = await request.json();

  const options = {
    from: env.EMAIL_USER,
    to: email,
    subject,
    html: render({
      template: NewsLetterBasic as Component,
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
