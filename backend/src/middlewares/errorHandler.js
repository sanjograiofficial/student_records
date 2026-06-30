import { Prisma } from "@prisma/client";
import {z} from "zod";

const errorHandler = (err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return res.status(409).json({
          message: "A record with this value already exists",
        });
      case "P2025":
        return res.status(404).json({
          message: "Record not found",
        });
    }
  }
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((err) => {
      return {
        field: err.path[0],
        message: err.message,
      };
    });
    return res.status(400).json({
      message: "Validation failed",
      errors,
    });
  }
  return res.status(res.statusCode === 200 ? 500 : res.statusCode).json({
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
