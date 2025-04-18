import { string, z } from "zod"
import { formSchema } from "@/schema/form"
import { auditFormSchema } from "@/schema/form";

export type FormData = z.infer<typeof formSchema>;
export type AuditFormData = z.infer<typeof auditFormSchema>

export type EmailResponse = {
    success : boolean,
    message : string
}

export type MailData = {
    name : string,
    email : string,
    phone : string,
    website? :string,
    services? : string | null,
    messgae? : string | null
}