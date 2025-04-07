import { z } from "zod"
import { formSchema } from "@/schema/form"
import { auditFormSchema } from "@/schema/form";

export type FormData = z.infer<typeof formSchema>;
export type AuditFormData = z.infer<typeof auditFormSchema>
