import z from "zod";

let registerUserValidationSchema = z.object({
  email: z.email("Invalid email"),
  username: z.string().min(4, "Username must be at least 4 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

let loginUserValidationSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
