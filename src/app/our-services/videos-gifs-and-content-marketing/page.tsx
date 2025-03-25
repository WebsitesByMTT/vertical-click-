import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageBox from "@/components/ImageBox";
import React from "react";

const VGCM = () => {
  const videoCardItems = [
    {
      title: "Amplify customer engagement",
      subtitle: "Engagement",
      msg: "Engage your audience with compelling  <br/>video content.",
      img: "/images/video-gif/img1.png",
    },
    {
      title: "Educate audiences about your <br/> brand and business",
      subtitle: "Education",
      msg: "Provide valuable insights and information.",
      img: "/images/video-gif/img2.png",
    },
    {
      title: "Communicate your business <br/>vision",
      subtitle: "Vision",
      msg: "Share your story and mission effectively.",
      img: "/images/video-gif/img3.png",
    },
    {
      title: "Increase conversions",
      subtitle: "Sales",
      msg: "Drive more sales and leads with effective content.",
      img: "/images/video-gif/img4.png",
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
        <section className="flex flex-col gap-8 md:flex-row">
          <h1 className="text-4xl font-medium uppercase lg:text-5xl">
            In today's digital landscape, content is king.
          </h1>
          <p className="max-w-2xl text-xl font-normal lg:text-2xl">
            When marketed effectively, it can propel your brand and business to
            new heights. The most popular content formats now include videos,
            GIFs, and interactive media, in addition to traditional text and
            static images.
          </p>
        </section>
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
          <h1 className="text-center text-4xl font-medium uppercase md:text-5xl">
            Our website video production services:
          </h1>
          <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
            {videoCardItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mt-4 flex flex-col justify-between rounded-lg bg-[#fdeaf0] px-4 pt-4"
                >
                  <div>
                    <h3
                      className="text-3xl font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: item.title.toUpperCase(),
                      }}
                    />
                    <p
                      className="pt-4 font-sans text-xl text-gray-800"
                      dangerouslySetInnerHTML={{ __html: item.msg }}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-[50%] left-[40%] mb-2 flex flex-col gap-1 rounded-lg bg-[#8F5BFE] p-4 shadow-md">
                      <h4 className="text-md font-semibold text-white">
                        {item.subtitle}
                      </h4>
                      <div className="flex gap-2">
                        <div className="rounded-xl bg-[#a478f1] px-8 py-3"></div>
                        <div className="rounded-xl bg-[#a478f1] px-8 py-3"></div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={item.img}
                        width={100}
                        alt=""
                        className="ml-auto md:w-75"
                      />
                    </div>
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
        <h1 className="mt-8 text-center text-4xl font-medium uppercase md:text-5xl">
          Partner with Vertical Click’s to unlock the full potential of your
          content marketing strategy.
        </h1>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
};

export default VGCM;
