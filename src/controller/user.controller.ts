import { NextFunction, Request, Response } from "express";
import userServices from "../services/user.services";

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.register(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.get();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { register, get };
