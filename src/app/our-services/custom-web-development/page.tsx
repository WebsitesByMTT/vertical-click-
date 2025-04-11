import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import TextCardList from "@/components/TextCardList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Development Services | Scalable & Secure Solutions",
  description:
    "Get tailored web development solutions for your business. We build responsive, secure, and high-performance websites to enhance user experience and growth.",
    alternates : {
      canonical : "https://verticalclick.us/our-services/custom-web-development"
    },
    openGraph : {
      title : "Custom Web Development Services | Scalable & Secure Solutions",
      description : "Get tailored web development solutions for your business. We build responsive, secure, and high-performance websites to enhance user experience and growth.",
      url : "https://verticalclick.us/our-services/custom-web-development",
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
      title: "Custom Web Development Services | Scalable & Secure Solutions",
      description: "Get tailored web development solutions for your business. We build responsive, secure, and high-performance websites to enhance user experience and growth.",
      images: ["https://verticalclick.us/logo.svg"],
    },
};

const TextCardArr = [
  {
    headerText: "Custom Website Development",
    upperText:
      "A website tailored to your business needs ensures optimal functionality and a seamless user experience. We build responsive, high-performance websites that engage visitors and drive results.",
    checkList: [
      "Custom UI/UX Design",
      "Mobile-Optimized & Responsive Layouts",
      "Fast-Loading & SEO-Friendly Websites",
      "Integration with Business Tools & APIs",
      "Custom Features & Functionalities",
    ],
    bottomText:
      "We develop websites that are visually appealing, easy to navigate, and designed to convert visitors into customers.",
  },
  {
    headerText: "E-Commerce Web Development",
    upperText:
      "Looking to sell online? We create powerful eCommerce websites that provide a seamless shopping experience and boost sales.",
    checkList: [
      "Custom E-Commerce Website Development",
      "WooCommerce, Shopify, Magento & Custom Platforms",
      "Secure Payment Gateway Integration",
      "User-Friendly Shopping Cart & Checkout Process",
      "Product Catalog & Inventory Management",
    ],
    bottomText:
      "Our eCommerce solutions are designed to increase conversions and enhance customer experience.",
  },
  {
    headerText: "Web Application Development",
    upperText:
      "Need a custom web application for your business? We develop scalable and secure web apps tailored to your specific requirements.",
    checkList: [
      "Enterprise Web Applications",
      "Progressive Web Apps (PWAs)",
      "Custom Dashboards & Portals",
      "Cloud-Based & SaaS Solutions",
      "Third-Party API Integrations",
    ],
    bottomText:
      "Our custom web applications help businesses streamline operations and improve efficiency.",
  },
  {
    headerText: "CMS Development (WordPress & Custom CMS)",
    upperText:
      "Managing your website should be easy and hassle-free. We build custom CMS solutions that allow you to update content effortlessly.",
    checkList: [
      "WordPress Development & Customization",
      "Drupal, Joomla & Custom CMS Solutions",
      "Content Management System (CMS) Integration",
      "User-Friendly Admin Panel for Easy Updates",
      "Custom Plugins & Extensions",
    ],
    bottomText:
      "We create CMS-powered websites that are scalable, secure, and easy to manage.",
  },
  {
    headerText: "Website Redesign & Optimization",
    upperText:
      "Is your website outdated or underperforming? We redesign and optimize websites to improve speed, functionality, and SEO performance.",
    checkList: [
      "Modern UI/UX Design Overhaul",
      "Mobile & SEO Optimization",
      "Performance & Speed Enhancements",
      "Content & Navigation Restructuring",
      "Security & Accessibility Improvements",
    ],
    bottomText:
      "A redesigned website can increase engagement, improve search rankings, and boost conversions.",
  },
];
const CustomWebDev = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection
        title="Custom Web Development Services"
        subtitle="Professional Web Development "
        pinkBgText="Solutions for Businesses"
        description="In today’s digital era, a well-designed, high-performing website is essential for business success. At Vertical Click, we specialize in custom web development services that help businesses establish a strong online presence, enhance user experience, and drive conversions.
Whether you need a corporate website, eCommerce store, web application, or a fully customized solution, our team of expert developers creates websites that are fast, scalable, secure, and SEO-friendly."
      />
      <Container>
        <main className="">
          <TextCardList
            TextCardItems={TextCardArr}
            title="Our Custom Web Development Services"
          />
          <Divider />
          <section className="rounded-md bg-black p-8 text-white md:p-14">
            <h2 className="text-4xl font-medium md:text-5xl">
              Why Choose Vertical Click for Custom Web Development?
            </h2>
            <p className="mt-5 text-lg font-normal">
              ✔ Tailored Solutions – We create websites based on your unique
              business needs.
              <br />
              ✔ SEO-Friendly Development – Our websites are optimized for
              search engines from the start.
              <br />
              ✔ Scalable & Secure – We build websites that grow with your
              business.
              <br />
              ✔ Fast & Responsive – Mobile-friendly and high-speed performance
              guaranteed.
              <br />✔ End-to-End Support – From development to maintenance,
              we’ve got you covered.
            </p>
          </section>
        </main>
        <Divider />
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default CustomWebDev;
