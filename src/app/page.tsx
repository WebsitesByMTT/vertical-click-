import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* hero */}
      <div className="max-w-[70vw] mx-auto flex justify-center items-center h-[50vh] lg:h-screen">
        <div className="text-center">
          <h1 className="text-5xl lg:text-9xl font-bold uppercase">
            We innovate
          </h1>
          <h1 className="text-5xl lg:text-9xl font-bold uppercase bg-[#F05186] rounded-md text-white inline-block px-4 py-2">
            digital
          </h1>
          <h1 className="text-5xl lg:text-9xl font-bold uppercase text-[#8F5BFE]">
            experiences
          </h1>
          <h1 className="text-5xl lg:text-9xl font-bold uppercase">daily!</h1>
        </div>
      </div>
      <Divider />
      {/* what we provide */}
      <div className="max-w-[90vw] md:max-w-[70vw] mx-auto space-y-6 text-center">
        {/* title */}
        <h1 className="text-3xl md:text-5xl font-bold uppercase md:p-4">
          What we provide?
        </h1>
        {/* content */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="md:w-1/2">
            <Image
              src="/images/example.png"
              alt="design"
              width={500}
              height={500}
              // className="w-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between items-start h-full text-start">
            <h1 className="text-4xl md:text-5xl font-bold uppercase bg-[#F05186] rounded-md text-white inline-block px-4 py-2 mt-2 md:mt-0">
              Digital
            </h1>
            <h3 className="text-3xl md:text-4xl font-light uppercase max-w-xl">
              We innovate digital experiences daily!
            </h3>
            <p className="text-lg md:text-xl">
              Vertical Clicks, a leading digital marketing agency in Euless,
              Texas combines creativity and technical expertise to develop and
              execute successful digital strategies for clients.
            </p>
            <Link
              className="bg-gradient-to-r from-[#F05186] to-[#8F5BFE] text-white px-4 py-2 rounded-md inline-flex items-center gap-2 w-fit mt-4"
              href="/about"
            >
              ABOUT US
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="md:w-1/2">
            <Image
              src="/images/example.png"
              alt="design"
              width={500}
              height={500}
              // className="w-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between items-start h-full text-start">
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-[#8F5BFE] content-start inline-block py-2 mt-2 md:mt-0">
              As well as many more digital innovations
            </h1>
            <h3 className="text-3xl md:text-4xl font-light uppercase">
              Personalized marketing for brands that care
            </h3>
            <p className="text-lg md:text-xl">
              What value is marketing if it doesn't drive performance?
            </p>
            <p className="text-lg md:text-xl">
              We design immersive digital experiences that captivate audiences
              and achieve desired outcomes, leveraging targeted performance
              marketing to elevate your brand's visibility and appeal.
            </p>
            <Link
              className="bg-gradient-to-r from-[#F05186] to-[#8F5BFE] text-white px-4 py-2 rounded-md inline-flex items-center gap-2 w-fit mt-4"
              href="/about"
            >
              OUR SERVICES
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="md:w-1/2">
            <Image
              src="/images/example.png"
              alt="design"
              width={500}
              height={500}
              // className="w-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between items-start h-full text-start ">
            <h1 className="text-4xl md:text-5xl font-bold uppercase bg-[#F05186] rounded-md text-white inline-block px-4 py-2 mt-2 md:mt-0">
              Comprehensive Digital Services
            </h1>
            <h3 className="text-3xl md:text-4xl font-light uppercase">
              Interconnected Insights:
            </h3>
            <p className="text-lg md:text-xl">
              Where Data, Metrics, and Analytics Converge
            </p>
            <p className="text-xl">
              In a world where digital connections are omnipresent, we recognize
              the importance of a unified approach to digital communications.
              Our solution integrates creative vision, technical prowess, and a
              diverse array of digital marketing disciplines.
            </p>
            {/* <Link
              className="bg-gradient-to-r from-[#F05186] to-[#8F5BFE] text-white px-4 py-2 rounded-md inline-flex items-center gap-2 w-fit mt-4"
              href="/about"
            >
              OUR SERVICES
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
            </Link> */}
          </div>
        </div>
      </div>
      <Divider />
      {/* Our Services */}
      <div className="max-w-[90vw] md:max-w-[70vw] mx-auto space-y-6 flex flex-col justify-center items-center">
        {/* heading */}
        <h1 className="text-5xl font-bold uppercase p-4">Our Services</h1>
        {/* content */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 md:col-span-1 bg-[#F05186] rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
            <h1 className="text-4xl min-h-[10rem] font-bold leading-tight uppercase">
              Digital Marketing Services
            </h1>
            <p className="text-xl font-normal content-center text-center">
              Brand Strategy
              <br />
              Social Media Marketing
              <br /> Branding
              <br /> Brand Campaigns
            </p>
          </div>
          <div className="col-span-4 md:col-span-1 bg-[#F05186] rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
            <h1 className="text-4xl font-bold min-h-[10rem] leading-tight uppercase">
              Technology
            </h1>
            <p className="text-xl font-normal content-center text-center">
              E-Commerce Solutions
              <br />
              Website Maintenance
              <br />
              UI/ UX
              <br />
              App Development
              <br />
              Game Development
            </p>
          </div>
          <div className="col-span-4 md:col-span-1 bg-[#F05186] rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
            <h1 className="text-4xl font-bold min-h-[10rem] leading-tight uppercase">
              Orm
            </h1>
            <p className="text-xl font-normal content-center text-center">
              Brand Strategy
              <br />
              Social Media Marketing
              <br /> Branding
              <br /> Brand Campaigns
            </p>
          </div>
          <div className="col-span-4 md:col-span-1 bg-[#F05186] rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
            <h1 className="text-4xl min-h-[10rem] font-bold leading-tight uppercase">
              Search
            </h1>
            <p className="text-xl font-normal content-center text-center">
              Brand Strategy
              <br />
              Social Media Marketing
              <br /> Branding
              <br /> Brand Campaigns
            </p>
          </div>
        </div>
      </div>
      <Divider />
      {/* why us */}
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto bg-black text-white rounded-md">
        <div className="w-full mx-auto p-6 md:p-10">
          <div className="w-full mb-8 md:mb-20 flex flex-col md:flex-row justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              WHY IS VERTICAL CLICKS THE BEST DIGITAL MARKETING COMPANY FOR YOUR
              BUSINESS?
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Vertical Click's is your go-to digital marketing and SEO agency in
              the USA. Here's what sets us apart and why you should choose us
              for your digital needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">STRATEGIC EXPERTISE</h2>
              <div>
                <p className="text-lg font-semibold italic mb-3">
                  Expert Guidance:
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our seasoned team develops customized strategies aligned with
                  your business objectives, ensuring sustainable growth.
                </p>
              </div>
            </div>

            <div className="border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">INNOVATIVE CAMPAIGNS</h2>
              <div>
                <p className="text-lg font-semibold italic mb-3">
                  Creative Solutions:
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our team develops bold, innovative campaigns that break
                  through the noise and leave a lasting impression.
                </p>
              </div>
            </div>

            <div className="border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">
                FULL-SERVICE CAPABILITIES
              </h2>
              <div>
                <p className="text-lg font-semibold italic mb-3">
                  One-Stop Shop:
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our full-service digital marketing agency provides everything
                  you need to elevate your brand and drive success.
                </p>
              </div>
            </div>

            <div className="border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">PROVEN RESULTS</h2>
              <div>
                <p className="text-lg font-semibold italic mb-3">
                  Results-Driven Approach:
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our team focuses on driving real results, leveraging data and
                  insights to optimize campaigns and propel your business
                  forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      {/* reviews */}
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto flex">
        {/* content */}
        <div className="pr-10">
          <div className="text-3xl font-normal">Multiple Award Winning</div>
          <div className="text-5xl font-bold">Digital Marketing Agency</div>
          <p className="text-xl font-normal my-10">
            Vertical Click’s dedication to excellence in digital marketing has
            earned us a reputation for outstanding achievement, as evidenced by
            our impressive array of awards and client testimonials.
          </p>
          <img
            src="/images/reviews.png"
            alt="reviews"
            className="hidden md:block"
          />
        </div>
        {/* image */}
        <img
          src="/images/happy-client.png"
          alt="happy client"
          width={500}
          className="hidden md:block"
        />
      </section>
      <Divider />
      {/* blogs */}
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto">
        <div className="max-full mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 md:mb-16">
            BLOGS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Desktop setup with dual monitors"
              className="w-full h-[300px] object-cover rounded-3xl"
            />
            <img
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Person in warehouse"
              className="w-full h-[300px] object-cover rounded-3xl"
            />

            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
              alt="Person working on laptop"
              className="w-full h-full object-cover rounded-3xl"
            />

            <img
              src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Person writing on paper"
              className="w-full h-[300px] object-cover rounded-3xl"
            />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
              alt="Laptop and coffee setup"
              className="w-full h-[300px] object-cover rounded-3xl"
            />
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Music equipment"
              className="w-full h-[300px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>
      <Divider />
      {/* footer */}
      <Footer />
    </div>
  );
}
