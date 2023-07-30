import Joi from "joi";

const createProductValidation = Joi.object({
  name: Joi.string().required().trim(),
  price: Joi.number().required(),
  stock: Joi.number().required().allow(null),
});

export { createProductValidation };
