import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer/Footer";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing Services | Drive Engagement & Conversion.",
  description:
    "Boost sales & customer retention with Vertical Click’s email marketing services. We craft targeted campaigns that increase engagement & conversions.",
    alternates : {
      canonical : "https://verticalclick.us/our-services/email-marketing"
    }
};

function page() {
  const emailItems = [
    {
      title: "Personalized Communication",
      subtitle: "Customization",
      msg: "Personalized and branded communication that </br> aligns with your goals",
      img: "/images/email-marketing2/email-marketing1.png",
    },
    {
      title: "Visually Appealing Design",
      subtitle: "Design",
      msg: "Design that captures attention",
      img: "/images/email-marketing2/email-marketing2.png",
    },
    {
      title: "Targeted Audience Selection",
      subtitle: "Targeting",
      msg: "Targeted audience selection for maximum <br/> conversions and ROI",
      img: "/images/email-marketing2/email-marketing3.png",
    },
    {
      title: "Streamlined Delivery Process",
      subtitle: "Security",
      msg: "Secure and easy sending",
      img: "/images/email-marketing2/email-marketing4.png",
    },
    {
      title: "Crafting Compelling Subject Lines",
      subtitle: "Crafting",
      msg: "Crafting compelling subject lines that avoid spam <br/>filters",
      img: "/images/email-marketing2/email-marketing5.png",
    },
    {
      title: "Testing and Optimization",
      subtitle: "Testing",
      msg: "Testing and optimization to ensure seamless delivery",
      img: "/images/email-marketing2/email-marketing6.png",
    },
  ];
  return (
    <React.Fragment>
      <Header />
      <Container>
        <HeroSection
          title="Email Marketing"
          subtitle="Unlock the Power of Email Marketing"
          pinkBgText="Marketing with Vertical Click’s USA"
          description="A well-crafted subject line and visually appealing emailer can make all the difference in driving clicks and conversions. Email marketing offers a unique set of benefits that can help you build strong relationships with customers, reach new leads, and maintain connections with past customers."
        />
        <section className="mx-auto overflow-hidden">
          <div className="bg-[#FFFBFA] py-8">
            <h3 className="pb-4 text-center text-3xl sm:text-4xl">
              OUR SERVICES INCLUDE
            </h3>
            <p className="text-center text-sm leading-relaxed sm:text-base">
              At Vertical Click’s USA, our team of experienced marketers and
              designers can help you create effective email{" "}
              <br className="hidden sm:block" />
              marketing campaigns that resonate with your audience.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {emailItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-4 rounded-lg bg-[#feecf0] px-4 pt-2 shadow-md"
                >
                  <div>
                    <h3 className="text-xl font-semibold sm:text-lg">
                      {item.title.toUpperCase()}
                    </h3>
                    <p
                      className="mt-4 font-sans text-sm text-gray-500"
                      dangerouslySetInnerHTML={{ __html: item.msg }}
                    />
                  </div>
                  <div className="mx-auto">
                    <img src={item.img} alt="emailImage" className="w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="mx-auto mt-8 text-center text-2xl leading-tight font-medium uppercase sm:text-4xl xl:text-5xl">
            Partnering with Vertical Click’s Euless, Texas has transformed our
            business approach and significantly increased our ROI.
          </h2>
        </section>
        <Divider />
      </Container>

      <Footer />
    </React.Fragment>
  );
}

export default page;
