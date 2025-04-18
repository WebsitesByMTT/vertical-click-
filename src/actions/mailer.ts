"use client"
import { MailData } from "@/types/contact-us";
import emailjs from 'emailjs-com'
import { EmailResponse } from "@/types/contact-us";

export const sendMail = async (data: MailData , template_id : string): Promise<EmailResponse> => {
     const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? ""
     const user_id = process.env.NEXT_PUBLIC_EMAIL_USER_ID ?? ""

     if(!template_id || !service_id || !user_id ){
          return {
              success: false,
              message: "We’re experiencing a temporary issue. Please try again in a moment."
          }
     }
      
     try {
          const resp = await emailjs.send(service_id, template_id, data, user_id)
          if (resp.status === 200) {
               return {
                    success: true,
                    message: "Message sent Successfully!"
               }
          }
          else {
               return {
                    success: false,
                    message: "Something went wrong. Please try again later."
               }
          }

     } catch (error) {
          console.error("EmailJS Error:", error);
          return {
               success: false,
               message: "Failed to send message. Please try again.",
          };
     }

}