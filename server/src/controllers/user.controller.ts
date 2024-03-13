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

const create = async (req: Request, res: Response) => {
  const { email, lastName, firstName, surName } = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      lastName,
      firstName,
      surName,
    },
  });

  res.send(user);
};

const update = async (req: Request, res: Response) => {
  const { email, lastName, firstName, surName, id } = req.body;

  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
      lastName,
      firstName,
      surName,
    },
  });

  res.send(user);
};

export const userController = {
  getAll,
  deleteUser,
  create,
  update,
};
