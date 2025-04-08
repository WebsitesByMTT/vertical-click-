import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TextBox from "@/components/TextBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shopify Website Development | Custom Shopify Store Solutions",
  description:
    "Get a high-performing Shopify store with Vertical Click’s expert development services. We design, optimize & scale your eCommerce business for success.",
    alternates : {
      canonical : "https://verticalclick.us/our-services/shopify-website-and-development"
    }
};

const SWD = () => {
  return (
    <main>
      <Header />
      <Container>
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
        <section className="rounded-2xl bg-black p-6 text-white lg:p-14">
          <h2 className="text-4xl font-medium uppercase md:text-5xl">
            Why Choose Shopify?
          </h2>
          <p className="mt-4 text-xl font-normal md:text-2xl">
            With Shopify, you can sell anywhere, anytime, and manage your
            business from a single dashboard. Since its inception, Shopify has
            empowered over 1 million businesses in 175 countries, generating
            over $200 billion in sales.
          </p>
        </section>
        <Divider />
        <section>
          <h2 className="text-4xl font-medium uppercase md:text-5xl">
            Our Shopify Development Services
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 content-center items-center justify-center gap-4 md:grid-cols-2">
            <div className="rounded-md bg-[#8F5BFE1A] p-6">
              <p className="text-2xl font-normal text-[#8F5BFE]">
                Custom Shopify store design and development
              </p>
            </div>
            <div className="rounded-md bg-[#8F5BFE1A] p-6">
              <p className="text-2xl font-normal text-[#8F5BFE]">
                Seamless migration from other platforms to Shopify
              </p>
            </div>
            <div className="rounded-md bg-[#8F5BFE1A] p-6">
              <p className="text-2xl font-normal text-[#8F5BFE]">
                Innovative designs and creative solutions
              </p>
            </div>
            <div className="rounded-md bg-[#8F5BFE1A] p-6">
              <p className="text-2xl font-normal text-[#8F5BFE]">
                Synergy between your business and Shopify store
              </p>
            </div>
            <div className="rounded-md bg-[#8F5BFE1A] p-6 text-center md:col-span-2">
              <p className="text-2xl font-normal text-[#8F5BFE]">
                State-of-the-art online store development
              </p>
            </div>
          </div>
        </section>
        <Divider />
        <h2 className="mt-10 text-center text-4xl font-medium uppercase md:text-5xl">
          Partner with Vertical Click’s to unlock the full potential of Shopify
          and drive your business forward.
        </h2>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default SWD;
