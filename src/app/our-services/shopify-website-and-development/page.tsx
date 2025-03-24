import Divider from "@/components/Divider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TextBox from "@/components/TextBox";
import React from "react";

const SWD = () => {
  return (
    <main>
      <Header />
      <HeroSection
        title="Shopify Website & Development"
        subtitle="Unlock the Power of Shopify with"
        pinkBgText="Vertical Click’s"
        description="Are you searching for a reliable Shopify website development company? Look no further! Shopify is a leading e-commerce platform that enables businesses to set up online stores, manage orders, shipping, and payments efficiently."
      />
      <TextBox
        title="Expert Shopify Website Development"
        description="At Vertical Click, our team of experts specializes in Shopify store development, providing end-to-end solutions tailored to your business needs. We analyze your business, understand your requirements, and design a store that reflects your brand."
      />
      <Divider />
      <section className="max-w-[70vw] mx-auto bg-black rounded-2xl text-white p-14">
        <h1 className="text-5xl font-medium uppercase">Why Choose Shopify?</h1>
        <p className="text-2xl font-normal mt-4">
          With Shopify, you can sell anywhere, anytime, and manage your business
          from a single dashboard. Since its inception, Shopify has empowered
          over 1 million businesses in 175 countries, generating over $200
          billion in sales.
        </p>
      </section>
      <Divider />
      <section className="max-w-[70vw] mx-auto">
        <h1 className="text-5xl font-medium uppercase">
          Our Shopify Development Services
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4 justify-center items-center content-center mt-10">
          <div className="bg-[#8F5BFE1A] rounded-md p-6">
            <p className="text-2xl font-normal text-[#8F5BFE]">
              Custom Shopify store design and development
            </p>
          </div>
          <div className="bg-[#8F5BFE1A] rounded-md p-6">
            <p className="text-2xl font-normal text-[#8F5BFE]">
              Seamless migration from other platforms to Shopify
            </p>
          </div>
          <div className="bg-[#8F5BFE1A] rounded-md p-6">
            <p className="text-2xl font-normal text-[#8F5BFE]">
              Innovative designs and creative solutions
            </p>
          </div>
          <div className="bg-[#8F5BFE1A] rounded-md p-6">
            <p className="text-2xl font-normal text-[#8F5BFE]">
              Synergy between your business and Shopify store
            </p>
          </div>
          <div className="bg-[#8F5BFE1A] rounded-md p-6 col-span-2 text-center">
            <p className="text-2xl font-normal text-[#8F5BFE]">
              State-of-the-art online store development
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <h1 className="max-w-[70vw] mx-auto text-5xl font-medium uppercase text-center mt-10">
        Partner with Vertical Click’s to unlock the full potential of Shopify
        and drive your business forward.
      </h1>
      <Divider />
    </main>
  );
};

export default SWD;
