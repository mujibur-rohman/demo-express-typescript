import express, { Application } from "express";
import router from "../route";

export const app: Application = express();
export const PORT: number = 5000;

router(app);
