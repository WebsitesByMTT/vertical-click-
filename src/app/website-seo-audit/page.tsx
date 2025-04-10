import React from "react";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/HeroSection";
import TextBox from "@/components/TextBox";
import SeoAuditForm from "@/components/SeoAuditForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit | Improve SEO & Boost Performance.",
  description:
    "Get a free website audit from Vertical Click! Identify SEO issues, optimize performance & enhance user experience to grow your online presence.",
  alternates: {
    canonical: "https://verticalclick.us/website-seo-audit"
  },
  openGraph : {
    title : "Free Website Audit | Improve SEO & Boost Performance.",
    description : "Get a free website audit from Vertical Click! Identify SEO issues, optimize performance & enhance user experience to grow your online presence.",
    url : "https://verticalclick.us/website-seo-audit",
    type : 'website',
    images : [
      {
        url : 'https://verticalclick.us/logo.svg',
        height : 630,
        width : 1200,
        alt : 'Vertical Click'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit | Improve SEO & Boost Performance.",
    description: "Get a free website audit from Vertical Click! Identify SEO issues, optimize performance & enhance user experience to grow your online presence.",
    images: ["https://verticalclick.us/logo.svg"],
  },
};

const audits = [
  {
    title: "Website Audit",
    desc: "Examine your website's architecture, indexing, SEO-friendliness, and design to enhance its image in search engines.",
    imgLink: "/icons/audits/icon1.svg",
  },
  {
    title: "SEO Audit",
    desc: "Receive a technical, on-page, and off-page SEO audit to improve page speed, crawlability, keyword research, and content quality.",
    imgLink: "/icons/audits/icon2.svg",
  },
  {
    title: "Social Media Audit",
    desc: "Optimize your social media profiles across platforms for consistency, user experience, and relevance.",
    imgLink: "/icons/audits/icon3.svg",
  },
  {
    title: "Website Content Audit",
    desc: "Evaluate your content's relevance, helpfulness, and detail to ensure it ranks high on Google SERPs.",
    imgLink: "/icons/audits/icon4.svg",
  },
  {
    title: "SEM Audit",
    desc: "Analyze your paid ads' effectiveness, targeting, and campaign settings to maximize results.",
    imgLink: "/icons/audits/icon5.svg",
  },
  {
    title: "UI/UX Audit",
    desc: "Enhance your website's user experience and brand relevance with a comprehensive UI/UX audit.",
    imgLink: "/icons/audits/icon6.svg",
  },
  {
    title: "CRO Audit",
    desc: "Identify key conversion actions, examine user behavior, and run A/B testing to optimize conversion rates.",
    imgLink: "/icons/audits/icon7.svg",
  },
];
function WSA() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {/* <div className="h-10"></div> */}
        <section className="mx-auto my-5 flex w-full flex-col items-center justify-center">
          <h2 className="mt-4 text-center text-3xl font-bold uppercase md:mt-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Detailed Website Audit for
          </h2>
          <h2 className="mb-4 rounded-md bg-[#F05186] px-2 text-center text-2xl font-bold text-white uppercase md:mb-10 md:text-4xl lg:text-3xl ">
            Optimized Conversions
          </h2>
        </section>
        <SeoAuditForm />
        <Divider />
        <div className="w-full flex flex-col lg:flex-row justify-between items-center md:py-4">
          <img src="/images/seo-audit/seo_audit.webp" alt="" className="w-120 rounded-lg" />
          <p className="max-w-4xl text-center text-md py-8 md:px-8 mx-auto font-normal lg:text-lg">Delivering an exceptional user experience is crucial for retaining and re-engaging website visitors. By leveraging Vertical Click’s complimentary SEO audit, our experts can help you uncover innovative strategies to enhance your online presence.
            A comprehensive SEO audit enables you to pinpoint areas for improvement, discover new techniques to elevate your search engine rankings, and resolve ongoing SEO issues that may be hindering your site's performance, ultimately paving the way for increased organic traffic.</p>
        </div>

        <Divider />
        <TextBox
          title="Optimize Your Online Presence with Vertical Click Expert Analysis"
          description="Even with a talented team, your online marketing strategy may have gaps that hinder growth. As digital marketing techniques evolve, it's crucial to stay updated and ahead of the competition. Vertical Click complimentary website audit identifies areas for improvement in your brand's online presence, providing analytics-driven insights to inform strategic recommendations. Our comprehensive approach includes"
        />
        <Divider />
        <section>
          <div>
            <h3 className="pb-4 text-4xl font-medium uppercase lg:text-5xl">
              Unlock Your Business's Growth Potential with Our Free Website
              Audit
            </h3>
            <p className="font-sans text-xl font-normal text-gray-600 lg:text-2xl">
              Discover areas for improvement and optimize your online presence
              with our comprehensive website audit. Our free audit covers seven
              key areas:
            </p>
          </div>
          <div className="mx-auto md:px-4">
            {audits.map((item, index) => {
              return (
                <div
                  key={index}
                  className="my-4 flex space-x-8 rounded-xl bg-[#f4efff] p-4 md:p-8"
                >
                  <div>
                    <img src={item.imgLink} alt="" className="w-24 md:w-12" />
                  </div>
                  <div>
                    <h6 className="text-lg text-[#8F5BFE] md:text-2xl">
                      {item.title}
                    </h6>
                    <p className="md:text-md text-sm text-[#8F5BFE]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <Divider />
        <section className="rounded-md bg-black p-8 text-white md:p-14">
          <h2 className="text-4xl font-medium md:text-5xl">
            Why Partner with Vertical Click for Your Audit Needs?
          </h2>
          <p className="mt-5 text-lg font-normal">
            To outshine your competitors and win over customers, a thorough
            analysis of your digital marketing channels is crucial. Vertical
            Click excels in providing:
          </p>
          <p className="mt-5 ml-2 text-lg font-normal">
            - Data-driven insights to pinpoint areas for improvement
            <br />
            - Tailored solutions addressing specific challenges
            <br />
            - Strategic recommendations for enhanced online presence
            <br />
            - Clear goal-setting for measurable outcomes
            <br />
            - Enhanced user experience for improved website performance and lead
            generation
            <br />- Comprehensive support for a seamless digital experience
          </p>
          <p className="mt-5 text-lg font-normal">
            By choosing Vertical Click, you'll gain a competitive edge and
            unlock opportunities for growth and success.
          </p>
        </section>
        <Divider />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default WSA;
