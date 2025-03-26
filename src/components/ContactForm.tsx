"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  city: string;
  budget: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    city: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submission Pending");
  };
  return (
    <div className="lg:col-span-2">
      <h1 className="mb-8 text-4xl font-bold">WRITE TO US!</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-sm border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-sm border border-gray-300 px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-sm border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="interest" className="mb-1 block text-sm font-medium">
            I am interested in...
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full appearance-none rounded-sm border border-gray-300 bg-white px-3 py-2"
          >
            <option value="">Select an option</option>
            <option value="web-design">Web Design</option>
            <option value="seo">SEO Services</option>
            <option value="marketing">Digital Marketing</option>
            <option value="other">Other Services</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="mb-1 block text-sm font-medium">
            Select City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full appearance-none rounded-sm border border-gray-300 bg-white px-3 py-2"
          >
            <option value="">Select a city</option>
            <option value="new-york">New York</option>
            <option value="commack">Commack</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-1 block text-sm font-medium">
            Select Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full appearance-none rounded-sm border border-gray-300 bg-white px-3 py-2"
          >
            <option value="">Select a budget range</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000+">$10,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-sm border border-gray-300 px-3 py-2"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="rounded-sm bg-purple-500 px-6 py-2 text-white transition-colors hover:bg-purple-600"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
