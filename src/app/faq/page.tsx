import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import { FaqSection } from "@/components/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Expert Digital Marketing Advice & Solutions – Vertical Click.",
  description:
    "Get expert answers to common digital marketing questions on SEO, PPC, social media, and more. Learn how to grow your business with Vertical Click.",
    alternates : {
      canonical : "https://verticalclick.us/faq"
    },
    openGraph : {
      title : "FAQs | Expert Digital Marketing Advice & Solutions – Vertical Click.",
      description : "Get expert answers to common digital marketing questions on SEO, PPC, social media, and more. Learn how to grow your business with Vertical Click.",
      url : "https://verticalclick.us/faq",
      type : 'website',
      images : [
        {
          url : 'https://verticalclick.us/logo.svg',
          height : 630,
          width : 1200,
          alt : 'Vertical Click'
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "FAQs | Expert Digital Marketing Advice & Solutions – Vertical Click.",
      description: "Get expert answers to common digital marketing questions on SEO, PPC, social media, and more. Learn how to grow your business with Vertical Click.",
      images: ["https://verticalclick.us/logo.svg"],
    },
};

function FAQPage() {
  return (
    <React.Fragment>
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h1>
        <FaqSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default FAQPage;
