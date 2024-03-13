import express from "express";
import { userController } from "../controllers/user.controller";

export const userRoute = express.Router();

userRoute.get("/users", userController.getAll);
