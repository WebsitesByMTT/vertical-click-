import React from "react";

interface TextBoxProps {
  title: string;
  description: string;
}

const TextBox = ({ title, description }: TextBoxProps) => {
  //max-w-[90vw] md:max-w-[70vw]
  return (
    <section className="mx-auto mt-6 flex flex-col justify-between space-x-11 py-4 sm:py-0 md:mt-0 md:flex-row">
      <h3 className="py-1 text-2xl font-medium uppercase sm:py-0 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {title}
      </h3>
      <p className="font-normal md:max-w-8/12 md:text-lg lg:text-xl xl:text-2xl">
        {description}
      </p>
    </section>
  );
};

export default TextBox;
