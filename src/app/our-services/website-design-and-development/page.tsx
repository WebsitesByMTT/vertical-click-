import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import TextBox from "@/components/TextBox";
import { title } from "process";
import React from "react";

const WDD = () => {
  const ote = [
    {
      image: "/images/team-expert-1.png",
      title: "Website Design",
      description:
        "Custom website design for e-commerce and corporate websites.",
    },
    {
      image: "/images/team-expert-2.png",
      title: "Optimization",
      description:
        "Website optimization for brand awareness and lead generation.",
    },
    {
      image: "/images/team-expert-3.png",
      title: "Maintenance and Support",
      description:
        "E-commerce solutions, including shopping cart integration and payment gateways.",
    },
  ];
  return (
    <main>
      <Header />
      <Container>
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
        <section>
          <h1 className="text-4xl font-medium uppercase md:mb-4 lg:text-5xl">
            Our team of experts offers
          </h1>
          <div className="flex flex-col items-start justify-center md:flex-row">
            {ote.map((item, index) => (
              <div
                key={index}
                className="mt-2 flex flex-col md:mx-2 md:mt-0 md:w-1/3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-md md:h-60"
                />
                <h3 className="my-2 text-2xl font-bold lg:text-3xl">
                  {item.title}
                </h3>
                <p className="text-lg font-normal lg:text-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <Divider />
        <h1 className="text-center text-4xl font-medium uppercase lg:text-5xl">
          Partner with Vertical Click’s USA to unlock the full potential of your
          website and elevate your online presence.
        </h1>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default WDD;
