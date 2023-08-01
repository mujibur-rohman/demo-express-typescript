import bcrypt from "bcrypt";
import { validate } from "../validation/validation";
import { registerUserValidation } from "../validation/user.validation";
import { ResponseError } from "../error/response-error";
import { logger } from "../utils/logger";
import { prismaClient } from "../app/database";

const register = async (request: any) => {
  const user = validate(registerUserValidation, request);
  logger.info(user);
  //   const countUser = await prismaClient.user.findFirst({
  //     where: { username: user.name },
  //     select: {
  //       username: true,
  //       name: true,
  //     },
  //   });
  //   logger.info(countUser);

  //   if (countUser === null) {
  //     throw new ResponseError(400, "Username already exists");
  //   }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

const get = async () => {
  const user = await prismaClient.user.findMany({
    select: {
      username: true,
      name: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }

  return user;
};

export default {
  register,
  get,
};
