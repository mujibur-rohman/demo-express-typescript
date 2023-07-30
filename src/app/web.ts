import express, { Application } from "express";
import router from "../route";

export const app: Application = express();
export const PORT: number = 5000;

app.use(express.json());
router(app);
