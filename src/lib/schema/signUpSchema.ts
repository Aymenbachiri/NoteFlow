import { z } from "zod";

export const signUpSchema = z.object({
  emailAddress: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*()]/, {
      message: "Password must contain at least one special character",
    }),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
