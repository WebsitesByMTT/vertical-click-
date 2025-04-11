import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IconBox from "@/components/IconBox";
import ImageBox from "@/components/ImageBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Grow Your Brand & Engagement",
  description:
    "Boost your brand with Vertical Click’s social media marketing services. We drive engagement, visibility & sales through strategic content & paid ads!",
    alternates : {
      canonical : "https://verticalclick.us/our-services/social-media-marketing"
    },
    openGraph : {
      title : "Social Media Marketing Services | Grow Your Brand & Engagement",
      description : "Boost your brand with Vertical Click’s social media marketing services. We drive engagement, visibility & sales through strategic content & paid ads!",
      url : "https://verticalclick.us/our-services/social-media-marketing",
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
      title: "Social Media Marketing Services | Grow Your Brand & Engagement",
      description: "Boost your brand with Vertical Click’s social media marketing services. We drive engagement, visibility & sales through strategic content & paid ads!",
      images: ["https://verticalclick.us/logo.svg"],
    },
};

const SMM = () => {
  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          title="Social Media Marketing"
          subtitle="Unlocking Your Business Potential"
          pinkBgText="with Vertical Click’s"
          description="We're confident in our ability to help you establish the business you desire. From innovative designs to creative solutions, our team is dedicated to making your business shine."
        />
        <Divider />
        <div className="space-y-8">
          <ImageBox
            title="Social Media Marketing Expertise"
            description="As our name suggests, social media is our specialty. We recognize its potential to transform your brand and leverage various social strategies across different channels to support our campaigns. Our goal is to initiate meaningful conversations with your audience, encourage engagement, and drive results."
            imageOrientation="right"
            image="/images/smme.png"
          />
          <ImageBox
            title="Tailored Social Media Solutions"
            description="Our approach to social media marketing is unique. We start by understanding your brand's story, vision, mission, and objectives. This enables us to develop a customized marketing brief that addresses your specific challenges."
            imageOrientation="left"
            image="/images/tsms.png"
          />
          <ImageBox
            title="Strategy Development"
            description="We analyze your marketing brief, identify long-term goals, and define a tailored social media strategy. Our approach is built around specific, measurable, actionable, and time-oriented goals (KPIs). We then create a time-bound roadmap, outlining the perfect mix of audiences, platforms, and content that aligns with your brand's identity."
            imageOrientation="right"
            image="/images/sd.png"
          />
          <ImageBox
            title="Your Success is Our Success"
            description="As a global content powerhouse, we're committed to delivering exceptional results. Our team of storytellers, copywriters, media specialists, and designers work together to create a social media presence that makes your brand stand out."
            imageOrientation="left"
            image="/images/ysos.png"
          />
        </div>
        <Divider />
        <section className="rounded-4xl bg-black p-8 text-white lg:p-14">
          <h2 className="mb-4 text-4xl font-medium md:text-5xl">
            Why Choose Vertical Click’s USA?
          </h2>
          <p className="text-xl font-normal md:text-2xl">
            When you partner with us, you gain access to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg font-normal md:text-xl">
            <li>
              A young and talented team equipped with the latest tools and
              techniques
            </li>
            <li>A firm grasp of industry best practices</li>
            <li>A customized approach to social media marketing</li>
            <li>A commitment to delivering exceptional results</li>
          </ul>
        </section>
        <Divider />
        <section>
          <h2 className="mb-4 text-4xl font-medium uppercase md:text-5xl">
            Key Highlights
          </h2>
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex items-center justify-center rounded-md bg-[#8F5BFE26] p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <h3 className="text-xl font-normal text-[#8F5BFE] md:text-2xl">
                Innovative Designs
              </h3>
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#8F5BFE26] p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <h3 className="text-xl font-normal text-[#8F5BFE] md:text-2xl">
                Creative Solutions
              </h3>
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#8F5BFE26] p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <h3 className="text-xl font-normal text-[#8F5BFE] md:text-2xl">
                Social Media Expertise
              </h3>
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#8F5BFE26] p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <h3 className="text-xl font-normal text-[#8F5BFE] md:text-2xl">
                Tailored Strategies
              </h3>
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#8F5BFE26] p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <h3 className="text-xl font-normal text-[#8F5BFE] md:text-2xl">
                Global Content Powerhouse
              </h3>
            </div>
            <div className="flex items-center justify-center rounded-md bg-[#8F5BFE26] p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>

              <h3 className="text-xl font-normal text-[#8F5BFE] md:text-2xl">
                Exceptional Results
              </h3>
            </div>
          </div>
        </section>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default SMM;
