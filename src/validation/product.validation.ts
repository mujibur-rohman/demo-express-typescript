import Joi from "joi";

const createProductValidation = Joi.object({
  name: Joi.string().required().trim(),
  price: Joi.string().required(),
  stock: Joi.number().required().allow(null),
});

export { createProductValidation };
