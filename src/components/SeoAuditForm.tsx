"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auditFormSchema } from "@/schema/form";
import { sendMail } from '@/actions/mailer'
import Loader from "./Loader";
import { showSuccess , showError } from '@/lib/toast';
import { AuditFormData } from "@/types/contact-us";

const services = [
  {id : 1 , name : "Search Engine Optimization (SEO)"},
  {id : 2 , name : "Social Media Optimization"},
  {id : 3 , name : "Website Design/Development"},
  {id : 4 , name : "E-commerce Website Design"},
  {id : 5 , name : "Web Designing"}
]

const SeoAuditForm = () => {
 const [isLoading , setLoading] = useState(false)

  const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<AuditFormData>({
      resolver: zodResolver(auditFormSchema),
      mode: "onBlur",
    });
  
    const onSubmit: SubmitHandler<AuditFormData> = (data) => {
       const mailData = {
          name : data.name,
          email : data.email,
          phone : data.phone,
          website : data.website,
          services :  data.services?.join(" , ") ?? "",
          message : data.message ?? ""
       }
       setLoading(true)
       sendMail(mailData , process.env.NEXT_PUBLIC_AUDIT_FORM_TEMPLATE_ID ?? '')
         .then((res : any)=>{
          if(res.success){
            showSuccess(res.message)
            reset()
          }
          else{
           showError(res.message)
          }
         })
         .catch((err : any)=>{
          showError(err.message)
         })
         .finally(()=>{
           setLoading(false)
         })
      
    }

  return (
    <div className="max-w-2xl mx-auto p-6 border border-purple-300 rounded-2xl bg-white">
       {/* <h1 className='text-2xl font-bold md:text-4xl text-center'>GET FREE WEBSITE AND SEO AUDIT</h1> */}
       <p className='text-lg md:text-xl font-bold text-gray-600 text-center mb-4'>Enter your details to receive a custom report within 24 hours.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}              
              className="w-full p-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-purple-400 bg-pink-50 placeholder-pink-400"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div>
          <input
              type="email"
              {...register("email")}
              placeholder="Your Email"
              className="w-full p-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-purple-400 bg-pink-50 placeholder-pink-400"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          
          {/* Phone and Website - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <input
              type="tel"
              {...register("phone")}
              placeholder="Phone Number"
              className="w-full p-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-purple-400 bg-pink-50 placeholder-pink-400"
            />
            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>
            <div>
            <input
              type="text"
              {...register("website")}
              placeholder="Website"
              className="w-full p-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-purple-400 bg-pink-50 placeholder-pink-400"
            />
            </div>
            
          </div>
          
          {/* Services Section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-700 mb-4">WHAT SERVICE(S) ARE YOU INTERESTED IN? CHOOSE ALL THAT APPLY.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
              {
                  services.map((item , index)=>{
                    return(
                      <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item.name}
                        value={item.name}
                        {...register("services")}
                        className="w-5 h-5 border border-pink-300 rounded text-purple-600 focus:ring-purple-500"
                      />
                      <label htmlFor={item.name} className="ml-2 text-gray-700">
                        {item.name}
                      </label>
                    </div>
                    )
                  })
              }
             
            </div>
            {errors.services && <p className="text-red-500">{errors.services.message}</p>}
          </div>
          
          {/* Message Field */}
          <div className="mt-4">
            <textarea
              {...register("message")}
              placeholder="How can we help you"
              rows={5}
              className="w-full p-4 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-pink-50 placeholder-pink-400"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors duration-300 mt-6 cursor-pointer"
          >
            SUBMIT
          </button>
          
          {/* Privacy Note */}
          <div className="flex items-center text-pink-500 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-11v4m0-8v2" clipRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>We will never share your personal info</p>
          </div>
        </div>
      </form>
      {isLoading && <Loader/>}
    </div>
  );
};



export default SeoAuditForm;

