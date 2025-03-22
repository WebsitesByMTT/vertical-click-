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
    <section className="max-w-[70vw] mx-auto flex items-center justify-between">
      {imageOrientation === "left" && (
        <img src={image} alt={title} width={500} className="mr-8" />
      )}
      <div>
        <h1 className="text-5xl font-medium uppercase">{title}</h1>
        {description && (
          <p className="text-2xl font-normal mt-4 max-w-2xl">{description}</p>
        )}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="list-disc pl-6 mt-4 text-xl space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      {imageOrientation === "right" && (
        <img src={image} alt={title} width={500} className="ml-8" />
      )}
    </section>
  );
};

export default ImageBox;
