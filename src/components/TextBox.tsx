import React from "react";

interface TextBoxProps {
  title: string;
  description: string;
}

const TextBox = ({ title, description }: TextBoxProps) => {
  //max-w-[90vw] md:max-w-[70vw]
  return (
    <section className="mx-auto mt-6 flex flex-col justify-between space-x-11 py-4 sm:py-0 md:mt-0 md:flex-row lg:space-x-32">
      <h1 className="py-1 text-xl font-medium uppercase sm:py-0 sm:text-xl md:text-2xl lg:text-4xl">
        {title}
      </h1>
      <p className="max-w-xl font-normal md:text-lg lg:text-2xl">
        {description}
      </p>
    </section>
  );
};

export default TextBox;
