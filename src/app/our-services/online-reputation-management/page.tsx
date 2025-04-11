import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/HeroSection";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import TextCardList from "@/components/TextCardList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Reputation Management (ORM) Services | Build Your Brand.",
  description:
    "Protect and enhance your brand's image with our ORM services. We manage reviews, mitigate negativity, and boost your online reputation for long-term success.",
    alternates : {
      canonical : "https://verticalclick.us/our-services/online-reputation-management"
    },
    openGraph : {
      title : "Online Reputation Management (ORM) Services | Build Your Brand.",
      description : "Protect and enhance your brand's image with our ORM services. We manage reviews, mitigate negativity, and boost your online reputation for long-term success.",
      url : "https://verticalclick.us/our-services/online-reputation-management",
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
      title: "Online Reputation Management (ORM) Services | Build Your Brand.",
      description: "Protect and enhance your brand's image with our ORM services. We manage reviews, mitigate negativity, and boost your online reputation for long-term success.",
      images: ["https://verticalclick.us/logo.svg"],
    },
};

const TextCardArr = [
  {
    headerText: "Response Management",
    upperText:
      "Engaging with customers and responding professionally to reviews is crucial for maintaining a positive reputation. We handle:",
    checkList: [
      "Google Reviews & Social Media Response",
      "Crisis Communication & Damage Contro",
      "Negative Review Management & Mitigation",
    ],
    bottomText: "",
  },
  {
    headerText: "Perception Management",
    upperText:
      "We shape how your brand is perceived online by ensuring positive, trustworthy content is highlighted.",
    checkList: [
      "Brand Image Enhancement",
      "Content & PR Strategy",
      "Search Engine Reputation Optimization",
    ],
    bottomText: "",
  },
  {
    headerText: "Listening & Monitoring",
    upperText:
      "We track brand mentions, reviews, and discussions across platforms to address issues before they escalate.",
    checkList: [
      "Social Media & Web Monitoring",
      "Competitor Analysis",
      "Sentiment Analysis",
    ],
    bottomText: "",
  },
  {
    headerText: "CRM & Customer Engagement",
    upperText:
      "A well-managed Customer Relationship Management (CRM) system helps maintain long-term trust with your audience.",
    checkList: [
      "Personalized Customer Communication",
      "Automated Feedback & Follow-Up Systems",
      "Customer Satisfaction Enhancement Strategies",
    ],
    bottomText: "",
  },
];

const ORMPage = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection
        title="Online Reputation Management (ORM)"
        subtitle="Protect & Enhance Your Brand’s "
        pinkBgText="Reputation Online"
        description="In today’s digital world, your online reputation is one of your most valuable assets. Negative reviews, misleading information, or false accusations can damage your brand’s credibility and impact business growth. At Vertical Click, we offer comprehensive ORM services in Euless, Texas, helping businesses build, monitor, and maintain a strong online presence."
      />
      <Container>
        <main className="">
          <TextCardList TextCardItems={TextCardArr} title="Our ORM Services" />
          <Divider />
          <section className="rounded-md bg-black p-8 text-white md:p-14">
            <h2 className="text-4xl font-medium md:text-5xl">
              Meet Our Powerhouse Team
            </h2>
            <p className="mt-5 text-lg font-normal">
              ✔ Proactive Reputation Management – We prevent and fix reputation
              issues before they harm your business.
              <br />
              ✔ Strategic Crisis Response – Quick and effective solutions to
              minimize damage.
              <br />
              ✔ Data-Driven Approach – Real-time analytics for better
              decision-making.
              <br />
              ✔ Multi-Platform Monitoring – We cover Google, Yelp, Facebook,
              Instagram, LinkedIn, and other platforms.
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

export default ORMPage;
