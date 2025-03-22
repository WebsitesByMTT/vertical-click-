import React from "react";

interface TextBoxProps {
  title: string;
  description: string;
}

const TextBox = ({ title, description }: TextBoxProps) => {
  return (
    <section className="max-w-[70vw] mx-auto flex justify-between space-x-32">
      <h1 className="text-5xl font-medium uppercase">{title}</h1>
      <p className="text-2xl font-normal max-w-xl">{description}</p>
    </section>
  );
};

export default TextBox;
