import Divider from "@/components/Divider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
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
        <p className="text-2xl font-normal max-w-2xl">
          When marketed effectively, it can propel your brand and business to
          new heights. The most popular content formats now include videos,
          GIFs, and interactive media, in addition to traditional text and
          static images.
        </p>
      </section>
      <section className="max-w-[70vw] mx-auto bg-[#8F5BFE17] rounded-md mt-10">
        <ImageBox
          title="Our Expertise"
          description="At Vertical Click’s, a leading digital marketing agency in Delhi, our in-house team crafts unique and captivating online video content that resonates with your audience. Our social media and design experts collaborate to deliver high-quality video content that exceeds client expectations."
          image="/images/our-expertise.png"
          imageOrientation="left"
        />
      </section>
      <Divider />
      <section className="max-w-[70vw] mx-auto">
        <h1 className="text-5xl font-medium uppercase text-center">
          Our website video production services:
        </h1>
        {/* TODO: Add content */}
      </section>
      <Divider />
      <ImageBox
        title="Our strategic approach to content creation involves"
        bulletPoints={[
          "Planning and designing effective strategies",
          "Executing plans with precision",
          "Providing guidance and inputs at every stage",
          "Building and managing social media accounts",
          "Creating engaging news content",
          "We also leverage our network of bloggers, content creators, and publications to generate buzz around your brand.",
        ]}
        image="/images/osacci.png"
        imageOrientation="right"
      />
      <h1 className="max-w-[70vw] mx-auto text-5xl font-medium uppercase text-center">
        Partner with Vertical Click’s to unlock the full potential of your
        content marketing strategy.
      </h1>
      <Divider />
    </main>
  );
};

export default VGCM;
