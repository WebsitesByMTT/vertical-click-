import React from "react";
import Footer from "../footer/Footer";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Digital Strategy and Planning",
      link: "digital-strategy-and-planning",
    },
    {
      title: "Creative Strategy and Web Graphics Design",
      link: "creative-strategy-and-web-graphics-design",
    },
    {
      title: "Social Media Marketing",
      link: "social-media-marketing",
    },
    {
      title: "Videos, GIFs and Content Marketing",
      link: "videos-gifs-and-content-marketing",
    },
    {
      title: "Website Design and Development",
      link: "website-design-and-development",
    },
    {
      title: "Search Engine Optimization",
      link: "search-engine-optimization",
    },
    {
      title: "Email Marketing",
      link: "email-marketing",
    },
    {
      title: "Web Analytics",
      link: "web-analytics",
    },
    {
      title: "Media Planning and Buying",
      link: "media-planning-and-buying",
    },
    {
      title: "Shopify Website & Development",
      link: "shopify-website-and-development",
    },
  ];

  return (
    <div className="bg-white text-black w-auto md:w-[70vw] mx-auto">
      <section className="text-center my-8">
        <h2 className="text-2xl md:text-6xl font-semibold">OUR SERVICES</h2>
      </section>

      <div className="grid grid-cols-2 gap-4 p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-4 md:gap-12 p-4 border-b-2 border-gray-300 last:border-b-0"
          >
            <p className="text-sm md:text-3xl font-thin text-center pb-16">
              {service.title}
            </p>
            <Link
              href={`/our-services/${service.link}`}
              className="w-8 h-8 md:w-12 md:h-12 md:text-2xl flex items-center justify-center bg-purple-500 text-white rounded-full"
            >
              +
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
