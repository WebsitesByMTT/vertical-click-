import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import TextCardList from "@/components/TextCardList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency | Grow Your Business Online.",
  description:
    "Boost your online presence with our expert digital marketing services. We offer SEO, SEM, Paid Media, and more to drive traffic, leads, and sales.",
    alternates : {
      canonical : "https://verticalclick.us/our-services/digital-marketing-services"
    }
};

const TextCardArr = [
  {
    headerText: "Search Engine Optimization (SEO)",
    upperText:
      "Boost your organic rankings with our customized SEO strategies designed to increase visibility and attract high-intent customers.",
    checkList: [
      "Keyword Research & Content Strategy",
      "On-Page & Technical SEO Optimization",
      "Link Building & Authority Growth",
      "Local SEO & Google My Business Optimization",
    ],
    bottomText: "",
  },
  {
    headerText: "Search Engine Marketing (SEM)",
    upperText:
      "Get immediate traffic and leads with our highly targeted PPC campaigns on Google Ads and Bing Ads.",
    checkList: [
      "Google Ads Setup & Optimization",
      "Keyword Targeting & Bid Management",
      "Landing Page & Ad Copy Optimization",
      "A/B Testing & Performance Tracking",
    ],
    bottomText: "",
  },
  {
    headerText: "Paid Media Advertising",
    upperText:
      "We create highly targeted paid advertising campaigns across multiple platforms to drive brand awareness and conversions.",
    checkList: [
      "Social Media Ads (Facebook, Instagram, LinkedIn, TikTok)",
      "Display & Video Advertising",
      "Retargeting & Remarketing Campaigns",
      "Conversion Rate Optimization (CRO)",
    ],
    bottomText: "",
  },
  {
    headerText: "E-Commerce SEO",
    upperText:
      "Our E-Commerce SEO services help online stores rank higher, increase traffic, and drive more sales.",
    checkList: [
      "Product Page Optimization",
      "Amazon & Shopify SEO",
      "Schema Markup & Rich Snippets",
      "Customer Review Management",
    ],
    bottomText: "",
  },
  {
    headerText: "Local SEO",
    upperText:
      "We help local businesses dominate search results and attract nearby customers with geo-targeted SEO strategies.",
    checkList: [
      "Google My Business Optimization",
      "Local Keyword Targeting",
      "Citation Building & NAP Consistency",
      "Online Reviews & Reputation Management",
    ],
    bottomText: "",
  },
];

const DigitalMarketing = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection
        title="Digital Marketing Services"
        subtitle="Drive Growth with Expert Digital "
        pinkBgText=" Marketing Solutions"
        description="In today’s competitive market, a strong digital presence is essential for business success. At Vertical Click, we provide SEO, SEM, Paid Media, E-Commerce SEO, and Local SEO services to help businesses in Euless, Texas, and across the USA generate leads, increase conversions, and maximize ROI."
      />
      <Container>
        <main className="">
          <TextCardList
            TextCardItems={TextCardArr}
            title="Our Digital Marketing Services"
          />
          <Divider />
          <section className="rounded-md bg-black p-8 text-white md:p-14">
            <h2 className="text-4xl font-medium md:text-5xl">
              Why Choose Vertical Click?
            </h2>
            <p className="mt-5 text-lg font-normal">
              ✔ Results-Driven Digital Marketing – We focus on strategies that
              deliver measurable growth.
              <br />
              ✔ Customized Marketing Plans – Tailored to your business needs
              and budget.
              <br />
              ✔ Experienced Team of Experts – 10+ years of expertise in SEO,
              SEM, and Paid Media.
              <br />
              ✔ Transparent Reporting & Analytics – Real-time insights into
              campaign performance.
              <br />
            </p>
          </section>
        </main>
        <Divider />
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default DigitalMarketing;
