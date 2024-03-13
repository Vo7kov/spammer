import { Request, Response } from "express";
import { emailService } from "../services/email.service";

const send = async (req: Request, res: Response) => {
  const { email, text } = req.body;

  await emailService.send({ email, html: text });

  res.send(200);
};

export const emailController = {
  send,
};
