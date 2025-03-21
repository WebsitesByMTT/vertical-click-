import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* hero */}
      <div className="max-w-[70vw] mx-auto flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold uppercase">We innovate</h1>
          {/* digital with #F05186 background color border radius */}
          <h1 className="text-9xl font-bold uppercase bg-[#F05186] rounded-md text-white inline-block px-4 py-2">
            digital
          </h1>
          <h1 className="text-9xl font-bold uppercase text-[#8F5BFE]">
            experiences
          </h1>
          <h1 className="text-9xl font-bold uppercase">daily!</h1>
        </div>
      </div>
      {/* divider */}
      <div className="max-w-[70vw] mx-auto h-1 bg-gray-300"></div>
      {/* what we provide */}
      <div className="max-w-[70vw] mx-auto">
        {/* title */}
        <h1 className="text-4xl font-bold uppercase p-4">What we provide?</h1>
        {/* content */}
        <div className="container flex justify-center items-center w-full">
          <div className="w-1/2">
            <Image
              src="/images/example.png"
              alt="design"
              width={500}
              height={500}
              // className="w-full"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold uppercase bg-[#F05186] rounded-md text-white inline-block px-4 py-2 ">
              Digital
            </h1>
            <h3 className="text-4xl font-bold uppercase">
              We innovate digital experiences daily!
            </h3>
            <p className="text-[20px]">
              Vertical Clicks, a leading digital marketing agency in Euless,
              Texas combines creativity and technical expertise to develop and
              execute successful digital strategies for clients.
            </p>
            <Link
              className="bg-gradient-to-r from-[#F05186] to-[#8F5BFE] text-white px-4 py-2 rounded-md inline-flex items-center gap-2 w-fit mt-4"
              href="/about"
            >
              ABOUT US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* about */}
      {/* footer */}
    </div>
  );
}
