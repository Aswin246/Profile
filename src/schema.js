// schema.js
import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1).max(50),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Age must be a positive number",
  }),
  description: z.string().min(1).max(255),
});
