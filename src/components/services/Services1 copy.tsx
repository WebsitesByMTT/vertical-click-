"use client"
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Link from "next/link";


const services = [
  {
    id: 1,
    title: "Digital Strategy and Planning",
    desc: "With our extensive experience, we develop tailored strategies and  plans that drive business growth, enhance brand visibility, and increase revenue.",
    link: "digital-strategy-and-planning",
  },
  {
    id: 2,
    title: "Creative Strategy and Web Graphics Design",
    desc: "At Vertical Click’s, creativity is deeply ingrained in our culture, influencing every aspect of our work, from website design to social media content creation.",
    link: "creative-strategy-and-web-graphics-design",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    desc: "Social media is a fundamental component of our overall strategy, and we leverage a range of social tactics across various platforms to achieve our clients' goals.",
    link: "social-media-marketing",
  },
  {
    id: 4,
    title: "Videos, GIFs and Content Marketing",
    desc: "The rising popularity of video content has led to a shift in Google's algorithm, which now favors pages that feature social media integration, social bookmarking, and rich video content.",
    link: "videos-gifs-and-content-marketing",
  },
  {
    id: 5,
    title: "Website Design and Development",
    desc: "We maintain a forward-thinking approach, staying abreast of the latest technological advancements and UI trends to inform our design decisions.",
    link: "website-design-and-development",
  },
  {
    id: 6,
    title: "Search Engine Optimization",
    desc: "We adopt a straightforward and transparent approach to SEO and SEM, commencing with a comprehensive audit of your assets and a thorough assessment of your goals, followed by the provision of detailed timeline expectations.",
    link: "search-engine-optimization",
  },
  {
    id: 7,
    title: "Email Marketing",
    desc: "We specialize in creating effective email marketing campaigns, streamlining the delivery process for effortless, secure, and tailored communication. Our creative team crafts innovative designs.",
    link: "email-marketing",
  },
  {
    id: 8,
    title: "Web Analytics",
    desc: "To maximize digital marketing efforts, it's essential to leverage analytics data. This information helps businesses understand user interactions, identify areas for improvement, and inform data-driven decisions.",
    link: "web-analytics",
  },
  {
    id: 9,
    title: "Media Planning and Buying",
    desc: "Our strategic partnerships with a network of media outlets empower us to deliver a holistic and accredited communication solution, incorporating multiple media formats, including websites, apps, and beyond.",
    link: "media-planning-and-buying",
  },
  {
    id: 10,
    title: "Shopify Website & Development",
    desc: "Searching for a trusted partner to develop your Shopify website? Look no further – you're in the right place!",
    link: "shopify-website-and-development",
  },
];


// Function to chunk an array into smaller arrays of size 2
const chunkArray = (array: object[], chunkSize: number) => {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};



const Services1 = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const chunkedServices = chunkArray(services, 2);

  return (
   

    <div className="w-auto bg-white text-black">
      <section className="my-8 text-center">
        <h1 className="text-2xl font-semibold md:text-6xl">OUR SERVICES</h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => {
          // Determine if the current item is in the last row
          const isLastRowMobile = index === services.length - 1;
          const isLastRowDesktop =
            services.length % 2 === 0
              ? index >= services.length - 2
              : index === services.length - 1;

          return (
            <div
              key={service.id}
              className={`group flex flex-col items-center justify-between gap-4 border-gray-300 p-6
                ${index % 2 !== 0 ? "md:border-l-2" : ""}
                ${isLastRowMobile ? "border-b-0" : "border-b-2"}
                ${isLastRowDesktop ? "md:border-b-0" : "md:border-b-2"}
              `}
            >
              <h2 className="text-center text-lg font-medium md:text-3xl md:font-thin">
                {service.title}
              </h2>

              <div className="h-30 md:h-65 lg:h-45 flex items-center justify-center w-[80%]">
                <p className="text-center text-sm md:text-xl text-gray-600 font-sans py-8 lg:py-16 md:hidden">
                  {service.desc}
                </p>
                <p className="hidden text-center text-sm md:text-xl text-gray-600 font-sans  py-8 lg:py-16 md:group-hover:block">
                  {service.desc}
                </p>
              </div>

              <Link
                href={`/our-services/${service.link}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white md:h-12 md:w-12 md:text-2xl"
              >
                +
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services1;
