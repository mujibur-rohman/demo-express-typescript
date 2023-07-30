import { NextFunction, Request, Response, Router } from "express";
import { logger } from "../utils/logger";
import { validate } from "../validation/validation";
import { createProductValidation } from "../validation/product.validation";
import { prismaClient } from "../app/database";

export const ProductRouter: Router = Router();

ProductRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.debug(req.body);

      validate(createProductValidation, req.body);

      await prismaClient.product.create({
        data: {
          name: req.body.name,
          price: req.body.price,
          stock: req.body.stock,
        },
      });

      res.status(200).send({
        status: 200,
        message: "Produk create successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);
