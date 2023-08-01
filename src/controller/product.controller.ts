import { NextFunction, Request, Response } from "express";
import productServices from "../services/product.services";

const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productServices.addProduct(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { add };
