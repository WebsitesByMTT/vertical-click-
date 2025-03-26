import React from "react";
import HeroSection from "@/components/HeroSection";
import IconBox from "@/components/IconBox";
import ImageBox from "@/components/ImageBox";
import Header from "@/components/Header";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Strategy & Planning | Data-Driven Marketing Solutions.",
  description:
    "Optimize your business with Vertical Click’s digital strategy & planning services. We create data-driven marketing plans for growth, visibility & success!",
};

const DSAP = () => {
  return (
    <main>
      <Header />
      <Container>
        {/* hero section */}
        <HeroSection
          title="Digital Strategy & Planning"
          subtitle="Unlocking Successful Campaigns with"
          pinkBgText="Vertical Click’s Euless, Texas"
          description="A well-crafted strategy is the foundation of a successful campaign. At Vertical Click’s Euless, Texas, our team of experts leverages years of experience to develop and execute tailored strategies that drive real results for your business."
        />
        <Divider />
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
        <Divider />
        {/* Our Team of Experts */}
        <section className="mx-auto max-w-[90vw] md:max-w-[70vw]">
          <h1 className="text-4xl font-medium uppercase md:text-5xl">
            Our Team of Experts
          </h1>
          <h3 className="text-xl font-normal md:text-2xl">
            Our young, creative, and highly experienced teams specialize in:
          </h3>
          <div className="mt-10 grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  className="m-5 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
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
                  className="m-5 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
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
                  className="m-5 size-10 rounded-md bg-[#8F5BFE] p-1 text-white"
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
        <Divider />
        <h1 className="mx-auto max-w-[90vw] text-center text-3xl font-medium uppercase md:max-w-[70vw] md:text-5xl">
          Partnering with Vertical Click’s Euless, Texas has transformed our
          business approach and significantly increased our ROI.
        </h1>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default DSAP;
