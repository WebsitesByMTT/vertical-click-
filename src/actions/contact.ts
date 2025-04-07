"use server"
import { SubmitHandler } from "react-hook-form";
import { FormData } from "@/types/contact-us";

export const sendMail = async (data : FormData) : Promise<void>=>{
     console.log("form data is : ", data)
     return 
}