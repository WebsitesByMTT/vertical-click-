import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer/Footer";
import Divider from "@/components/Divider";
import TextBox from "@/components/TextBox";
import Container from "@/components/Container";

import Image from "next/image";

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
      <Container>
      <HeroSection
        title="Digital Strategy & Planning"
        subtitle="Unlocking Successful Campaigns with"
        pinkBgText="Vertical Click’s Euless, Texas"
        description="A well-crafted strategy is the foundation of a successful campaign. At Vertical Click’s Euless, Texas, our team of experts leverages years of experience to develop and execute tailored strategies that drive real results for your business."
      />
      {/* <section className="max-w-[90vw] md:w-[70vw] mx-auto my-0 sm:my-4">
        <div className="py-0 sm:py-8 ">
          <h3 className="text-center text-3xl sm:text-4xl pb-4">OUR SERVICES INCLUDE</h3>
          <p className="text-center text-sm sm:text-md md:text-lg">
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
        <div className="mt-8 flex flex-col justify-between items-center gap-4 ">
          {analyticBottomContent.map((item, index) => {
            return (
              <TextBox key={index} title={item.title} description={item.msg} />
            );
          })}
        </div>
        <Divider />
      </section>  */}
      <section className="w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="py-6 sm:py-8 lg:py-12">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
          OUR SERVICES INCLUDE
        </h3>
        <p className="text-center text-sm sm:text-base md:text-lg max-w-4xl mx-auto mb-8 sm:mb-12 px-4 text-gray-600">
          At Vertical Click's USA, our team of experienced marketers and designers can help you create effective email 
          marketing campaigns that resonate with your audience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {analyticsItems.map((item, index) => (
            <div
              key={index}
              className={`
                 bg-[#f2ebff] rounded-lg flex flex-col justify-between 
                ${index === 0 || index === analyticsItems.length - 1 
                  ? "md:col-span-2" 
                  : "md:col-span-1"
                }
                transform transition-transform duration-300 hover:scale-105
              `}
            >
              <div className="mb-4 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
                  {item.title.toUpperCase()}
                </h3>
                <p
                  className="text-sm sm:text-base text-gray-600 font-sans"
                  dangerouslySetInnerHTML={{ __html: item.msg }}
                />
              </div>
              <div className="flex justify-center items-end mt-4">
                <div className="w-full max-w-[15vw] mx-auto">
                  <img
                    src={item.img}
                   
                    alt={item.title}
                    className="w-full "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

{/* <div className="flex flex-wrap gap-4 lg:gap-6">
  {analyticsItems.map((item, index) => (
    <div
      key={index}
      className={`
        bg-[#f2ebff] rounded-lg flex flex-col justify-between 
        ${index === 0 || index === analyticsItems.length - 1 
          ? "md:basis-[66%]" // 2/3 width for first and last item on medium screens
          : "md:basis-[32%]" // 1/3 width for other items
        }
        transform transition-transform duration-300 hover:scale-105
      `}
    >
      <div className="mb-4 p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">
          {item.title.toUpperCase()}
        </h3>
        <p
          className="text-sm sm:text-base text-gray-600 font-sans"
          dangerouslySetInnerHTML={{ __html: item.msg }}
        />
      </div>
      <div className="flex justify-center items-end mt-4">
        <div className="w-full max-w-[15vw] mx-auto">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  ))}
</div> */}


        <Divider  />

        <div className="space-y-4 sm:space-y-6 md:space-y-8  mx-auto">
          {analyticBottomContent.map((item, index) => (
            <TextBox 
              key={index} 
              title={item.title} 
              description={item.msg} 
            />
          ))}
        </div>

        <Divider  />
      </div>
    </section>
    </Container>
      <Footer />
    </React.Fragment>
  );
}

export default page;
