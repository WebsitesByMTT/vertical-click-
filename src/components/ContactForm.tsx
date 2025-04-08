"use client"
import React , {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schema/form";
import { sendMail } from '@/actions/contact'
import Loader from "./Loader";
import Swal from "sweetalert2";
import { FormData } from "@/types/contact-us";


const ContactForm = () => {
 const [isLoading , setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true)
     sendMail(data)
       .then((res : any)=>{
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        })
          reset()
       })
       .catch((err : any)=>{
          
       })
      .finally(()=>{
         setLoading(false)
      })
    
  }

  return (
    <div className="lg:col-span-2">
      <h1 className="mb-8 text-4xl font-bold">WRITE TO US!</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input type="text" id="name" {...register("name")} className="w-full rounded-sm border border-gray-300 px-3 py-2" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input type="email" id="email" {...register("email")} className="w-full rounded-sm border border-gray-300 px-3 py-2" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone Number
          </label>
          <input type="tel" id="phone" {...register("phone")} className="w-full rounded-sm border border-gray-300 px-3 py-2" />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="interest" className="mb-1 block text-sm font-medium">
            I am interested in...
          </label>
          <select id="interest" {...register("interest")} className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2">
            <option value="">Select an option</option>
            <option value="web-design">Web Design</option>
            <option value="seo">SEO Services</option>
            <option value="marketing">Digital Marketing</option>
            <option value="other">Other Services</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message
          </label>
          <textarea id="message" {...register("message")} rows={5} className="w-full rounded-sm border border-gray-300 px-3 py-2"></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>

        <div>
          <button type="submit" className="rounded-sm bg-purple-500 px-6 py-2 text-white transition-colors hover:bg-purple-600 cursor-pointer">
            SUBMIT
          </button>
        </div>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactForm;
