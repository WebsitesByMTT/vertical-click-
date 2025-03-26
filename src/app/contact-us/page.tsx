import React from "react";
import { MessageSquare, MapPin, Phone } from "lucide-react";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Container from "@/components/Container";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Our Marketing Experts.",
  description:
    "Have questions or need digital marketing help? Contact Vertical Click for expert SEO, PPC, and social media strategies to grow your business today!",
};

const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Form Section */}
            <ContactForm />
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
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
