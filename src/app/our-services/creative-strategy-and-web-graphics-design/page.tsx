import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import Highlights from "@/components/key-highlights/Highlights";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Creative Strategy & Web Graphics Design | Elevate Your Brand",
  description:
    "Vertical Click delivers innovative creative strategy & web graphics design, crafting visually stunning and conversion-driven designs to grow your brand.",
};

const CSAWGD = () => {
  return (
    <main>
      <Header />
      <Container>
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
        <section className="rounded-md bg-black p-8 text-white md:p-14">
          <h1 className="text-4xl font-medium md:text-5xl">
            Meet Our Powerhouse Team
          </h1>
          <p className="mt-5 text-lg font-normal">
            Our creative agency comprises young, talented individuals who embody
            innovation. We strive for excellence, delivering award-winning
            campaigns that speak for themselves.
          </p>
        </section>
        <Divider />
        <Highlights />
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default CSAWGD;
