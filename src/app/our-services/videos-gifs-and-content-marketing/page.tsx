import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import TextBox from "@/components/TextBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Video, GIF & Content Marketing Services | Engage & Convert",
  description:
    "Vertical Click creates high-impact videos, GIFs & content marketing strategies to boost engagement, brand awareness & drive conversions. Start growing!",
};

const VGCM = () => {
  const videoCardItems = [
    {
      title: "Amplify customer engagement",
      subtitle: "Engagement",
      msg: "Engage your audience with compelling  <br/>video content.",
      img: "/images/video-gif2/img1.png",
    },
    {
      title: "Educate audiences about your <br/> brand and business",
      subtitle: "Education",
      msg: "Provide valuable insights and information.",
      img: "/images/video-gif2/img2.png",
    },
    {
      title: "Communicate your business <br/>vision",
      subtitle: "Vision",
      msg: "Share your story and mission effectively.",
      img: "/images/video-gif2/img3.png",
    },
    {
      title: "Increase conversions",
      subtitle: "Sales",
      msg: "Drive more sales and leads with effective content.",
      img: "/images/video-gif2/img4.png",
    },
  ];

  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          title="Videos, Gifs, and Content Marketing"
          subtitle="The Key to Unlocking Your"
          pinkBgText="Brand's Potential"
        />
        <TextBox
          title="In today's digital landscape, content is king."
          description="When marketed effectively, it can propel your brand and business to
            new heights. The most popular content formats now include videos,
            GIFs, and interactive media, in addition to traditional text and
            static images."
        />
        <section className="mt-10 rounded-md bg-[#8F5BFE17] p-4 md:p-0">
          <ImageBox
            title="Our Expertise"
            description="At Vertical Click’s, a leading digital marketing agency in Delhi, our in-house team crafts unique and captivating online video content that resonates with your audience. Our social media and design experts collaborate to deliver high-quality video content that exceeds client expectations."
            image="/images/our-expertise.png"
            imageOrientation="left"
          />
        </section>
        <Divider />
        <section>
          <h2 className="text-center text-4xl font-medium uppercase md:text-5xl">
            Our website video production services:
          </h2>
          <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
            {videoCardItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mt-4 flex flex-col justify-between rounded-lg bg-[#fdeaf0] px-4 pt-4"
                >
                  <div>
                    <h3
                      className="text-xl font-semibold md:text-2xl xl:text-3xl"
                      dangerouslySetInnerHTML={{
                        __html: item.title.toUpperCase(),
                      }}
                    />
                    <p
                      className="text-md pt-1 font-sans text-gray-800 md:pt-4 md:text-lg xl:text-xl"
                      dangerouslySetInnerHTML={{ __html: item.msg }}
                    />
                  </div>

                  <div className="mx-auto">
                    <img
                      src={item.img}
                      width={100}
                      alt=""
                      className="ml-auto w-full md:w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
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
        <h2 className="mt-8 text-center text-4xl font-medium uppercase md:text-5xl">
          Partner with Vertical Click’s to unlock the full potential of your
          content marketing strategy.
        </h2>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default VGCM;
