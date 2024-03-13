import { Request, Response } from "express";
import { prisma } from "../client";

const getAll = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.send(users);
};

export const userController = {
  getAll,
};
