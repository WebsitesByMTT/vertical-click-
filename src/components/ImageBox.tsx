import { cn } from "@/lib/utils";
import React from "react";
interface ImageBoxProps {
  title: string;
  description?: string;
  bulletPoints?: string[];
  image: string;
  imageOrientation: "left" | "right";
}

const ImageBox: React.FC<ImageBoxProps> = ({
  title,
  description,
  bulletPoints,
  image,
  imageOrientation,
}) => {
  return (
    <section
      className={cn(
        "mx-auto flex w-full flex-col items-center justify-between",
        imageOrientation === "right" ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      <img
        src={image}
        alt={title}
        width={500}
        className="w-full md:w-90 lg:mr-8"
      />
      <div>
        <h1 className="mt-4 text-4xl font-medium uppercase md:mt-0 md:text-2xl xl:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg font-normal md:text-xl xl:text-2xl">
            {description}
          </p>
        )}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg md:text-sm lg:text-lg xl:text-xl">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ImageBox;
