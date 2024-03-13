import { Request, Response } from "express";
import { prisma } from "../client";

const getAll = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.send(users);
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  res.send(200);
};

export const userController = {
  getAll,
  deleteUser,
};
