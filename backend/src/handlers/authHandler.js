import bcrypt from "bcrypt";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  loginUserValidationSchema,
  registerUserValidationSchema,
} from "../validators/authValidator.js";
import prisma from "../db/db.js";
import jwt from "jsonwebtoken";
import { id } from "zod/v4/locales";
import 'dotenv/config'

export let registerUser = asyncHandler(async (req, res) => {
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
  return res.status(201).json({
    message: "User registered",
  });
});

export let loginUser = asyncHandler(async (req, res) => {
  loginUserValidationSchema.parse(req.body);
  let { email, password } = req.body;
  let user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" },
  );
  return res.status(200).json({
    message: `Login successful.`,
  });
});
