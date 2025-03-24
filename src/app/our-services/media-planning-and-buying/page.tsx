import Divider from "@/components/Divider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const MPB = () => {
  return (
    <main>
      <Header />
      <HeroSection
        title="Media Planning and Buying"
        subtitle="Media Planning and Buying: Amplifying Your"
        pinkBgText="Digital Marketing Campaign"
        description="Media planning and buying is a crucial component of a comprehensive digital marketing strategy. It enhances your content's reach and resonance with your target audience. At Vertical Click’s USA, our team leverages an extensive network of media partners to deliver immersive, integrated experiences."
      />
      <section className="max-w-[70vw] mx-auto">
        <div className="flex">
          <h1 className="text-5xl font-medium uppercase max-w-lg">
            Expert Media Solutions
          </h1>
          <p className="text-2xl font-normal max-w-lg">
            We offer accredited communication patterns and solutions tailored to
            your requirements and target audience. Our media channels include
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-normal border-l-2 border-[#8F5BFE] pl-4">
              Online platforms
            </p>
            <p className="text-lg font-normal border-l-2 border-[#8F5BFE] pl-4">
              Offline media
            </p>
            <p className="text-lg font-normal border-l-2 border-[#8F5BFE] pl-4">
              Niche media
            </p>
          </div>
        </div>
        <div className="flex mt-10">
          <h1 className="text-5xl font-medium uppercase max-w-lg">
            Results-Driven Media Campaigns
          </h1>
          <p className="text-2xl font-normal max-w-lg">
            Our media team crafts effective campaigns with a strong strategy,
            optimizing client budgets for maximum ROI. We
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-normal border-l-2 border-[#8F5BFE] pl-4">
              Conduct market research and identify target audiences
            </p>
            <p className="text-lg font-normal border-l-2 border-[#8F5BFE] pl-4">
              Pinpoint audience interests and messaging receptivity
            </p>
            <p className="text-lg font-normal border-l-2 border-[#8F5BFE] pl-4">
              Refine and improve strategies regularly
            </p>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-medium uppercase my-4">
            Optimizing Media Platforms
          </h1>
          <p className="text-2xl font-normal">
            Our team helps you select the ideal combination of media platforms
            to effectively convey your message. On social media and online
            platforms, we boost content, run targeted ads (search, Instagram,
            Facebook, etc.), and ensure relevant keywords and engaging content.
          </p>
        </div>
        <Divider />
      </section>
    </main>
  );
};

export default MPB;
