import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import { emailRoute } from "./src/routes/email.route";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(emailRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
