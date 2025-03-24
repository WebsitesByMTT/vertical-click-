import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import Highlights from "@/components/key-highlights/Highlights";
import React from "react";

const CSAWGD = () => {
  return (
    <main>
      <Header />
      <HeroSection
        title="Creative Strategy and Web Graphics Design"
        subtitle="Unlocking Creative Excellence at"
        pinkBgText="Vertical Click’s"
        description='At Vertical Click’s, creativity is woven into our DNA. Every team member is handpicked for their unique spark, bringing a distinctive perspective to the table. When crafting campaigns or creatives, we prioritize the "why" over the "how," ensuring a 360-degree approach that yields remarkable results.'
      />
      <ImageBox
        title="Our Strategizing Process"
        description="We focus on individual campaign objectives, tailoring our approach to achieve the desired outcomes. Every element must serve two purposes: functionality and engagement. Our team stays ahead of the curve, setting trends rather than following them."
        image="/images/osp.png"
        imageOrientation="right"
      />
      <Divider />
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto bg-black text-white p-8 md:p-14 rounded-md">
        <h1 className="text-4xl md:text-5xl font-medium">
          Meet Our Powerhouse Team
        </h1>
        <p className="text-lg font-normal mt-5">
          Our creative agency comprises young, talented individuals who embody
          innovation. We strive for excellence, delivering award-winning
          campaigns that speak for themselves.
        </p>
      </section>
      <Divider />
      <Highlights />
      <Divider />
      <Footer />
    </main>
  );
};

export default CSAWGD;
