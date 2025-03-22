import Divider from "@/components/Divider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IconBox from "@/components/IconBox";
import TextBox from "@/components/TextBox";
import React from "react";

const SEO = () => {
  return (
    <main>
      <Header />
      <HeroSection
        title="Search Engine Optimization"
        subtitle="Unlocking Your Website's Full Potential with Our Expert"
        pinkBgText="SEO Services"
        description="In today's competitive digital landscape, standing out is crucial. At Vertical Click, we leverage the best SEO tools, strategies, and solutions to deliver tangible results for our clients."
      />
      <div className="space-y-20">
        <TextBox
          title="Transparent and Effective SEO Approach"
          description="We believe in simplicity and transparency. Our SEO journey begins with in-depth keyword research, identifying the terms and phrases your audience uses. We then strategically integrate these keywords into your website's content, meta tags, and other critical areas."
        />
        <TextBox
          title="Optimizing Your Website for Search Engines"
          description="Our team fine-tunes your website's elements, including meta titles, descriptions, headers, and image tags. This ensures search engine spiders can crawl and index your site effectively."
        />
        <TextBox
          title="Crafting Compelling Content"
          description="High-quality, engaging content is the backbone of a successful SEO strategy. Our experts create captivating content, including blogs, articles, infographics, and videos, that resonates with your audience and satisfies Google's algorithm."
        />
        <TextBox
          title="Building a Strong Backlink Profile"
          description="We employ clean link-building tactics to secure top-tier backlinks from industry leaders. This helps your site climb the search engine rankings, driving organic traffic and increasing visibility."
        />
        <TextBox
          title="Tracking Results and Improving Performance"
          description="We utilize cutting-edge tools like SERanking and Whatagraph to monitor results, track organic rankings, and refine our on-page and off-page work."
        />
      </div>
      <Divider />
      <section className="max-w-[70vw] mx-auto bg-black text-white p-14 rounded-2xl">
        <h1 className="text-5xl font-medium uppercase">
          Why Partner with Our SEO Company?
        </h1>
        <p className="text-2xl font-normal mt-4">
          Discover the benefits of teaming up with us to propel your business
          forward. We're committed to transparency and authenticity, delivering
          organic results that drive real growth.
        </p>
      </section>
      <Divider />
      {/* key benefits */}
      <section className="max-w-[70vw] mx-auto">
        <h1 className="text-5xl font-medium uppercase">Key Benefits</h1>
        <div className="flex flex-wrap justify-evenly gap-4 mt-8">
          <div className="max-w-sm bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Organic results and transparency
            </h1>
          </div>
          <div className="max-w-sm bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Proven credibility and expertise
            </h1>
          </div>
          <div className="max-w-sm bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Targeted traffic and increased conversions
            </h1>
          </div>
          <div className="max-w-sm bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Long-term SEO solutions
            </h1>
          </div>
          <div className="max-w-sm bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-[#8F5BFE] text-white m-5 p-1 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <h1 className="text-2xl font-normal text-[#8F5BFE]">
              Continuous adaptation to algorithm updates
            </h1>
          </div>
        </div>
      </section>
      <Divider />
      <div className="space-y-20">
        <TextBox
          title="Proven Credibility"
          description="Search for 'Social media agency in Delhi' or 'Digital marketing agency in Delhi' and you'll find us at the top of organic search listings. This demonstrates our expertise in driving organic traffic and achieving top rankings."
        />
        <TextBox
          title="Targeted Traffic and Conversions"
          description="Our customized SEO services attract high-intent traffic to your website, increasing conversions and ROI. Unlike paid ads, our SEO solutions deliver long-term results, providing a sustainable online presence."
        />
        <TextBox
          title="Expertise and Adaptability"
          description="As masters of digital marketing, we continuously refine your website and adapt to search engine algorithm updates. This ensures a steady flow of organic traffic and maintains your online competitiveness."
        />
      </div>
      <Divider />
    </main>
  );
};

export default SEO;
