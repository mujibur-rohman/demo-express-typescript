import { Router } from "express";
import userController from "../controller/user.controller";

export const UserRouter: Router = Router();

UserRouter.post("/register", userController.register);
UserRouter.get("/", userController.get);
