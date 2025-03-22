import Divider from "@/components/Divider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import TextBox from "@/components/TextBox";
import React from "react";

const WDD = () => {
  return (
    <main>
      <Header />
      <HeroSection
        title="Website Design and Development"
        subtitle="Welcome to Vertical Click’s USA:"
        pinkBgText="Where Imagination Meets Creativity"
        description="We're a team of innovative thinkers who push boundaries to create unforgettable digital experiences. Our mission is to design websites that truly work for your business, driving real results and leaving a lasting impression on your customers."
      />
      <ImageBox
        title="Expert Website Design Services"
        description="Custom website design for e-commerce and corporate websites."
        imageOrientation="right"
        image="/images/ewds.png"
      />
      <TextBox
        title="The Power of Website Design"
        description="In today's digital landscape, your website is often the first point of contact with your audience. It plays a crucial role in shaping consumer perceptions and influencing buying behavior."
      />
      <Divider />
      <section className="max-w-[70vw] mx-auto">
        <h1 className="text-5xl font-medium uppercase">
          Our team of experts offers
        </h1>
        <div className="flex justify-center items-start">
          <div className="flex flex-col w-1/3 m-4">
            <img src="/images/example.png" alt="" className="w-full" />
            <h3 className="text-3xl font-bold">Website Design</h3>
            <p className="text-2xl font-normal">
              Custom website design for e-commerce and corporate websites.
            </p>
          </div>
          <div className="flex flex-col w-1/3 m-4">
            <img src="/images/example.png" alt="" className="w-full" />
            <h3 className="text-3xl font-bold">Optimization</h3>
            <p className="text-2xl font-normal">
              Website optimization for brand awareness and lead generation.
            </p>
          </div>
          <div className="flex flex-col w-1/3 m-4">
            <img src="/images/example.png" alt="" className="w-full" />
            <h3 className="text-3xl font-bold">E-commerce Solutions</h3>
            <p className="text-2xl font-normal">
              E-commerce solutions, including shopping cart integration and
              payment gateways.
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <h1 className="max-w-[70vw] mx-auto text-5xl font-medium uppercase text-center">
        Partner with Vertical Click’s USA to unlock the full potential of your
        website and elevate your online presence.
      </h1>
      <Divider />
    </main>
  );
};

export default WDD;
