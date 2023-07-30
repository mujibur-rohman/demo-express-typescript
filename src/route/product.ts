import { NextFunction, Request, Response, Router } from "express";
import { logger } from "../utils/logger";
import { validate } from "../validation/validation";
import { createProductValidation } from "../validation/product.validation";

export const ProductRouter: Router = Router();

ProductRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.debug(req.body);

    validate(createProductValidation, req.body);

    res.status(200).send({
      status: true,
      statusCode: 200,
      data: [{ name: "Sepatu Sport", price: 500000 }],
    });
  } catch (error) {
    next(error);
  }
});
