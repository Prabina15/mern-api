import z, { maxLength, minLength, regex } from "zod";
import { emailRegex, passwordRegex } from "../../constants/regex.js";
import { ROLE_ADMIN, ROLE_CUSTOMER, ROLE_MERCHANT, ROLE_SUPER_ADMIN } from "../../constants/roles.js";

export const userSchema = z.object({
    name: z.string().check(minLength(3), maxLength(50)).trim(),
    email: z.string().regex(emailRegex, {error:"Invalid email address."}),
    phone: z.string().check(minLength(5), maxLength(15)).optional(),
    password: 
    z.string()
    .check
          (minLength(6),
          regex(passwordRegex, {
            error:"Password msut contain uppercase, lowercase, number and special characters.",
        }),
    ),
    isActive: z.boolean().default(true),
    roles: z.array(
        z.enum([ROLE_ADMIN, ROLE_CUSTOMER, ROLE_MERCHANT, ROLE_SUPER_ADMIN]),
        
        
    ).default([ROLE_CUSTOMER]),
    address: z.object({
        city: z.string(),
        province: z.string().optional(),
        street: z.string().optional(),
        country: z.string().default("Nepal"),
    }),
});