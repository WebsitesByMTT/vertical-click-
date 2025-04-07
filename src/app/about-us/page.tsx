import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Vertical Click - Expert Digital Marketing & SEO Solutions",
  description:
    "Discover Vertical Click, a results-driven digital marketing agency specializing in SEO, PPC, social media, and branding to grow your business online.",
    alternates : {
      canonical : "https://verticalclick.us/about-us"
    }
};

const AboutUs = () => {
  const wwb = [
    {
      title: "clients",
      value: "50+",
      description:
        "Vertical Click’s proudly serves over 65 global clients, delivering exceptional digital marketing services and innovative solutions.",
    },
    {
      title: "Experience",
      value: "5+",
      description:
        "Vertical Click’s wealth of experience in digital marketing enables us to consistently deliver high-quality solutions that exceed client expectations.",
    },
    {
      title: "Delivered Projects",
      value: "60+",
      description:
        "Our team provides comprehensive support, handling every aspect of a project from start to finish, which has enabled us to successfully deliver over 65 projects to date.",
    },
    {
      title: "Offices",
      value: "2+",
      description:
        "We have a pan-regional presence, with offices in Euless, Texas, and USA, ensuring our services are accessible to a wide range of clients.",
    },
  ];
  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          title=""
          subtitle="Ready to take your digital marketing to the next level?"
          pinkBgText="We're here to help!"
          description="At Vertical Click’s, we can help you capitalize on every opportunity and drive business success. Our team of highly skilled professionals at Vertical Click’s, a top SEO company in Euless, Texas - leverages years of expertise in digital marketing, SEO, SMO, content, web design, and development to drive business growth and achieve top search engine rankings."
        />
        <ImageBox
          title=""
          description="Vertical Click’s is a premier digital marketing company in the USA, providing a wide range of services, from website design and SEO to mobile app development and online reputation management, to help businesses engage their target audience."
          image="/images/about-us.png"
          imageOrientation="right"
        />
        <Divider />
        <section className="rounded-2xl bg-black p-8 text-white lg:p-14">
          <h2 className="text-4xl font-medium uppercase lg:text-5xl">
            Our Secret Sauce: Why We're Better
          </h2>
          <p className="mt-4 text-xl font-normal lg:text-2xl">
            As a trusted digital marketing partner, Vertical Click’s has been
            creating value for clients globally. Our team of skilled experts
            manages multiple projects monthly, focusing on delivering
            exceptional results that propel businesses forward.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {wwb.map((item, index) => (
              <div key={index} className="rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold uppercase lg:text-2xl">
                    {item.title}
                  </h3>
                  <h3 className="text-2xl font-bold text-[#8F5BFE] lg:text-4xl">
                    {item.value}
                  </h3>
                </div>
                <p className="text-sm font-normal lg:text-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <Divider />
        <section className="w-full space-y-2 text-center">
          <h2 className="text-4xl font-medium uppercase md:text-5xl">
            Our Story
          </h2>
          <p className="mt-4 text-xl font-normal md:text-2xl">
            At Vertical Clicks, a cutting-edge digital marketing agency, the
            team was determined to shake things up. They believed businesses
            should stop waiting for customers to find them and instead, take
            control of their marketing.
          </p>
          <p className="mt-4 text-xl font-normal md:text-2xl">
            The agency started spreading awareness through workshops, webinars,
            and social media. They shared success stories, highlighting the
            power of targeted online campaigns.
          </p>
          <p className="mt-4 text-xl font-normal md:text-2xl">
            As businesses began to take notice, Vertical Clicks received a flood
            of inquiries. The team crafted tailored strategies, driving real
            results for their clients.
          </p>
          <p className="mt-4 text-xl font-normal md:text-2xl">
            With each success story, Vertical Clicks solidified its reputation
            as a game-changer in the digital marketing landscape. By empowering
            businesses to take charge of their marketing, the agency was
            revolutionizing the way companies connected with their customers.
          </p>
          <div className="grid-col-1 grid gap-10 text-white md:grid-cols-2">
            <div className="flex flex-col items-center justify-center space-y-6 rounded-lg bg-[#F05186] p-6">
              <h3 className="text-4xl font-bold uppercase">Our Mission</h3>
              <p className="text-xl font-normal">
                Transforming a businesses by promoting more proactive marketing
                awareness, empowering them to seek out customers, drive growth,
                and shape their destiny.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-6 rounded-lg bg-[#8F5BFE] p-6">
              <h3 className="text-4xl font-bold uppercase">Our Vision</h3>
              <p className="text-xl font-normal">
                To create a marketing ecosystem where no business is left
                behind.
              </p>
            </div>
          </div>
        </section>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default AboutUs;
