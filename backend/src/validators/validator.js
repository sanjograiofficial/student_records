import z from "zod";

export let nameValidatorSchema = z
  .string()
  .min(2, "name must be of minimum 2 letters")
  .max(100, "name must not exceed 100 letters");

export let emailValidatorSchema = z.email("email must be valid");
