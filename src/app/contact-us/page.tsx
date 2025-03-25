"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { MessageSquare, MapPin, Phone } from "lucide-react";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Our Marketing Experts.",
  description:
    "Have questions or need digital marketing help? Contact Vertical Click for expert SEO, PPC, and social media strategies to grow your business today!",
};

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

const ContactPage: React.FC = () => {
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
    <React.Fragment>
      <Container>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Form Section */}
            <div className="lg:col-span-2">
              <h1 className="mb-8 text-4xl font-bold">WRITE TO US!</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="interest"
                    className="mb-1 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="city"
                    className="mb-1 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="budget"
                    className="mb-1 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium"
                  >
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

            {/* Contact Information Section */}
            <div className="space-y-10">
              <div className="rounded-lg bg-gray-100 p-6">
                <div className="flex items-start space-x-3">
                  <MessageSquare
                    className="mt-1 flex-shrink-0 text-gray-500"
                    size={20}
                  />
                  <div>
                    <h2 className="text-xl font-bold">CHAT WITH US</h2>
                    <p className="text-gray-700">
                      Our friendly team is here to help.
                    </p>
                    <a
                      href="mailto:hi@verticalclick.com"
                      className="text-black hover:underline"
                    >
                      hi@verticalclick.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-100 p-6">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="mt-1 flex-shrink-0 text-gray-500"
                    size={20}
                  />
                  <div>
                    <h2 className="text-xl font-bold">VISIT US</h2>
                    <p className="text-gray-700">
                      Come say hello at our office HQ.
                    </p>
                    <p className="text-black">
                      85 Crooked Hill Road, Commack NY 11725
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-100 p-6">
                <div className="flex items-start space-x-3">
                  <Phone
                    className="mt-1 flex-shrink-0 text-gray-500"
                    size={20}
                  />
                  <div>
                    <h2 className="text-xl font-bold">CALL US</h2>
                    <p className="text-gray-700">Mon-Fri from 9am to 5pm.</p>
                    <a
                      href="tel:+5303933738788"
                      className="text-black hover:underline"
                    >
                      +5303933738788
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Navigation */}
          <div className="border-t border-gray-200 py-8 md:mt-16 md:pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="logo" className="w-12" />
                <p className="text-2xl font-bold text-gray-800">
                  Vertical Click
                </p>
              </Link>

              <nav className="flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About us
                </Link>
                <Link
                  href="/our-services"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Our Services
                </Link>
              </nav>
            </div>
          </div>

          {/* Call to Action 
      <div className="mt-16 text-center">
        <div className="bg-pink-500 text-white inline-block px-6 py-3 rounded-lg text-2xl font-bold">
          GOT AN IDEA?
        </div>
        <h2 className="text-2xl text-purple-500 mt-4">Let's Work On it</h2>
        
        <div className="mt-6 max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      // Social Media and Footer 
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-gray-800 text-white p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-800 text-white p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className="bg-gray-800 text-white p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3.01L12 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 3.01L16 23L12 14L3 10L23 3.01Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-gray-600">
          <a href="#" className="hover:text-gray-900">Explore</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Our Blogs</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Our Work</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Website SEO Audit</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Get in Touch</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-900">Work with us</a>
        </div>
      </div>*/}
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
