import bcrypt from "bcrypt";
import asyncHandler from "../middlewares/asyncHandler";
import { registerUserValidationSchema } from "../validators/authValidator";
import prisma from "../db/db";

let registerUserHandler = asyncHandler(async (req, res) => {
  registerUserValidationSchema.parse(req.body);
  let { username, email, password } = req.body;
  let hashedPassword = await bcrypt.hash(password, 10);
  let user = await prisma.users.create({
    data: {
      email: email,
      username: username,
      password: hashedPassword,
    },
  });
});
