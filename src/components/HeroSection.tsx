import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  pinkBgText: string;
  description?: string;
}

const HeroSection = ({
  title,
  subtitle,
  pinkBgText,
  description,
}: HeroSectionProps) => {
  return (
    <section className="mx-auto my-20 flex w-full flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-medium uppercase underline xl:text-5xl">
        {title}
      </h1>
      <h2 className="mt-4 text-center text-3xl font-bold uppercase md:mt-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        {subtitle}
      </h2>
      <h2 className="mb-4 rounded-md bg-[#F05186] px-2 text-center text-3xl font-bold text-white uppercase md:mb-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        {pinkBgText}
      </h2>
      {description && (
        <p className="max-w-4xl text-center text-sm font-normal lg:text-lg">
          {description}
        </p>
      )}
    </section>
  );
};

export default HeroSection;
