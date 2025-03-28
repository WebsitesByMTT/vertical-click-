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
    <div className="mx-auto w-full px-4">
      <h6 className="mx-auto py-4 pb-8 text-lg font-medium md:text-5xl">
        KEY HIGHLIGHTS
      </h6>
      <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hitems.map((item, index) => (
          <div
            key={index}
            className="rounded-md bg-violet-100 px-2 py-2 md:px-4 md:py-6 border border-purple-400"
          >
            <Image
              src={item.icon}
              alt={item.msg}
              width={100}
              height={100}
              className="size-6 md:size-12 mb-4"
            />
            <span className="mt-4 pt-4  text-xs font-normal md:text-xl lg:text-2xl">
              {item.msg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
