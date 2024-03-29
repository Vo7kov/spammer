import express from "express";
import { userController } from "../controllers/user.controller";

export const userRoute = express.Router();

userRoute.get("/users", userController.getAll);
userRoute.delete("/users/:userId", userController.deleteUser);
userRoute.post("/users/create", userController.create);
userRoute.patch("/users/update", userController.update);
