import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const MPB = () => {
  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          title="Media Planning and Buying"
          subtitle="Media Planning and Buying: Amplifying Your"
          pinkBgText="Digital Marketing Campaign"
          description="Media planning and buying is a crucial component of a comprehensive digital marketing strategy. It enhances your content's reach and resonance with your target audience. At Vertical Click’s USA, our team leverages an extensive network of media partners to deliver immersive, integrated experiences."
        />
        <div className="flex flex-col gap-2 md:flex-row">
          <h1 className="text-4xl font-medium uppercase md:max-w-1/3 lg:text-5xl">
            Expert Media Solutions
          </h1>
          <p className="text-xl font-normal md:max-w-1/3 lg:text-2xl">
            We offer accredited communication patterns and solutions tailored to
            your requirements and target audience. Our media channels include
          </p>
          <div className="flex flex-col gap-1 md:max-w-1/3">
            <p className="border-l-2 border-[#8F5BFE] pl-4 font-normal lg:text-lg">
              Online platforms
            </p>
            <p className="border-l-2 border-[#8F5BFE] pl-4 font-normal lg:text-lg">
              Offline media
            </p>
            <p className="border-l-2 border-[#8F5BFE] pl-4 font-normal lg:text-lg">
              Niche media
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 md:flex-row">
          <h1 className="text-4xl font-medium uppercase md:max-w-1/3 lg:text-5xl">
            Results-Driven Media Campaigns
          </h1>
          <p className="text-xl font-normal md:max-w-1/3 lg:text-2xl">
            Our media team crafts effective campaigns with a strong strategy,
            optimizing client budgets for maximum ROI. We
          </p>
          <div className="flex flex-col gap-1 md:max-w-1/3">
            <p className="border-l-2 border-[#8F5BFE] pl-4 font-normal lg:text-lg">
              Conduct market research and identify target audiences
            </p>
            <p className="border-l-2 border-[#8F5BFE] pl-4 font-normal lg:text-lg">
              Pinpoint audience interests and messaging receptivity
            </p>
            <p className="border-l-2 border-[#8F5BFE] pl-4 font-normal lg:text-lg">
              Refine and improve strategies regularly
            </p>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="my-4 text-4xl font-medium uppercase md:text-5xl">
            Optimizing Media Platforms
          </h1>
          <p className="text-xl font-normal md:text-2xl">
            Our team helps you select the ideal combination of media platforms
            to effectively convey your message. On social media and online
            platforms, we boost content, run targeted ads (search, Instagram,
            Facebook, etc.), and ensure relevant keywords and engaging content.
          </p>
        </div>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default MPB;
