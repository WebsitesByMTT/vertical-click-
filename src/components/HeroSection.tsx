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
    <section className="mx-auto flex h-[60vh] w-full flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-medium uppercase underline lg:text-5xl">
        {title}
      </h1>
      <h1 className="mt-4 text-center text-3xl font-bold uppercase md:mt-10 md:text-5xl lg:text-7xl">
        {subtitle}
      </h1>
      <h1 className="mb-4 rounded-md bg-[#F05186] px-2 text-center text-3xl font-bold text-white uppercase md:mb-10 md:text-5xl lg:text-7xl">
        {pinkBgText}
      </h1>
      {description && (
        <p className="max-w-4xl text-center text-sm font-normal md:text-lg">
          {description}
        </p>
      )}
    </section>
  );
};

export default HeroSection;
