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
    <div className="mx-auto md:px-8 py-2 md:py-8 max-w-[100vw] md:max-w-[90vw] border-gray-300 overflow-hidden">
      <div className="flex flex-col justify-center mx-auto gap-4 md:gap-6 md:my-2 w-auto md:py-2 md:pt-2 md:pb-8 ">
        <div className="flex justify-center flex-col gap-1">
          <span className="bg-[#F05186] text-2xl font-medium md:text-6xl incline-block text-white text-center py-1  mx-auto px-2 md:px-4 rounded-sm">
            GOT AN IDEA?
          </span>
          <span className="text-lg md:text-4xl text-center  text-violet-600">
            Let's Work On it
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            className="border border-gray-400 py-1 md:py-2 px-2 md:px-6 rounded-sm md:w-[30%]"
            placeholder="Enter your email"
          />
          <button className="text-white md:text-md bg-violet-400 px-2  md:px-6 py-1 md:py-2 rounded-sm ">
            search
          </button>
        </div>
        <div className="flex justify-center items-center gap-1 pb-4">
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

      <div className="flex justify-between items-center flex-wrap ">
        {footerItems?.map((item, index) => {
          return (
            <div
              key={index}
              className={`px-1 md:px-4  text-xs md:text-2xl font-thin md:font-normal text-gray-600 border-gray-300 text-center  ${
                index == footerItems.length - 1 ? "" : " border-r md:border-r-2"
              } ${index == 3 ? 'flex-2' : 'flex-1'}`}
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
