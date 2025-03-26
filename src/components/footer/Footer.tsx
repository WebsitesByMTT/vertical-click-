import React from "react";
import Image from "next/image";
import InstaIcon from "@/assets/images/instaIcon.png";
import FacebookIcon from "@/assets/images/facebookIcon.png";
import TweetIcon from "@/assets/images/tweetIcon.png";
import Link from "next/link";

function Footer() {
  const footerItems = [
    "Explore",
    "Our Blogs",
    "Our Work",
    "Website Seo Audit",
    "Get in Touch",
    "Work with us",
  ];

  const SocialIcons = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      link: "https://www.facebook.com/VerticalClick",
    },
    {
      name: "Instagram",
      icon: InstaIcon,
      link: "https://www.instagram.com/vertical_click",
    },
    {
      name: "Tweeter",
      icon: TweetIcon,
      link: "https://www.linkedin.com/in/vertical-click-b34110349",
    },
  ];

  return (
    <footer className="mx-auto overflow-hidden border-gray-300 py-2 md:px-8 md:py-8">
      <div className="mx-auto flex w-auto flex-col justify-center gap-4 md:my-2 md:gap-6 md:py-2 md:pt-2 md:pb-8">
        <div className="flex flex-col justify-center gap-1">
          <h5 className="incline-block mx-auto rounded-sm bg-[#F05186] px-2 text-center text-3xl font-medium text-white md:px-4 md:text-3xl lg:text-4xl">
            GOT AN IDEA?
          </h5>
          <h6 className="pt-1 text-center text-lg font-thin text-violet-600 md:pt-2 md:text-2xl lg:text-3xl">
            Let's Work On it
          </h6>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            className="w-[50%] rounded-sm border border-gray-400 px-2 py-1 md:w-[50%] md:px-6 md:py-2 lg:w-[30%]"
            placeholder="Enter your email"
          />
          <button className="md:text-md cursor-pointer rounded-sm bg-violet-400 px-4 py-1 text-white md:px-6 md:py-2">
            search
          </button>
        </div>
        <div className="flex items-center justify-center gap-1 pb-4">
          {SocialIcons.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.icon}
                  height={100}
                  width={100}
                  alt={item.name}
                  className="w-8 md:w-10 lg:w-12"
                ></Image>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        {footerItems?.map((item, index) => {
          return (
            <Link
              href=""
              key={index}
              className={`md:text-md border-gray-300 px-1 text-center text-sm font-thin text-gray-600 sm:text-sm md:px-4 md:font-normal lg:text-lg xl:text-xl ${
                index == footerItems.length - 1 ? "" : "border-r md:border-r-2"
              } ${index == 3 ? "flex-2" : "flex-1"}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
