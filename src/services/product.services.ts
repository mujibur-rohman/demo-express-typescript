import { createProductValidation } from "../validation/product.validation";
import { prismaClient } from "../app/database";
import { validate } from "../validation/validation";
import { logger } from "../utils/logger";

const addProduct = async (req: any) => {
  logger.debug(req);

  const product = validate(createProductValidation, req);

  return prismaClient.product.create({
    data: product,
  });
};

export default { addProduct };
