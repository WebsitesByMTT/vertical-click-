import React from "react";

interface TextBoxProps {
  title: string;
  description: string;
}

const TextBox = ({ title, description }: TextBoxProps) => {
  //max-w-[90vw] md:max-w-[70vw]
  return (
    <section className="max-w-[90vw] md:max-w-[70vw] mx-auto flex flex-col md:flex-row justify-between  space-x-32 mt-6 md:mt-0 py-4 sm:py-0 ">
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-medium uppercase py-1 sm:py-0">{title}</h1>
      <p className="text-md sm:text-md md:text-lg lg:text-2xl font-normal max-w-xl font-sans">{description}</p>
    </section>
  );
};

export default TextBox;
