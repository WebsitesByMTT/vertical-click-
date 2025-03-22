import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import React from "react";

const VGCM = () => {
  return (
    <main>
      <Header />
      <HeroSection
        title="Videos, Gifs, and Content Marketing"
        subtitle="The Key to Unlocking Your"
        pinkBgText="Brand's Potential"
      />
      <section className="max-w-[70vw] mx-auto flex gap-8">
        <h1 className="text-5xl font-medium uppercase">
          In today's digital landscape, content is king.
        </h1>
        <p className="text-2xl font-normal max-w-xl">
          When marketed effectively, it can propel your brand and business to
          new heights. The most popular content formats now include videos,
          GIFs, and interactive media, in addition to traditional text and
          static images.
        </p>
      </section>
    </main>
  );
};

export default VGCM;
