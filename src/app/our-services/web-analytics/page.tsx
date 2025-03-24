import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer/Footer";
import Divider from "@/components/Divider";
import TextBox from "@/components/TextBox";

function page() {
  const analyticsItems = [
    {
      title: "Data Collection",
      msg: "Collecting comprehensive web data for analysis.",
      img: "/images/web-analytics/img1.png",
    },
    {
      title: "Expert Insights",
      msg: "Providing expert analysis to inform strategies.",
      img: "/images/web-analytics/img2.png",
    },
    {
      title: "Transparent Reporting",
      msg: "Regular updates on campaign performance.",
      img: "/images/web-analytics/img3.png",
    },
    {
      title: "Continuous Improvement",
      msg: "Commitment to optimizing strategies.",
      img: "/images/web-analytics/img4.png",
    },
  ];

  const analyticBottomContent = [
    {
      title: "The Power of Analytics",
      msg: "Analytics play a vital role in our campaigns, helping us strategize and create plans that drive results. By regularly analyzing user behavior, likes, and dislikes, we optimize our plans to deliver the best possible outcomes and ROI.",
    },
    {
      title: "Transparent Reporting and Updates",
      msg: "We provide clients with regular updates on campaign performance, as well as a comprehensive monthly social media report that analyzes key metrics and outlines future strategies.",
    },
    {
      title: "Continuous Improvement",
      msg: "Our team regularly reviews and updates our strategy to ensure we're meeting targets within the defined timeframe. This commitment to continuous improvement enables us to deliver exceptional results and drive business growth.",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <HeroSection
        title="Digital Strategy & Planning"
        subtitle="Unlocking Successful Campaigns with"
        pinkBgText="Vertical Click’s Euless, Texas"
        description="A well-crafted strategy is the foundation of a successful campaign. At Vertical Click’s Euless, Texas, our team of experts leverages years of experience to develop and execute tailored strategies that drive real results for your business."
      />
      <section className="max-w-[90vw] md:w-[70vw] mx-auto  my-4">
        <div className="py-8 ">
          <h3 className="text-center text-4xl pb-4">OUR SERVICES INCLUDE</h3>
          <p className="text-center">
            At Vertical Click’s USA, our team of experienced marketers and
            designers can help you create effective email <br /> marketing
            campaigns that resonate with your audience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto auto-rows-fr">
            {analyticsItems.map((item, index) => (
              <div
                key={index}
                className={`pt-4 px-4 relative mt-4 bg-[#f2ebff] gap-2 flex flex-col justify-between rounded-md 
            ${
              index === 0 || index === analyticsItems.length - 1
                ? "md:col-span-2"
                : "md:col-span-1"
            }`}
              >
                <div>
                  <h3 className="text-2xl">{item.title.toUpperCase()}</h3>
                  <p
                    className="translate-y-6 text-sm text-gray-500 font-sans"
                    dangerouslySetInnerHTML={{ __html: item.msg }}
                  />
                </div>
                <div className="flex justify-around items-end gap-6">
                  <div>
                    <img
                      src={item.img}
                      width={100}
                      alt=""
                      className="md:w-100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <div className="mt-8 flex flex-col justify-between items-center gap-4">
          {analyticBottomContent.map((item, index) => {
            return (
              <TextBox key={index} title={item.title} description={item.msg} />
            );
          })}
        </div>
        <Divider />
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default page;
