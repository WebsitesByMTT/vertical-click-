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
        "max-w-[90vw] md:max-w-[70vw] mx-auto flex flex-col items-center justify-between",
        imageOrientation === "right" ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <img src={image} alt={title} width={500} className="md:mr-8" />
      <div>
        <h1 className="mt-4 md:mt-0 text-4xl md:text-5xl font-medium uppercase">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-2xl font-normal mt-4 max-w-2xl">
            {description}
          </p>
        )}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="list-disc pl-6 mt-4 text-lg md:text-xl space-y-2">
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
