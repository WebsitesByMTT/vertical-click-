import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer/Footer";
import Divider from "@/components/Divider";
import TextBox from "@/components/TextBox";
import Container from "@/components/Container";

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
          title="Web Analytics"
          subtitle="Data-Driven Marketing: The Key to "
          pinkBgText="Unlocking Success"
          description="At Vertical Click’s, we believe that data-driven marketing is the most effective way to ensure campaign success. Our approach involves not only executing strategies but also meticulously analyzing the results."
        />
        <section className="mx-auto my-0 sm:my-4">
          <div className="py-0 sm:py-8">
            <h3 className="pb-4 text-center text-3xl sm:text-4xl">
            EXPERT ANALYSIS AND INSIGHTS
            </h3>
            <p className="sm:text-md text-center text-sm md:text-lg">
            Our business and media teams are experts in measuring, collecting, reporting, and analyzing web data, usage, and <br/> analytics. This expertise enables us to optimize web usage and inform future strategies.
            </p>

            <div className="mx-auto grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {analyticsItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative mt-4 flex flex-col justify-between rounded-md bg-[#f2ebff] ${
                    index === 0 || index === analyticsItems.length - 1
                      ? "lg:col-span-2"
                      : "lg:col-span-1"
                  }`}
                >
                  <div className="px-4 pt-4">
                    <h3 className="text-2xl xl:text-3xl">
                      {item.title.toUpperCase()}
                    </h3>
                    <p
                      className="font-sans text-sm text-gray-500 xl:text-lg"
                      dangerouslySetInnerHTML={{ __html: item.msg }}
                    />
                  </div>

                  <img
                    src={item.img}
                    width={500}
                    height={500}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <div className="mt-8 flex flex-col items-center justify-between gap-4">
            {analyticBottomContent.map((item, index) => {
              return (
                <TextBox
                  key={index}
                  title={item.title}
                  description={item.msg}
                />
              );
            })}
          </div>
          <Divider />
        </section>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default page;
