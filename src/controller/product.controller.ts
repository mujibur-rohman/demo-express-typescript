import { NextFunction, Request, Response } from "express";
import { createProductValidation } from "../validation/product.validation";
import { prismaClient } from "../app/database";
import { validate } from "../validation/validation";
import { logger } from "../utils/logger";

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
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
};
