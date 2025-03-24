import Divider from "@/components/Divider";
import Header from "@/components/Header";
import { Separator } from "@/components/ui/Separator";
import React from "react";

const AboutUs = () => {
  return (
    <main>
      <Header />
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-medium uppercase my-4">
          About Us
        </h1>
        <p className="text-xl md:text-2xl font-normal">
          Vertical Click’s is a premier digital marketing company in the USA,
          providing a wide range of services, from website design and SEO to
          mobile app development and online reputation management, to help
          businesses engage their target audience. Ready to take your digital
          marketing to the next level? We're here to help! At Vertical Click’s,
          we can help you capitalize on every opportunity and drive business
          success. Our team of highly skilled professionals at Vertical Click’s,
          a top SEO company in Euless, Texas - leverages years of expertise in
          digital marketing, SEO, SMO, content, web design, and development to
          drive business growth and achieve top search engine rankings.
        </p>
        <div className="bg-[#8F5BFE26] rounded-md p-4 my-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-medium uppercase my-4">
            Our Secret Sauce:
            <span className="font-bold"> Why We're Better</span>
          </h1>
          <p className="text-xl md:text-2xl font-normal md:mx-20">
            As a trusted digital marketing partner, Vertical Click’s has been
            creating value for clients globally. Our team of skilled experts
            manages multiple projects monthly, focusing on delivering
            exceptional results that propel businesses forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative p-4">
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">Clients</h2>
              <h2 className="text-2xl font-semibold mb-4">50+</h2>
              <p className="text-muted-foreground max-w-lg">
                Vertical Click’s proudly serves over 65 global clients,
                delivering exceptional digital marketing services and innovative
                solutions.
              </p>
            </div>
            {/* Vertical Separator 1 */}
            <div className="hidden md:block w-0.5 bg-gray-300 absolute left-1/2 -translate-x-1/2 h-[calc(50%-2rem)]" />
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <h2 className="text-2xl font-semibold mb-4">5+</h2>
              <p className="text-muted-foreground max-w-xl">
                Vertical Click’s wealth of experience in digital marketing
                enables us to consistently deliver high-quality solutions that
                exceed client expectations.
              </p>
            </div>
            {/* Horizontal Separator */}
            <div className="hidden md:block col-span-3 h-0.5 bg-gray-300" />
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">
                Delivered Projects
              </h2>
              <h2 className="text-2xl font-semibold mb-4">60+</h2>
              <p className="text-muted-foreground max-w-xl">
                Our team provides comprehensive support, handling every aspect
                of a project from start to finish, which has enabled us to
                successfully deliver over 65 projects to date.
              </p>
            </div>
            {/* Vertical Separator 1 */}
            <div className="hidden md:block w-0.5 bg-gray-300 absolute left-1/2 -translate-x-1/2 bottom-0 h-[calc(50%-2rem)]" />
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">Offices</h2>
              <h2 className="text-2xl font-semibold mb-4">2+</h2>
              <p className="text-muted-foreground max-w-xl">
                We have a pan-regional presence, with offices in Euless, Texas,
                and USA, ensuring our services are accessible to a wide range of
                clients.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 my-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-medium uppercase my-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-normal md:mx-20">
            At Vertical Clicks, a cutting-edge digital marketing agency, the
            team was determined to shake things up. They believed businesses
            should stop waiting for customers to find them and instead, take
            control of their marketing. The agency started spreading awareness
            through workshops, webinars, and social media. They shared success
            stories, highlighting the power of targeted online campaigns. As
            businesses began to take notice, Vertical Clicks received a flood of
            inquiries. The team crafted tailored strategies, driving real
            results for their clients. With each success story, Vertical Clicks
            solidified its reputation as a game-changer in the digital marketing
            landscape. By empowering businesses to take charge of their
            marketing, the agency was revolutionizing the way companies
            connected with their customers.
          </p>
        </div>
        {/* Our Mission
        Transforming businesses by promoting proactive marketing awareness, empowering them to seek out customers, drive growth, and shape their destiny.
        Our Vision
        To create a marketing ecosystem where no business is left behind.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#8F5BFE26] p-4 my-4 flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium uppercase my-4">Our Mission</h1>
            <p className="text-2xl font-normal text-start">
              Transforming businesses by promoting proactive marketing
              awareness, empowering them to seek out customers, drive growth,
              and shape their destiny.
            </p>
          </div>
          <div className="bg-[#F05186] p-4 my-4 flex flex-col justify-center items-start">
            <h1 className="text-4xl font-medium uppercase my-4">Our Vision</h1>
            <p className="text-2xl font-normal text-start">
              To create a marketing ecosystem where no business is left behind.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
