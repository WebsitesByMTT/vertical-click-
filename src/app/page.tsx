import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

export default function Home() {
  const wwp = [
    {
      pinkBgTitle: "Digital",
      subtitle: "We innovate digital experiences daily!",
      description:
        "Vertical Clicks, a leading digital marketing agency in Euless, Texas combines creativity and technical expertise to develop and execute successful digital strategies for clients.",
      button: "About Us",
      link: "/about-us",
      image: "/images/example.png",
    },
    {
      purpleTitle: "As well as many more digital innovations",
      subtitle: "Personalized marketing for brands that care",
      subtext: "What value is marketing if it doesn't drive performance?",
      description:
        "We design immersive digital experiences that captivate audiences and achieve desired outcomes, leveraging targeted performance marketing to elevate your brand's visibility and appeal.",
      button: "Our Services",
      link: "/our-services",
      image: "/images/example.png",
    },
    {
      pinkBgTitle: "Comprehensive Digital Services",
      subtitle: "Interconnected Insights:",
      subtext: "Where Data, Metrics, and Analytics Converge",
      description:
        "In a world where digital connections are omnipresent, we recognize the importance of a unified approach to digital communications. Our solution integrates creative vision, technical prowess, and a diverse array of digital marketing disciplines.",
      image: "/images/example.png",
    },
  ];
  const ourServices = [
    {
      title: "Digital Marketing",
      color: "bg-[#F05186]",
      image: "/images/services-1.png",
      services: [
        "Brand Marketing",
        "Social Media Marketing",
        "Branding",
        "Brand Campaign",
      ],
    },
    {
      title: "Technology",
      color: "bg-[#8F5BFE]",
      image: "/images/services-2.png",
      services: [
        "E-Commerce Solutions",
        "Website Maintenance",
        "UI/ UX",
        "App Development",
        "Game Development",
      ],
    },
    {
      title: "ORM",
      color: "bg-[#F05186]",
      image: "/images/services-3.png",
      services: [
        "Response Management",
        "Perception Management",
        "Listening",
        "CRM",
      ],
    },
    {
      title: "Search",
      color: "bg-[#8F5BFE]",
      image: "/images/services-4.png",
      services: ["SEO", "SEM", "Paid Media", "E-Commerce SEO", "Local SEO"],
    },
  ];
  return (
    <div>
      {/* header */}
      <Header />
      <Container>
        {/* hero */}
        <div className="flex h-[50vh] items-center justify-center lg:h-screen">
          <div className="text-center">
            <h1 className="text-5xl font-bold uppercase lg:text-9xl">
              We innovate
            </h1>
            <h1 className="inline-block rounded-md bg-[#F05186] px-4 py-2 text-5xl font-bold text-white uppercase lg:text-9xl">
              digital
            </h1>
            <h1 className="text-5xl font-bold text-[#8F5BFE] uppercase lg:text-9xl">
              experiences
            </h1>
            <h1 className="text-5xl font-bold uppercase lg:text-9xl">daily!</h1>
          </div>
        </div>
        <Divider />
        {/* what we provide */}
        <div className="mx-auto space-y-6">
          {/* title */}
          <h1 className="text-3xl font-bold uppercase md:p-4 md:text-4xl lg:p-0">
            What we provide?
          </h1>
          {/* content */}
          {wwp.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between md:flex-row xl:justify-center xl:gap-8"
            >
              <Image
                src={item.image}
                alt="design"
                width={500}
                height={500}
                className="w-full md:w-90 lg:w-110 xl:w-140"
              />
              <div className="flex h-full max-w-md flex-col items-start justify-around text-start xl:max-w-none">
                {item.purpleTitle && (
                  <h1 className="mt-2 inline-block content-start py-2 text-3xl font-bold text-[#8F5BFE] uppercase md:mt-0 md:py-0 xl:text-4xl">
                    {item.purpleTitle}
                  </h1>
                )}
                {item.pinkBgTitle && (
                  <h1 className="mt-2 inline-block rounded-md bg-[#F05186] px-4 py-2 text-3xl font-bold text-white uppercase md:mt-0 xl:text-4xl">
                    {item.pinkBgTitle}
                  </h1>
                )}
                <h3 className="text-2xl font-light uppercase xl:text-3xl">
                  {item.subtitle}
                </h3>
                {item.subtext && (
                  <h3 className="mb-4 text-sm xl:text-lg">{item.subtext}</h3>
                )}
                <p className="text-sm xl:text-lg">{item.description}</p>
                {item.button && (
                  <Link
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-[#F05186] to-[#8F5BFE] px-4 py-2 text-white uppercase"
                    href={item.link}
                  >
                    {item.button}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <Divider />
        {/* Our Services */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* heading */}

          <h1 className="p-4 text-4xl font-bold uppercase xl:text-5xl">
            Our Services
          </h1>
          {/* content */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ourServices.map((service, index) => (
              <div
                key={index}
                className={cn("rounded-2xl p-4 xl:p-8", service.color)}
              >
                <h1 className="min-h-28 text-4xl leading-tight font-bold uppercase lg:min-h-20 lg:text-2xl xl:text-4xl">
                  {service.title}
                </h1>
                <img
                  src={service.image}
                  alt={service.title}
                  className="mb-4 w-full"
                />
                {service.services.map((service, index) => (
                  <p
                    key={index}
                    className="content-center text-center text-2xl font-normal lg:text-xl"
                  >
                    {service}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Divider />
        {/* why us */}
        <section className="rounded-md bg-black text-white">
          <div className="mx-auto w-full p-6 xl:p-10">
            <div className="mb-8 flex w-full flex-col items-center justify-center md:mb-20 md:flex-row lg:mb-0">
              <h1 className="mb-6 text-2xl leading-tight font-bold md:text-3xl xl:text-5xl">
                WHY IS VERTICAL CLICKS THE BEST DIGITAL MARKETING COMPANY FOR
                YOUR BUSINESS?
              </h1>
              <p className="text-lg text-gray-300 xl:text-xl">
                Vertical Click's is your go-to digital marketing and SEO agency
                in the USA. Here's what sets us apart and why you should choose
                us for your digital needs:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-gray-800 p-6 transition-all duration-300 hover:border-gray-700 xl:p-8">
                <h2 className="mb-2 text-2xl font-bold xl:mb-6">
                  STRATEGIC EXPERTISE
                </h2>
                <div>
                  <p className="leading-relaxed text-gray-400">
                    <span className="text-lg font-semibold text-white italic">
                      Expert Guidance:{" "}
                    </span>
                    Our seasoned team develops customized strategies aligned
                    with your business objectives, ensuring sustainable growth.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-800 p-6 transition-all duration-300 hover:border-gray-700 xl:p-8">
                <h2 className="mb-2 text-2xl font-bold xl:mb-6">
                  INNOVATIVE CAMPAIGNS
                </h2>
                <div>
                  <p className="leading-relaxed text-gray-400">
                    <span className="text-lg font-semibold text-white italic">
                      Creative Solutions:{" "}
                    </span>
                    Our team develops bold, innovative campaigns that break
                    through the noise and leave a lasting impression.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-800 p-6 transition-all duration-300 hover:border-gray-700 xl:p-8">
                <h2 className="mb-2 text-2xl font-bold xl:mb-6">
                  FULL-SERVICE CAPABILITIES
                </h2>
                <div>
                  <p className="leading-relaxed text-gray-400">
                    <span className="text-lg font-semibold text-white italic">
                      Comprehensive Services:{" "}
                    </span>
                    Our full-service digital marketing agency provides
                    everything you need to elevate your brand and drive success.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-800 p-6 transition-all duration-300 hover:border-gray-700 xl:p-8">
                <h2 className="mb-2 text-2xl font-bold xl:mb-6">
                  PROVEN RESULTS
                </h2>
                <div>
                  <p className="leading-relaxed text-gray-400">
                    <span className="text-lg font-semibold text-white italic">
                      Data-Driven Insights:{" "}
                    </span>
                    Our team focuses on driving real results, leveraging data
                    and insights to optimize campaigns and propel your business
                    forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Divider />
        {/* reviews */}
        <section className="flex">
          {/* content */}
          <div className="pr-10">
            <div className="text-3xl font-normal">Multiple Award Winning</div>
            <div className="text-5xl font-bold">Digital Marketing Agency</div>
            <p className="my-10 text-xl font-normal">
              Vertical Click’s dedication to excellence in digital marketing has
              earned us a reputation for outstanding achievement, as evidenced
              by our impressive array of awards and client testimonials.
            </p>
            <img
              src="/images/reviews.png"
              alt="reviews"
              className="hidden lg:block"
            />
          </div>
          {/* image */}
          <Image
            src="/images/happy-client.png"
            alt="happy client"
            height={500}
            width={500}
            className="hidden w-100 lg:block"
          />
        </section>
        <Divider />
        {/* blogs */}
        <section>
          <div className="max-full mx-auto">
            <h2 className="mb-8 text-center text-5xl font-bold md:mb-16 md:text-6xl">
              BLOGS
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Desktop setup with dual monitors"
                className="h-[300px] w-full rounded-3xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Person in warehouse"
                className="h-[300px] w-full rounded-3xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
                alt="Person working on laptop"
                className="h-full w-full rounded-3xl object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Person writing on paper"
                className="h-[300px] w-full rounded-3xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
                alt="Laptop and coffee setup"
                className="h-[300px] w-full rounded-3xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="Music equipment"
                className="h-[300px] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>
        <Divider />
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
}
