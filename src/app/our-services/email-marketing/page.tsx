import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer/Footer";
import Divider from "@/components/Divider";
import Container from "@/components/Container";

function page() {
  const emailItems = [
    {
      title: "Personalized Communication",
      subtitle: "Customization",
      msg: "Personalized and branded communication that </br> aligns with your goals",
      img: "/images/video-gif/img1.png",
    },
    {
      title: "Visually Appealing Design",
      subtitle: "Design",
      msg: "Design that captures attention",
      img: "/images/video-gif/img2.png",
    },
    {
      title: "Targeted Audience Selection",
      subtitle: "Targeting",
      msg: "Targeted audience selection for maximum <br/> conversions and ROI",
      img: "/images/video-gif/img3.png",
    },
    {
      title: "Streamlined Delivery Process",
      subtitle: "Security",
      msg: "Secure and easy sending",
      img: "/images/video-gif/img4.png",
    },
  ];

  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          title="Digital Strategy & Planning"
          subtitle="Unlocking Successful Campaigns with"
          pinkBgText="Vertical Click’s Euless, Texas"
          description="A well-crafted strategy is the foundation of a successful campaign. At Vertical Click’s Euless, Texas, our team of experts leverages years of experience to develop and execute tailored strategies that drive real results for your business."
        />
        <section className=" my-4">
          <div className="py-8 bg-[#FFFBFA]">
            <h3 className="text-center text-4xl pb-4">OUR SERVICES INCLUDE</h3>
            <p className="text-center">
              At Vertical Click’s USA, our team of experienced marketers and
              designers can help you create effective email <br /> marketing
              campaigns that resonate with your audience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
              {emailItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-xl pt-4 px-4 relative mt-4 bg-[#feecf0] gap-2 flex flex-col justify-between rounded-md"
                  >
                    <div>
                      <h3 className="text-2xl">{item.title.toUpperCase()}</h3>
                      <p
                        className="translate-y-6 text-sm text-gray-500 font-sans"
                        dangerouslySetInnerHTML={{ __html: item.msg }}
                      />
                    </div>
                    <div className="flex justify-around items-end gap-6">
                      <div className="flex flex-col gap-1 mb-2 p-2 bg-gray-100 shadow-md rounded-md">
                        <h4 className="text-purple-600 font-semibold text-sm">
                          {item.subtitle}
                        </h4>
                        <div className="flex gap-2 ">
                          <div className="px-8 py-3 bg-gray-200 rounded-xl"></div>
                          <div className="px-8 py-3 bg-gray-200 rounded-xl"></div>
                        </div>
                      </div>
                      <div>
                        <img
                          src={item.img}
                          //   height={100}
                          alt=""
                          className=" md:size-50"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <h1 className=" text-3xl md:text-5xl mt-8 font-medium uppercase text-center">
          Partnering with Vertical Click’s Euless, Texas has transformed our
          business approach and significantly increased our ROI.
        </h1>
        <Divider />
      </Container>
      <Footer />
    </main>
  );
}

export default page;
