import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkBox from "@/components/WorkBox";
import React from "react";

const OurWorkPage = () => {
  const data = [
    {
      title: "Trueadblocker",
      url: "https://www.trueadblocker.net/",
      category: "Chrome Extension",
      tool: "Ahref",
      tableData: [
        {
          keyword: "Najlepszy adblock",
          position: 11,
          country: "Poland",
          image: "/images/our-work/Trueadblocker-polish.png",
        },
        {
          keyword: "Adblock Chrome",
          position: 10,
          country: "Poland",
          image: "/images/our-work/Trueadblocker-polish.png",
        },
        {
          keyword: "Adblock",
          position: 27,
          country: "Spanish",
          image: "/images/our-work/Trueadblocker-spanish.png",
        },
        {
          keyword: "Adblock",
          position: 22,
          country: "Korean",
          image: "/images/our-work/Trueadblocker-korean.png",
        },
        {
          keyword: "Adblock Chrome",
          position: 32,
          country: "French",
          image: "/images/our-work/Trueadblocker-french.png",
        },
        {
          keyword: "Adblock Chrome",
          position: 32,
          country: "French",
          image: "/images/our-work/Trueadblocker-french.png",
        },
      ],
    },
    {
      title: "Twitch Adblocker",
      url: "https://www.twitchadblocker.co/",
      category: "Chrome Extension",
      tableData: [
        {
          keyword: "Twitch adblock",
          position: 8,
          country: "Germany",
          image: "/images/our-work/Twitchadblocker-8.png",
        },
        {
          keyword: "Twitch adblock",
          position: 7,
          country: "Japanese",
          image: "/images/our-work/Twitchadblocker-7.png",
        },
        {
          keyword: "Twitch adblock",
          position: 9,
          country: "Spanish",
          image: "/images/our-work/Twitchadblocker-9.png",
        },
        {
          keyword: "Twitch adblock",
          position: 28,
          country: "USA",
          image: "/images/our-work/Twitchadblocker-28.png",
        },
        {
          keyword: "Twitch adblocker",
          position: 14,
          country: "USA",
          image: "/images/our-work/Twitchadblocker-14.png",
        },
        {
          keyword: "Chrome Twitch Adblock",
          position: 11,
          country: "USA",
          image: "/images/our-work/Twitchadblocker-11.png",
        },
      ],
    },
    {
      title: "Hulu Adblocker",
      url: "https://Huluablocker.net/",
      category: "Chrome Extension",
      tableData: [
        {
          keyword: "Hulu Adblocker",
          position: 15,
          country: "USA",
          image: "/images/our-work/Huluadblocker-15.png",
        },
      ],
    },
    {
      title: "Teleparty",
      url: "https://www.teleparty.pro/",
      category: "Chrome Extension",
      tableData: [
        {
          keyword: "Teleparty",
          position: 9,
          country: "USA",
          image: "/images/our-work/Teleparty.png",
        },
        {
          keyword: "Teleparty Extension",
          position: 14,
          country: "USA",
          image: "/images/our-work/Teleparty.png",
        },
      ],
    },
    {
      title: "Trippybug",
      url: "https://www.trippybug.com/",
      category: "Travel Booking Site",
      articles: [
        "https://www.trippybug.com/how-many-inches-of-snow-will-cancel-a-flight/",
      ],
      tableData: [
        {
          keyword: "do flights get cancelled for snow",
          position: 8,
          country: "USA",
          image: "/images/our-work/Trippybug-8.png",
        },
        {
          keyword: "how many inches of snow will cancel a flight",
          position: 1,
          country: "USA",
          image: "/images/our-work/Trippybug-8.png",
        },
        {
          keyword: "does snow delay flights",
          position: 6,
          country: "USA",
          image: "/images/our-work/Trippybug-8.png",
        },
      ],
    },
    {
      title: "Trippybug",
      url: "https://www.trippybug.com/",
      category: "Travel Booking Site",
      articles: ["https://www.trippybug.com/volaris-baggage-allowance/"],
      tableData: [
        {
          keyword: "do flights get cancelled for snow",
          position: 8,
          country: "USA",
          image: "/images/our-work/Trippybug-8.png",
        },
        {
          keyword: "how many inches of snow will cancel a flight",
          position: 1,
          country: "USA",
          image: "/images/our-work/Trippybug-8.png",
        },
        {
          keyword: "does snow delay flights",
          position: 6,
          country: "USA",
          image: "/images/our-work/Trippybug-8.png",
        },
        {
          keyword: "Volaris carry on weight",
          position: 12,
          country: "USA",
          image: "/images/our-work/Trippybug-12.png",
        },
        {
          keyword: "Can you bring zyns on a plane",
          position: 19,
          country: "USA",
          image: "/images/our-work/Trippybug-19.png",
        },
        {
          keyword: "What size deodorant can you bring on a plane",
          position: 20,
          country: "USA",
          image: "/images/our-work/Trippybug-20.png",
        },
        {
          keyword: "Huttopia Paradise springs",
          position: 18,
          country: "USA",
          image: "/images/our-work/Trippybug-18.png",
        },
      ],
    },
    {
      title: "Factstalks",
      url: "https://www.factstalks.com/",
      category: "Travel Booking Site",
      articles: [
        "https://factstalks.com/wcofun-tv-your-one-stop-for-all-anime-cartoon-content/",
        "https://factstalks.com/imac-pro-i7-4k-what-you-need-to-know/",
      ],
      tableData: [
        {
          keyword: "Wcofun tv",
          position: 25,
          country: "USA",
          image: "/images/our-work/Factstalk-25.png",
        },
        {
          keyword: "Imac pro i7 4k",
          position: 46,
          country: "USA",
          image: "/images/our-work/Factstalk-46.png",
        },
      ],
    },
  ];
  return (
    <main>
      <Header />
      <Container>
        <HeroSection
          subtitle="Our Work"
          description="At Vertical Click, we take pride in delivering top-tier digital
            marketing solutions that drive real results. From SEO optimization
            to social media growth, we help businesses rank higher, attract more
            customers, and scale effectively."
        />
        <div className="space-y-4">
          {data.map((item, index) => (
            <WorkBox data={item} key={index} />
          ))}
        </div>
        {/* <Divider /> */}
      </Container>
      <Footer />
    </main>
  );
};

export default OurWorkPage;
