import dotenv from "dotenv";
import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import { emailRoute } from "./src/routes/email.route";
import { userRoute } from "./src/routes/user.route";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(emailRoute);
app.use(userRoute);

app.get("/", (_req: Request, res: Response) => res.send(200));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
