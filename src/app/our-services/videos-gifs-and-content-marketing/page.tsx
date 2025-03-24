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
      <HeroSection
        title="Videos, Gifs, and Content Marketing"
        subtitle="The Key to Unlocking Your"
        pinkBgText="Brand's Potential"
      />
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto flex flex-col md:flex-row gap-8">
        <h1 className="text-4xl md:text-5xl font-medium uppercase">
          In today's digital landscape, content is king.
        </h1>
        <p className="text-xl md:text-2xl font-normal max-w-2xl">
          When marketed effectively, it can propel your brand and business to
          new heights. The most popular content formats now include videos,
          GIFs, and interactive media, in addition to traditional text and
          static images.
        </p>
      </section>
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto bg-[#8F5BFE17] rounded-md mt-10 p-4 md:p-0">
        <ImageBox
          title="Our Expertise"
          description="At Vertical Click’s, a leading digital marketing agency in Delhi, our in-house team crafts unique and captivating online video content that resonates with your audience. Our social media and design experts collaborate to deliver high-quality video content that exceeds client expectations."
          image="/images/our-expertise.png"
          imageOrientation="left"
        />
      </section>
      <Divider />
      <section className="max-w-[90vw] md:max-w-[70vw] mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium uppercase text-center">
          Our website video production services:
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mx-auto">
          {videoCardItems.map((item, index) => {
            return (
              <div
                key={index}
                className="pt-4 flex flex-col justify-between px-4 mt-4 bg-[#fdeaf0]  rounded-lg"
              >
                <div>
                  <h3
                    className="text-3xl font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: item.title.toUpperCase(),
                    }}
                  />
                  <p
                    className=" text-xl text-gray-800 font-sans pt-4"
                    dangerouslySetInnerHTML={{ __html: item.msg }}
                  />
                </div>
                <div className="relative  ">
                  <div className="absolute left-[40%] top-[50%] flex flex-col gap-1 mb-2 p-4 bg-[#8F5BFE] shadow-md rounded-lg">
                    <h4 className="text-white font-semibold text-md">
                      {item.subtitle}
                    </h4>
                    <div className="flex gap-2 ">
                      <div className="px-8 py-3 bg-[#a478f1] rounded-xl"></div>
                      <div className="px-8 py-3 bg-[#a478f1] rounded-xl"></div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={item.img}
                      width={100}
                      alt=""
                      className=" md:w-75 ml-auto"
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
      <h1 className="max-w-[90vw] md:max-w-[70vw] mx-auto text-4xl md:text-5xl font-medium uppercase text-center mt-8 md:mt-0">
        Partner with Vertical Click’s to unlock the full potential of your
        content marketing strategy.
      </h1>
      <Divider />
      <Footer />
    </main>
  );
};

export default VGCM;
