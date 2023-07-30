import Joi from "joi";

const createProductValidation = Joi.object({
  name: Joi.string().required().trim(),
  price: Joi.number().optional().allow(null),
});

export { createProductValidation };
