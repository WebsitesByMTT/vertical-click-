import Link from "next/link";
import { MapPin, Phone, Mail, Divide } from "lucide-react";
import InstaIcon from "@/assets/images/instaIcon.png";
import FacebookIcon from "@/assets/images/facebookIcon.png";
import TweetIcon from "@/assets/images/tweetIcon.png";
import Image from "next/image";
import { link } from "fs";

function Footer() {
  const footerItems = [
    { tag: "Explore", link: "/our-services" },
    { tag: "Our Blogs", link: "" },
    { tag: "Our Work", link: "" },
    {
      tag: "Website Seo Audit",
      link: "/our-services/search-engine-optimization",
    },
    { tag: "Get in Touch", link: "/contact-us" },
    { tag: "Work with us", link: "" },
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
    <footer className="mx-auto overflow-hidden border-gray-300">
      {/* Main footer content */}
      <div className="mx-auto flex w-[90vw] flex-col items-start justify-between gap-8 md:flex-row xl:w-[80vw] 2xl:w-[70vw]">
        {/* Left side - Navigation links */}
        <div className="flex flex-col space-y-3">
          <h3 className="mb-2 text-lg font-medium text-violet-600">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 gap-x-4 gap-y-3">
            {footerItems?.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="text-sm text-gray-600 transition-colors hover:text-violet-500 md:text-base"
                >
                  {item.tag}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side - Contact information and CTA */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          {/* GOT AN IDEA section */}
          <div className="mb-4 flex flex-col items-start justify-start gap-1">
            <h5 className="inline-block rounded-sm bg-[#F05186] px-2 text-start text-2xl font-medium text-white md:px-4 md:text-3xl">
              GOT AN IDEA?
            </h5>
            <h6 className="pt-1 text-lg font-thin text-violet-600 md:pt-2 md:text-2xl">
              Let's Work On it
            </h6>
          </div>

          {/* Email input */}
          <div className="mb-6 flex items-start gap-2">
            <input
              type="text"
              className="w-2/3 rounded-sm border border-gray-400 px-2 py-1 md:px-4 md:py-2"
              placeholder="Enter your email"
            />
            <button className="cursor-pointer rounded-sm bg-violet-400 px-4 py-1 text-white md:px-6 md:py-2">
              search
            </button>
          </div>

          {/* Contact information */}
          <div className="mb-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[#F05186]" />
              <p className="text-sm text-gray-600 md:text-base">
                123 Digital Avenue, Tech Park, <br />
                Silicon Valley, CA 94025
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#F05186]" />
              <p className="text-sm text-gray-600 md:text-base">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#F05186]" />
              <p className="text-sm text-gray-600 md:text-base">
                contact@verticalclick.com
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
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
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-8 md:w-10 xl:w-12"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="my-4 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vertical Click. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
