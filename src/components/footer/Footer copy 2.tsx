import Image from "next/image"
import Link from "next/link"
import InstaIcon from "@/assets/images/instaIcon.png";
import FacebookIcon from "@/assets/images/facebookIcon.png";
import TweetIcon from "@/assets/images/tweetIcon.png";

function Footer() {
  const footerItems = ["Explore", "Our Blogs", "Our Work", "Website Seo Audit", "Get in Touch", "Work with us"]

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
    <footer className="w-full  px-4 md:px-8 py-8 bg-white">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between gap-8">

         <div className="grid grid-cols-2 gap-1 md:grid-cols-1  self-center">
            {footerItems?.map((item, index) => (
              <Link
                href=""
                key={index}
                className="text-md md:text-base lg:text-lg text-gray-600 hover:text-violet-600 transition-colors text-center md:text-left"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right side - Contact form and social icons */}
          <div className="flex flex-col items-center md:items-end gap-6 md:w-1/2 ">
            <div className="flex flex-col items-center gap-2 w-full max-w-md">
              <h5 className="rounded-sm bg-[#F05186] px-4 py-1 text-center text-2xl md:text-3xl font-medium text-white shadow-md">
                GOT AN IDEA?
              </h5>
              <h6 className="pt-1 text-center text-lg md:text-xl lg:text-2xl font-light text-violet-600">
                Let's Work On it
              </h6>
            </div>

            <div className="flex items-center justify-center w-full max-w-md gap-2">
              <input
                type="text"
                className="flex-1 rounded-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Enter your email"
              />
              <button className="cursor-pointer rounded-sm bg-violet-500 hover:bg-violet-600 px-4 py-2 text-white transition-colors">
                Search
              </button>
            </div>

            <div className="flex flex-col items-center   w-full gap-1 mt-2 max-w-md ">
                <p className="text-sm"><span className="text-md font-semibold">Address: </span>&nbsp; 1001 W Euless Blvd, suit 408, Euless, TX 76040, United States</p>
                <p className="text-sm"><span className="text-md font-semibold">Hours: </span>&nbsp;Open 24 hours</p>
                <p className="text-sm"><span className="text-md font-semibold">Call us:</span>&nbsp; +1 469-810-5586</p>
            </div>

            <div className="flex items-center  justify-center w-full gap-4 mt-2 max-w-md ">
              {SocialIcons.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Image
                    src={item.icon}
                    height={40}
                    width={40}
                    alt={item.name}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

