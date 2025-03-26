import React from "react";
import Footer from "../footer/Footer";
import Link from "next/link";

// Function to chunk an array into smaller arrays of size 2
const chunkArray = (array: object[], chunkSize: number) => {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Services1 = () => {
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

  // Chunk the services array into chunks of 2
  const chunkedServices = chunkArray(services, 2);

  return (
    <div className="w-auto bg-white text-black">
      <section className="my-8 text-center">
        <h1 className="text-2xl font-semibold md:text-6xl">OUR SERVICES</h1>
      </section>

      <div className="p-2 sm:p-4">
        {chunkedServices.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            className={`mb-4 flex border-gray-300 pb-2 md:mb-8 md:pb-8 ${chunkIndex == chunkedServices.length - 1 ? "" : "border-b-2"}`}
          >
            {chunk.map((service: any, index: number) => (
              <div
                key={index}
                className={`relative flex flex-1 flex-col items-center justify-between gap-4 border-gray-300 p-6 md:p-4 md:gap-12 ${index === 0 ? "border-r-2" : ""}`}
              >
                <h2 className="pb-16 text-center text-lg font-medium md:font-thin md:text-3xl">
                  {service.title}
                </h2>
                {/* <button className="w-8 h-8 md:w-12 md:h-12 md:text-2xl flex items-center justify-center bg-purple-500 text-white rounded-full">+</button> */}
                <Link
                  href={`/our-services/${service.link}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white md:h-12 md:w-12 md:text-2xl"
                >
                  +
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services1;
