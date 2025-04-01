import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Game Development Services | Custom Game Solutions",
  description:
    "Elevate your gaming vision with our custom game development services. We create immersive, high-performance games for mobile, PC, and consoles.",
};

const GameDevPage = () => {
  const data: {
    title: string;
    desc: string;
    image: string;
    orientation: "left" | "right";
  }[] = [
    {
      title: "Game Concept & Planning",
      desc: "We start with brainstorming ideas, research, and storyboarding to create a unique and engaging game concept.",
      image: "/images/game-development/img1.png",
      orientation: "right",
    },
    {
      title: "Game Design & Development",
      desc: "Our skilled game designers, developers, and artists craft an immersive gameplay experience using cutting-edge technology like Unity, Unreal Engine, and Godot.",
      image: "/images/game-development/img2.png",
      orientation: "left",
    },
    {
      title: "Testing & Quality Assurance",
      desc: "We ensure bug-free performance through rigorous game testing, optimization, and debugging before launch.",
      image: "/images/game-development/img3.png",
      orientation: "right",
    },
    {
      title: "Game Launch & Marketing",
      desc: "Our digital marketing expertise helps promote your game across app stores, social media, and gaming platforms to reach the right audience.",
      image: "/images/game-development/img4.png",
      orientation: "left",
    },
    {
      title: "Post-Launch Support & Updates",
      desc: "We offer continuous updates, improvements, and technical support to keep your game running smoothly.",
      image: "/images/game-development/img5.png",
      orientation: "right",
    },
  ];
  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          title="game development"
          subtitle="Bringing Your Gaming Vision to Life"
          pinkBgText="with Expert Game Development"
          description="In today’s digital age, gaming has become a multi-billion-dollar industry, and having a well-designed, engaging, and high-performance game is essential for success. At Vertical Click, we offer professional game development services in Euless, Texas, USA, catering to businesses, startups, and gaming enthusiasts looking to create immersive gaming experiences."
        />
        <section className="rounded-2xl bg-black p-8 text-white md:p-16">
          <h2 className="mb-4 text-4xl font-medium uppercase lg:text-5xl">
            Why Choose Vertical Click for Game Development?
          </h2>
          <p className="mb-4 font-sans text-lg font-normal md:text-xl lg:text-2xl">
            As a leading game development company in Euless, TX, we specialize
            in creating high-quality, interactive, and scalable games for
            multiple platforms, including PC, mobile, and console. Our expert
            developers and designers bring your game ideas to life, ensuring
            stunning visuals, smooth gameplay, and exceptional user experience.
          </p>
          <ul className="font-sans text-lg font-normal md:text-xl lg:text-2xl">
            <li>Our Game Development Expertise</li>
            <li>✅ Mobile Game Development (iOS & Android)</li>
            <li>✅ Multiplayer & Online Game Development</li>
            <li>✅ Game UI/UX Design & Animation</li>
          </ul>
        </section>
        <Divider />
        {/* Our Game Development Process */}
        <section>
          <h2 className="mb-4 text-center text-5xl font-bold uppercase lg:text-6xl xl:text-7xl">
            Our Game Development Process
          </h2>
          <div className="space-y-8">
            {data.map((item, index) => (
              <ImageBox
                key={index}
                title={item.title}
                description={item.desc}
                image={item.image}
                imageOrientation={item.orientation}
              />
            ))}
          </div>
        </section>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default GameDevPage;
