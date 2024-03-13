import express from "express";
import { emailController } from "../controllers/email.controller";

export const emailRoute = express.Router();

emailRoute.post("/send", emailController.send);
