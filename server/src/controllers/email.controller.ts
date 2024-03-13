import { Request, Response } from "express";
import { emailService } from "../services/email.service";

const send = async (req: Request, res: Response) => {
  const { email, html } = req.body;

  await emailService.send({ email, html });

  res.send(200);
};

export const emailController = {
  send,
};
