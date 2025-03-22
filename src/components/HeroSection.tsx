import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  pinkBgText: string;
  description: string;
}

const HeroSection = ({
  title,
  subtitle,
  pinkBgText,
  description,
}: HeroSectionProps) => {
  return (
    <section className="max-w-[70vw] h-screen mx-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl font-medium uppercase underline">{title}</h1>
      <h1 className="text-7xl font-bold uppercase text-center mt-10">
        {subtitle}
      </h1>
      <h1 className="text-7xl font-bold uppercase text-center bg-[#F05186] text-white px-2 rounded-md mb-10">
        {pinkBgText}
      </h1>
      {description && (
        <p className="text-lg font-normal text-center max-w-4xl">
          {description}
        </p>
      )}
    </section>
  );
};

export default HeroSection;
