import React from "react";
import Award from "@/assets/icons/award.png";
import Battery from "@/assets/icons/battery.png";
import Tools from "@/assets/icons/tools.png";
import Views from "@/assets/icons/views.png";
import Engagement from "@/assets/icons/Icon (1).png";
import Trend from "@/assets/icons/Icon.png";
import Image from "next/image";

function Highlights() {
  const hitems = [
    {
      icon: Battery,
      msg: "Creativity-driven approach",
    },
    {
      icon: Views,
      msg: "Data-backed insights",
    },
    {
      icon: Engagement,
      msg: "High audience engagement",
    },
    {
      icon: Trend,
      msg: "Staying ahead of trends",
    },
    {
      icon: Award,
      msg: "Award-winning solutions",
    },
    {
      icon: Tools,
      msg: "Cutting-edge tools",
    },
  ];

  return (
    <div className="px-4 w-auto md:w-[70vw] mx-auto ">
      <h2 className="text-lg font-medium md:text-5xl py-4 pb-8 mx-auto">
        KEY HIGHLIGHTS
      </h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        {hitems.map((item, index) => (
          <div
            key={index}
            className="px-6 md:px-10 py-2 md:py-10 rounded-md bg-violet-100 "
          >
            <Image
              src={item.icon}
              alt={item.msg}
              width={100}
              height={100}
              className="size-6 md:size-12"
            />
            <span className="text-xs md:text-2xl font-normal mt-4">
              {item.msg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
