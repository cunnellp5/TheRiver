import { env } from "$env/dynamic/private";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export default transporter;
