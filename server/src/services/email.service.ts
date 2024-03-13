import nodemailer from "nodemailer";
import "dotenv/config";

type EmailParams = {
  email: string;
  html: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 0,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const send = ({ email, html }: EmailParams) => {
  return transporter.sendMail({
    to: email,
    html,
  });
};

export const emailService = {
  send,
};
