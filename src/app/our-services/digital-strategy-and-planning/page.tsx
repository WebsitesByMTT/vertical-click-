import React from "react";
import HeroSection from "@/components/HeroSection";
import IconBox from "@/components/IconBox";
import ImageBox from "@/components/ImageBox";

const DSAP = () => {
  return (
    <main>
      {/* hero section */}
      <HeroSection
        title="Digital Strategy & Planning"
        subtitle="Unlocking Successful Campaigns with"
        pinkBgText="Vertical Click’s Euless, Texas"
        description="A well-crafted strategy is the foundation of a successful campaign. At Vertical Click’s Euless, Texas, our team of experts leverages years of experience to develop and execute tailored strategies that drive real results for your business."
      />
      {/* divider */}
      <div className="max-w-[70vw] mx-auto h-0.5 bg-gray-200 my-10" />
      <ImageBox
        title="Our Approach to Digital Strategy & Planning"
        description="We're dedicated to growing your brand and increasing revenue through
            our digital strategies. Our approach combines creativity, technical
            expertise, and data-driven insights to help you achieve your digital
            goals."
        image="/images/strat-and-plan.png"
        imageOrientation="right"
      />
      <ImageBox
        title="Key Principles"
        image="/images/key-principles.png"
        bulletPoints={[
          "Creativity and technical expertise in equal measure",
          "Data-driven decision making",
          "Realistic, achievable, and measurable plans",
          "Immersive and unforgettable audience experiences",
          "Startup to multinational company, we've got you covered",
        ]}
        imageOrientation="left"
      />
      {/* divider */}
      <div className="max-w-[70vw] mx-auto h-0.5 bg-gray-200 my-10" />
      {/* Our Team of Experts */}
      <section className="max-w-[70vw] mx-auto">
        <h1 className="text-5xl font-medium uppercase">Our Team of Experts</h1>
        <h3 className="text-2xl font-normal">
          Our young, creative, and highly experienced teams specialize in:
        </h3>
        <div className="flex justify-center gap-6 mt-10">
          {/* icon box */}
          <IconBox
            title="Social, design, and digital planning"
            icon={
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
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            }
          />
          <IconBox
            title="Website development for seamless user experiences"
            icon={
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
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            }
          />
          <IconBox
            title="Paid media and business strategies for maximum ROI"
            icon={
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
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            }
          />
        </div>
      </section>
      {/* divider */}
      <div className="max-w-[70vw] mx-auto h-0.5 bg-gray-200 my-10" />
      <h1 className="max-w-[70vw] mx-auto text-5xl font-medium uppercase text-center">
        Partnering with Vertical Click’s Euless, Texas has transformed our
        business approach and significantly increased our ROI.
      </h1>
      {/* divider */}
      <div className="max-w-[70vw] mx-auto h-0.5 bg-gray-200 my-10" />
    </main>
  );
};

export default DSAP;
