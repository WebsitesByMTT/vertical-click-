import React from "react";

interface TextBoxProps {
  title: string;
  description: string;
}

const TextBox = ({ title, description }: TextBoxProps) => {
  return (
    <section className="max-w-[90vw] md:max-w-[70vw] mx-auto flex flex-col md:flex-row justify-between space-x-32 mt-6 md:mt-0">
      <h1 className="text-4xl md:text-5xl font-medium uppercase">{title}</h1>
      <p className="text-xl md:text-2xl font-normal max-w-xl">{description}</p>
    </section>
  );
};

export default TextBox;
