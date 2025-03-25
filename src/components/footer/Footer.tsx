import React from "react";
import Image from "next/image";
import InstaIcon from "@/assets/images/instaIcon.png";
import FacebookIcon from "@/assets/images/facebookIcon.png";
import TweetIcon from "@/assets/images/tweetIcon.png";

function Footer() {
  const footerItems = [
    "Explor",
    "Our Blogs",
    "Our Work",
    "Website Seo Audit",
    "Get in Touch",
    "Work with us",
  ];

  return (
    <div className="mx-auto max-w-[100vw] overflow-hidden border-gray-300 py-2 md:max-w-[90vw] md:px-8 md:py-8">
      <div className="mx-auto flex w-auto flex-col justify-center gap-4 md:my-2 md:gap-6 md:py-2 md:pt-2 md:pb-8">
        <div className="flex flex-col justify-center gap-1">
          <span className="incline-block mx-auto rounded-sm bg-[#F05186] px-2 py-1 text-center text-2xl font-medium text-white md:px-4 md:text-6xl">
            GOT AN IDEA?
          </span>
          <span className="text-center text-lg text-violet-600 md:text-4xl">
            Let's Work On it
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            className="rounded-sm border border-gray-400 px-2 py-1 md:w-[30%] md:px-6 md:py-2"
            placeholder="Enter your email"
          />
          <button className="md:text-md rounded-sm bg-violet-400 px-2 py-1 text-white md:px-6 md:py-2">
            search
          </button>
        </div>
        <div className="flex items-center justify-center gap-1 pb-4">
          <Image
            src={FacebookIcon}
            height={100}
            width={100}
            alt="Facebook"
            className="w-8 md:w-12"
          ></Image>
          <Image
            src={InstaIcon}
            height={100}
            width={100}
            alt="Facebook"
            className="w-8 md:w-12"
          ></Image>
          <Image
            src={TweetIcon}
            height={100}
            width={100}
            alt="Facebook"
            className="w-8 md:w-12"
          ></Image>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        {footerItems?.map((item, index) => {
          return (
            <div
              key={index}
              className={`border-gray-300 px-1 text-center text-xs font-thin text-gray-600 md:px-4 md:text-2xl md:font-normal ${
                index == footerItems.length - 1 ? "" : "border-r md:border-r-2"
              } ${index == 3 ? "flex-2" : "flex-1"}`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
