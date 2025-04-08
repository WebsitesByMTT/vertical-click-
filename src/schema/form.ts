import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required").regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
    interest: z.string().optional(),
    message: z.string().optional(),
  });
  
export const auditFormSchema = z.object({
    name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required").regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
    website : z.string().optional(),
    services: z.array(z.string()).nonempty("Select at least one service"),
    message: z.string().optional(),
  });
  