import express, { Application, Request, Response } from "express";

export const app: Application = express();
export const PORT: number = 5000;

app.use("/", (req: Request, res: Response) => {});
