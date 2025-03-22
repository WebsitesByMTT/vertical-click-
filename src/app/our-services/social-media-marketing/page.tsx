import Divider from "@/components/Divider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IconBox from "@/components/IconBox";
import ImageBox from "@/components/ImageBox";
import React from "react";

const SMM = () => {
  return (
    <main>
      <Header />
      <HeroSection
        title="Social Media Marketing"
        subtitle="Unlocking Your Business Potential"
        pinkBgText="with Vertical Click’s"
        description="We're confident in our ability to help you establish the business you desire. From innovative designs to creative solutions, our team is dedicated to making your business shine."
      />
      <Divider />
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
      <Divider />
      <section className="max-w-[70vw] mx-auto bg-black text-white rounded-4xl p-14">
        <h1 className="text-5xl font-medium mb-4">
          Why Choose Vertical Click’s USA?
        </h1>
        <p className="text-2xl font-normal">
          When you partner with us, you gain access to:
        </p>
        <ul className="list-disc pl-6 mt-4 text-xl space-y-2">
          <li className="text-2xl font-normal">
            A young and talented team equipped with the latest tools and
            techniques
          </li>
          <li className="text-2xl font-normal">
            A firm grasp of industry best practices
          </li>
          <li className="text-2xl font-normal">
            A customized approach to social media marketing
          </li>
          <li className="text-2xl font-normal">
            A commitment to delivering exceptional results
          </li>
        </ul>
      </section>
      <Divider />
      <section className="max-w-[70vw] mx-auto">
        <h1 className="text-5xl font-medium uppercase mb-4">Key Highlights</h1>
        <div className="flex flex-wrap justify-between gap-6">
          <div className="bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
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

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Innovative Designs
            </h1>
          </div>
          <div className="bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
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

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Creative Solutions
            </h1>
          </div>
          <div className="bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
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

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Social Media Expertise
            </h1>
          </div>
          <div className="bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
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

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Tailored Strategies
            </h1>
          </div>
          <div className="bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
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

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Global Content Powerhouse
            </h1>
          </div>
          <div className="bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
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

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Exceptional Results
            </h1>
          </div>
        </div>
      </section>
      <Divider />
    </main>
  );
};

export default SMM;
